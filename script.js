/* global resumeData */

(() => {
  const state = { lang: resumeData.defaultLang || "zh-Hant" };
  const $ = (selector) => document.querySelector(selector);

  function t(path) {
    return path.split(".").reduce((acc, key) => acc?.[key], resumeData.i18n[state.lang]);
  }

  function langText(localizedValue) {
    if (!localizedValue) return "";
    if (typeof localizedValue === "string") return localizedValue;
    return localizedValue[state.lang] || localizedValue["zh-Hant"] || localizedValue.en || "";
  }

  function applySiteMeta() {
    const meta = resumeData.siteMeta || {};
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.ogTitle || "");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.ogDescription || "");
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", meta.ogImage || "");
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", meta.ogUrl || "");
  }

  function renderNav() {
    const navList = $("#navList");
    navList.innerHTML = resumeData.navOrder
      .map((id) => `<li><a href="#${id}" data-target="${id}">${t(`nav.${id}`)}</a></li>`)
      .join("");

    document.querySelectorAll("[data-nav]").forEach((el) => {
      const sectionKey = el.getAttribute("data-nav");
      el.textContent = t(`nav.${sectionKey}`);
    });
  }

  function renderHero() {
    const hero = t("hero");
    $("#nameZh").textContent = hero.nameZh;
    $("#nameEn").textContent = hero.nameEn;
    $("#heroTitle").textContent = hero.title;
    $("#heroIntro").textContent = hero.intro;
    $("#profilePhoto").src = resumeData.profilePhoto;

    $("#quickLinks").innerHTML = (hero.ctas || []).map((cta) => `<a href="#${cta.target}">${cta.label}</a>`).join("");

    const wrap = $("#pdfButtonWrap");
    if (resumeData.resumePdfPath) {
      wrap.innerHTML = `<a class="pdf-btn" href="${resumeData.resumePdfPath}" target="_blank" rel="noreferrer noopener">${hero.downloadLabel}</a>`;
    } else {
      wrap.innerHTML = "";
    }
  }

  function renderAbout() {
    $("#aboutTitle").textContent = t("about.heading");
    $("#aboutSubtitle").textContent = t("sectionSubtitle");
    $("#aboutSummary").textContent = t("about.summary");

    $("#educationList").innerHTML = resumeData.education
      .map(
        (item) => `
          <article class="card">
            <h3>${langText(item.school)}</h3>
            <p class="meta">${t("labels.period")}: ${langText(item.period)}</p>
            ${item.gpa ? `<p><span class="gpa-pill">${t("labels.gpa")}: ${item.gpa}</span></p>` : ""}
          </article>`
      )
      .join("");
  }

  function renderExperience() {
    const list = resumeData.experience || [];
    if (!list.length) return ($("#experience").style.display = "none");
    $("#experience").style.display = "";

    $("#experienceList").innerHTML = list
      .map((item) => {
        const bullets = (item.highlights?.[state.lang] || []).map((line) => `<li>${line}</li>`).join("");
        return `
          <article class="timeline-item card">
            <h3>${langText(item.organization)}</h3>
            <p><strong>${t("labels.role")}:</strong> ${langText(item.role)}</p>
            <p class="meta"><strong>${t("labels.period")}:</strong> ${langText(item.period)}</p>
            ${bullets ? `<ul>${bullets}</ul>` : ""}
          </article>`;
      })
      .join("");
  }

  function renderProjects() {
    const list = resumeData.projects || [];
    if (!list.length) return ($("#projects").style.display = "none");
    $("#projects").style.display = "";

    $("#projectList").innerHTML = list
      .map((project) => {
        const responsibilities = (project.responsibilities?.[state.lang] || []).map((a) => `<li>${a}</li>`).join("");
        const outcomes = (project.outcomes?.[state.lang] || []).map((o) => `<li>${o}</li>`).join("");
        const tags = (project.tags || []).map((tag) => `<span class="chip">${tag}</span>`).join(" ");
        const linkBtn = project.externalLink
          ? `<a class="project-link" href="${project.externalLink}" target="_blank" rel="noreferrer noopener">${t("labels.viewSite")}</a>`
          : "";
        const snippet = langText(project.codeSnapshot);

        return `
          <article class="card ${project.featured ? "featured-project" : ""}">
            <h3>${langText(project.title)}</h3>
            <p><strong>${t("labels.role")}:</strong> ${langText(project.role)}</p>
            <p>${langText(project.intro)}</p>
            ${responsibilities ? `<p><strong>${t("labels.responsibilities")}</strong></p><ul>${responsibilities}</ul>` : ""}
            ${outcomes ? `<p><strong>${t("labels.outcomes")}</strong></p><ul>${outcomes}</ul>` : ""}
            ${tags ? `<div class="tag-row">${tags}</div>` : ""}
            ${linkBtn}
            ${snippet ? `<div class="code-card"><strong>${t("labels.codeSnapshot")}</strong><pre>${snippet}</pre></div>` : ""}
          </article>`;
      })
      .join("");
  }

  function renderAwards() {
    const list = resumeData.awards || [];
    if (!list.length) return ($("#awards").style.display = "none");
    $("#awards").style.display = "";

    $("#awardList").innerHTML = list
      .map((award) => `<li><span>${langText(award.title)}</span><strong class="award-year">${award.year}</strong></li>`)
      .join("");
  }

  function renderSkills() {
    const skills = resumeData.skills || {};
    $("#skillBlocks").innerHTML = `
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "語言能力" : "Language Proficiency"}</h3>
        ${(skills.languageGroup || []).map((item) => `<p>${state.lang === "zh-Hant" ? item.zh : item.en}</p>`).join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "數位工具 / AI 標籤" : "Digital Tools / AI Tags"}</h3>
        <div class="tag-row">${(skills.tools || []).map((tool) => `<span class="chip">${tool}</span>`).join(" ")}</div>
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "AI 與網站實作" : "AI & Web Practice"}</h3>
        ${(skills.aiWeb || []).map((item) => `<p>${langText(item)}</p>`).join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "核心能力" : "Core Competencies"}</h3>
        <div class="tag-row">${(skills.core || []).map((item) => `<span class="chip">${langText(item)}</span>`).join(" ")}</div>
      </article>`;
  }

  function renderEvidence() {
    const visibleItems = (resumeData.evidence || []).filter((item) => item.visible);
    if (!visibleItems.length) return ($("#evidence").style.display = "none");
    $("#evidence").style.display = "";

    $("#evidenceHint").textContent = t("evidenceTitle");
    $("#evidenceList").innerHTML = visibleItems
      .map(
        (item) => `<article class="card">
          <p class="meta">${t("labels.type")}: ${langText(item.type)}</p>
          <h3>${langText(item.title)}</h3>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer noopener">${item.link}</a>` : ""}
        </article>`
      )
      .join("");
  }

  function renderContact() {
    const contacts = [
      ...((resumeData.contact.emails || []).map((email) => ["Email", email, `mailto:${email}`])),
      [state.lang === "zh-Hant" ? "手機" : "Phone", resumeData.contact.phone, `tel:${resumeData.contact.phone}`]
    ].filter((item) => item[1]);

    $("#contactTitle").textContent = t("contactTitle");
    $("#contactList").innerHTML = contacts
      .map(([label, value, href]) => `<article class="card"><h3>${label}</h3><a href="${href}">${value}</a></article>`)
      .join("");
  }

  function applyLanguageAttrs() {
    document.documentElement.lang = state.lang;
    $("#langToggle").textContent = state.lang === "zh-Hant" ? "EN" : "中";
    $("#footerText").textContent = t("footer");
  }

  function bindActiveSectionObserver() {
    const links = Array.from(document.querySelectorAll("#navList a"));
    const sections = links.map((link) => document.getElementById(link.dataset.target)).filter(Boolean);

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
    applySiteMeta();
    renderNav();
    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderAwards();
    renderSkills();
    renderEvidence();
    renderContact();
    applyLanguageAttrs();
    bindActiveSectionObserver();
  }

  $("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "zh-Hant" ? "en" : "zh-Hant";
    renderAll();
  });

  renderAll();
})();
