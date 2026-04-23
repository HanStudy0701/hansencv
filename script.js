(() => {
  const rootScope = typeof globalThis !== "undefined" ? globalThis : window;
  const resumeData = rootScope.resumeData || {};
  const state = { lang: resumeData.defaultLang || "zh-Hant" };
  const $ = (selector) => document.querySelector(selector);
  const ensureArray = (value) => (Array.isArray(value) ? value : []);
  const setText = (selector, value) => {
    const node = $(selector);
    if (!node) return;
    node.textContent = value ?? "";
  };


  function showDataError(message) {
    let banner = document.getElementById("dataErrorBanner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "dataErrorBanner";
      banner.className = "data-error-banner";
      document.body.prepend(banner);
    }
    banner.textContent = message;
  }

  function showPdfNotice() {
    const notice = document.getElementById("pdfTopNotice");
    if (!notice) return;
    notice.classList.add("visible");
    window.setTimeout(() => notice.classList.remove("visible"), 7000);
  }

  function validateResumeDataShape() {
    const requiredTopLevelKeys = ["i18n", "contact", "education", "navOrder"];
    const missingKeys = requiredTopLevelKeys.filter((key) => !(key in resumeData));

    if (missingKeys.length) console.warn("resumeData 缺少欄位:", missingKeys.join(", "));

    if (!resumeData.i18n || typeof resumeData.i18n !== "object") {
      resumeData.i18n = { "zh-Hant": {}, en: {} };
    }

    if (!resumeData.i18n[state.lang]) {
      const fallbackLang = Object.keys(resumeData.i18n)[0] || "zh-Hant";
      state.lang = fallbackLang;
      console.warn(`找不到語系 ${resumeData.defaultLang || "zh-Hant"}，已改用 ${fallbackLang}`);
    }

    if (!Array.isArray(resumeData.navOrder)) resumeData.navOrder = [];
    if (!Array.isArray(resumeData.education)) resumeData.education = [];
    if (!resumeData.contact || typeof resumeData.contact !== "object") resumeData.contact = {};
  }

  function hasRenderableData() {
    return Boolean(resumeData && resumeData.i18n && Object.keys(resumeData.i18n).length);
  }
  function t(path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), resumeData.i18n[state.lang]);
  }

  function langText(localizedValue) {
    if (!localizedValue) return "";
    if (typeof localizedValue === "string") return localizedValue;
    return localizedValue[state.lang] || localizedValue["zh-Hant"] || localizedValue.en || "";
  }

  function applySiteMeta() {
    const meta = resumeData.siteMeta || {};
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.ogTitle || "");
    if (ogDescription) ogDescription.setAttribute("content", meta.ogDescription || "");
    if (ogImage) ogImage.setAttribute("content", meta.ogImage || "");
    if (ogUrl) ogUrl.setAttribute("content", meta.ogUrl || "");
  }

  function renderNav() {
    const navList = $("#navList");
    if (!navList) return;
    navList.innerHTML = resumeData.navOrder
      .map((id) => `<li><a href="#${id}" data-target="${id}">${t(`nav.${id}`)}</a></li>`)
      .join("");

    document.querySelectorAll("[data-nav]").forEach((el) => {
      const sectionKey = el.getAttribute("data-nav");
      el.textContent = t(`nav.${sectionKey}`);
    });
  }

  function renderHero() {
    const hero = t("hero") || {};
    setText("#nameZh", hero.nameZh);
    setText("#nameEn", hero.nameEn);
    setText("#heroTitle", hero.title);
    setText("#heroIntro", hero.intro);

    const profilePhoto = $("#profilePhoto");
    if (profilePhoto) profilePhoto.src = resumeData.profilePhoto || "";

    const heroContacts = $("#heroContacts");
    if (heroContacts) {
      heroContacts.innerHTML = `
      ${ensureArray(resumeData.contact.emails)
        .map((email) => `<a href="mailto:${email}">${email}</a>`)
        .join("")}
      ${resumeData.contact.phone ? `<a href="tel:${resumeData.contact.phone}">${resumeData.contact.phone}</a>` : ""}
    `;
    }

    const quickLinks = $("#quickLinks");
    if (quickLinks) {
      quickLinks.innerHTML = ensureArray(hero.ctas).map((cta) => `<a href="#${cta.target}">${cta.label}</a>`).join("");
    }

  }

  function renderAbout() {
    setText("#aboutTitle", t("about.heading"));
    setText("#aboutSubtitle", t("sectionSubtitle"));
    setText("#aboutSummary", t("about.summary"));

    const educationList = $("#educationList");
    if (!educationList) return;
    educationList.innerHTML = ensureArray(resumeData.education)
      .map(
        (item) => `
          <article class="card">
            <h3>${langText(item.school)}</h3>
            ${item.degree ? `<p class="meta">${t("labels.degree")}: ${langText(item.degree)}</p>` : ""}
            ${item.period ? `<p class="meta">${t("labels.period")}: ${langText(item.period)}</p>` : ""}
            ${item.gpa ? `<p><span class="gpa-pill">${t("labels.gpa")}: ${item.gpa}</span></p>` : ""}
          </article>`
      )
      .join("");
  }

  function renderExperience() {
    const list = ensureArray(resumeData.experience);
    if (!list.length) return ($("#experience").style.display = "none");
    $("#experience").style.display = "";

    $("#experienceList").innerHTML = list
      .map((item) => {
        const bullets = (item.highlights?.[state.lang] || []).map((line) => `<li>${line}</li>`).join("");
        return `
          <article class="timeline-item card emphasis-card">
            <h3>${langText(item.organization)}</h3>
            <p><strong>${t("labels.role")}:</strong> ${langText(item.role)} ｜ ${langText(item.period)}</p>
            ${bullets ? `<ul>${bullets}</ul>` : ""}
          </article>`;
      })
      .join("");
  }

  function renderProjects() {
    const list = ensureArray(resumeData.projects);
    if (!list.length) return ($("#projects").style.display = "none");
    $("#projects").style.display = "";

    $("#projectList").innerHTML = list
      .map((project) => {
        const responsibilities = (project.responsibilities?.[state.lang] || []).map((a) => `<li>${a}</li>`).join("");
        const outcomes = (project.outcomes?.[state.lang] || []).map((o) => `<li>${o}</li>`).join("");
        const tags = (project.tags || []).map((tag) => `<span class="chip">${tag}</span>`).join(" ");

        return `
          <article class="card ${project.featured ? "featured-project" : ""}">
            <h3>${langText(project.title)}</h3>
            ${project.role ? `<p><strong>${t("labels.role")}:</strong> ${langText(project.role)}</p>` : ""}
            ${project.status ? `<p class="meta"><strong>${t("labels.status")}:</strong> ${langText(project.status)}</p>` : ""}
            ${project.intro ? `<p>${langText(project.intro)}</p>` : ""}
            ${responsibilities ? `<p><strong>${t("labels.responsibilities")}</strong></p><ul>${responsibilities}</ul>` : ""}
            ${outcomes ? `<p><strong>${t("labels.outcomes")}</strong></p><ul>${outcomes}</ul>` : ""}
            ${ensureArray(project.plannedKpi?.[state.lang]).length ? `<p><strong>${t("labels.kpi")}</strong></p><ul>${ensureArray(project.plannedKpi?.[state.lang]).map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
            ${tags ? `<div class="tag-row">${tags}</div>` : ""}
            ${project.externalLink ? `<a class="project-link" href="${project.externalLink}" target="_blank" rel="noopener noreferrer">${t("labels.viewSite")}</a>` : ""}
          </article>`;
      })
      .join("");
  }

  function renderPublications() {
    const groups = ensureArray(resumeData.awardsPublications);
    if (!groups.length) return ($("#publications").style.display = "none");
    $("#publications").style.display = "";

    $("#publicationGroups").innerHTML = groups
      .map(
        (group) => `<article class="card">
          <h3>${langText(group.category)}</h3>
          <ul>${ensureArray(group.items).map((item) => `<li>${langText(item)}</li>`).join("")}</ul>
        </article>`
      )
      .join("");
  }

  function renderCertifications() {
    const list = ensureArray(resumeData.certifications);
    if (!list.length) return ($("#certifications").style.display = "none");
    $("#certifications").style.display = "";

    $("#certificationList").innerHTML = list.map((cert) => `<li><span>${langText(cert)}</span></li>`).join("");
  }

  function renderActivities() {
    const list = ensureArray(resumeData.activities);
    if (!list.length) return ($("#activities").style.display = "none");
    $("#activities").style.display = "";
    $("#activityList").innerHTML = list.map((item) => `<li><span>${langText(item)}</span></li>`).join("");
  }

  function renderSkills() {
    const skills = resumeData.skills || {};
    const skillBlocks = $("#skillBlocks");
    if (!skillBlocks) return;
    skillBlocks.innerHTML = `
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "語言能力" : "Languages"}</h3>
        ${ensureArray(skills.languageGroup).map((item) => `<p>${state.lang === "zh-Hant" ? item.zh : item.en}</p>`).join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "數位工具" : "Digital Tools"}</h3>
        <div class="tag-row">${ensureArray(skills.digitalTools).map((tool) => `<span class="chip">${tool}</span>`).join(" ")}</div>
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "AI 與網站實作" : "AI & Website Practice"}</h3>
        <div class="tag-row">${ensureArray(skills.aiWeb).map((item) => `<span class="chip">${langText(item)}</span>`).join(" ")}</div>
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "核心能力" : "Core Capabilities"}</h3>
        <div class="tag-row">${ensureArray(skills.core).map((item) => `<span class="chip">${langText(item)}</span>`).join(" ")}</div>
      </article>`;
  }

  function renderEvidence() {
    const visibleItems = ensureArray(resumeData.evidence).filter((item) => item.visible);
    if (!visibleItems.length) return ($("#evidence").style.display = "none");
    $("#evidence").style.display = "";

    setText("#evidenceHint", t("evidenceTitle"));
    $("#evidenceList").innerHTML = visibleItems
      .map(
        (item) => `<article class="card">
          <p class="meta">${t("labels.type")}: ${langText(item.type)}</p>
          <h3>${langText(item.title)}</h3>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.link}</a>` : ""}
        </article>`
      )
      .join("");
  }

  function renderContact() {
    const contacts = [
      ...(ensureArray(resumeData.contact.emails).map((email) => ["Email", email, `mailto:${email}`])),
      [state.lang === "zh-Hant" ? "手機" : "Phone", resumeData.contact.phone, `tel:${resumeData.contact.phone}`]
    ].filter((item) => item[1]);

    setText("#contactTitle", t("contactTitle"));
    const contactList = $("#contactList");
    if (!contactList) return;
    contactList.innerHTML = contacts
      .map(([label, value, href]) => `<article class="card"><h3>${label}</h3><a href="${href}">${value}</a></article>`)
      .join("");
  }

  function renderDownloadSection() {
    const title = $("#downloadTitle");
    const hint = $("#downloadHint");
    const actions = $("#downloadActions");
    if (!title || !hint || !actions) return;

    const hasPdf = Boolean(resumeData.resumePdfPath);

    title.textContent = t("download.title");
    hint.textContent = t("download.hint");

    actions.innerHTML = hasPdf
      ? `
      <a class="project-link js-pdf-link" href="${resumeData.resumePdfPath}" target="_blank" rel="noopener noreferrer">
        ${t("download.downloadPdf")}
      </a>
      <div id="pdfTopNotice" class="pdf-top-notice">
        <span>${t("download.noticeText")}</span>
        <a href="${(resumeData.siteMeta && resumeData.siteMeta.ogUrl) || "#top"}" target="_blank" rel="noopener noreferrer">${t("download.noticeLink")}</a>
      </div>`
      : `<button id="printPdfBtn" class="project-link" type="button">${t("download.printFallback")}</button>`;

    if (hasPdf) {
      document.querySelectorAll(".js-pdf-link").forEach((link) => {
        link.addEventListener("click", showPdfNotice);
      });
      return;
    }

    const printBtn = $("#printPdfBtn");
    if (!printBtn) return;
    printBtn.onclick = () => {
      window.print();
    };
  }

  function setupBackToTop() {
    const btn = $("#backToTopBtn");
    btn.textContent = t("hero.backToTop");
    const toggle = () => {
      const show = window.scrollY > 420 || window.innerHeight + window.scrollY > document.body.offsetHeight - 240;
      btn.classList.toggle("visible", show);
    };
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function applyLanguageAttrs() {
    document.documentElement.lang = state.lang;
    setText("#langToggle", state.lang === "zh-Hant" ? "EN" : "中");
    setText("#footerText", t("footer"));
  }

  function bindActiveSectionObserver() {
    const links = Array.from(document.querySelectorAll("#navList a"));
    const sections = links.map((link) => document.getElementById(link.dataset.target)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => link.classList.toggle("active", link.dataset.target === entry.target.id));
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function renderAll() {
    const renderSteps = [
      ["meta", applySiteMeta],
      ["nav", renderNav],
      ["hero", renderHero],
      ["about", renderAbout],
      ["experience", renderExperience],
      ["projects", renderProjects],
      ["publications", renderPublications],
      ["certifications", renderCertifications],
      ["activities", renderActivities],
      ["skills", renderSkills],
      ["evidence", renderEvidence],
      ["contact", renderContact],
      ["download", renderDownloadSection],
      ["lang", applyLanguageAttrs],
      ["activeSectionObserver", bindActiveSectionObserver],
      ["backToTop", setupBackToTop]
    ];
    renderSteps.forEach(([stepName, stepFn]) => {
      try {
        stepFn();
      } catch (error) {
        console.error(`Render step failed: ${stepName}`, error);
      }
    });
  }

  function boot() {
    const langToggle = $("#langToggle");
    if (langToggle) {
      langToggle.addEventListener("click", () => {
        state.lang = state.lang === "zh-Hant" ? "en" : "zh-Hant";
        renderAll();
      });
    }

    if (!hasRenderableData()) {
      showDataError("內容尚未載入成功，請重新整理；若仍無顯示，請清除快取後再試。");
      console.error("resumeData missing or empty:", resumeData);
      return;
    }

    validateResumeDataShape();
    try {
      renderAll();
    } catch (error) {
      console.error("Resume rendering failed:", error);
      showDataError("內容顯示異常：已套用安全模式，請重新整理後再試。");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
