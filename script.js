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

    $("#quickLinks").innerHTML = hero.ctas
      .map((cta) => `<a href="#${cta.target}">${cta.label}</a>`)
      .join("");
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
            ${item.gpa ? `<p class="meta">${t("labels.gpa")}: ${item.gpa}</p>` : ""}
          </article>`
      )
      .join("");
  }

  function renderExperience() {
    const list = resumeData.experience || [];
    if (!list.length) {
      $("#experience").style.display = "none";
      return;
    }

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
    if (!list.length) {
      $("#projects").style.display = "none";
      return;
    }

    $("#projects").style.display = "";
    $("#projectList").innerHTML = list
      .map((project) => {
        const responsibilities = (project.responsibilities?.[state.lang] || [])
          .map((a) => `<li>${a}</li>`)
          .join("");
        const outcomes = (project.outcomes?.[state.lang] || []).map((o) => `<li>${o}</li>`).join("");
        const tags = (project.tags || []).map((tag) => `<span class="chip">${tag}</span>`).join(" ");

        return `
          <article class="card">
            <h3>${langText(project.title)}</h3>
            <p><strong>${t("labels.role")}:</strong> ${langText(project.role)}</p>
            <p>${langText(project.intro)}</p>
            ${responsibilities ? `<p><strong>${t("labels.responsibilities")}</strong></p><ul>${responsibilities}</ul>` : ""}
            ${outcomes ? `<p><strong>${t("labels.outcomes")}</strong></p><ul>${outcomes}</ul>` : ""}
            ${tags ? `<div>${tags}</div>` : ""}
          </article>`;
      })
      .join("");
  }

  function renderAwards() {
    const list = resumeData.awards || [];
    if (!list.length) {
      $("#awards").style.display = "none";
      return;
    }

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
        ${(skills.languageGroup || [])
          .map((item) => `<p>${state.lang === "zh-Hant" ? item.zh : item.en}</p>`)
          .join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "數位工具" : "Digital Tools"}</h3>
        ${(skills.tools || []).map((tool) => `<span class="chip">${tool}</span>`).join(" ")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "AI 與網站實作" : "AI & Web Practice"}</h3>
        ${(skills.aiWeb || []).map((item) => `<p>${langText(item)}</p>`).join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "核心能力" : "Core Competencies"}</h3>
        ${(skills.core || []).map((item) => `<span class="chip">${langText(item)}</span>`).join(" ")}
      </article>`;
  }

  function renderEvidence() {
    const visibleItems = (resumeData.evidence || []).filter((item) => item.visible);
    $("#evidenceHint").textContent = t("evidenceTitle");

    if (!visibleItems.length) {
      $("#evidence").style.display = "none";
      return;
    }

    $("#evidence").style.display = "";
    $("#evidenceList").innerHTML = visibleItems
      .map(
        (item) => `<article class="card">
          <p class="meta">${t("labels.type")}: ${langText(item.type)}</p>
          <h3>${langText(item.title)}</h3>
          ${langText(item.description) ? `<p>${langText(item.description)}</p>` : ""}
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

  function renderAll() {
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

  function bindActiveSectionObserver() {
    const links = Array.from(document.querySelectorAll("#navList a"));
    const sections = links.map((link) => document.getElementById(link.dataset.target)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("active", link.dataset.target === entry.target.id);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  $("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "zh-Hant" ? "en" : "zh-Hant";
    renderAll();
  });

  renderAll();
})();
