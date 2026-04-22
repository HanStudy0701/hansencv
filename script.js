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
    return localizedValue[state.lang] || localizedValue["zh-Hant"] || "";
  }

  function sourceTag(source) {
    const label = source === "104" ? t("labels.source104") : t("labels.sourceSupp");
    return `<span class="chip">${label}</span>`;
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
    $("#heroBadges").innerHTML = hero.badges.map((item) => `<span>${item}</span>`).join("");
    $("#profilePhoto").src = resumeData.profilePhoto;

    $("#quickLinks").innerHTML = resumeData.quickLinks
      .map((sectionId) => `<a href="#${sectionId}">${t(`nav.${sectionId}`)}</a>`)
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
            <p class="meta">${t("labels.period")}: ${item.period}</p>
            ${sourceTag(item.source)}
          </article>`
      )
      .join("");
  }

  function renderExperience() {
    $("#experienceList").innerHTML = resumeData.experience
      .map((item) => {
        const bullets = item.highlights[state.lang].map((line) => `<li>${line}</li>`).join("");
        return `
          <article class="timeline-item card">
            <h3>${langText(item.organization)}</h3>
            <p><strong>${t("labels.role")}:</strong> ${langText(item.role)}</p>
            <p class="meta"><strong>${t("labels.period")}:</strong> ${item.period}</p>
            <ul>${bullets}</ul>
            ${sourceTag(item.source)}
          </article>`;
      })
      .join("");
  }

  function renderProjects() {
    $("#projectList").innerHTML = resumeData.projects
      .map(
        (project) => `
          <article class="card">
            <h3>${langText(project.title)}</h3>
            <p>${langText(project.background)}</p>
            <p><strong>${t("labels.role")}:</strong> ${langText(project.role)}</p>
            <p><strong>What was done</strong></p>
            <ul>${project.actions[state.lang].map((a) => `<li>${a}</li>`).join("")}</ul>
            <p><strong>Outcomes</strong></p>
            <ul>${project.outcomes[state.lang].map((o) => `<li>${o}</li>`).join("")}</ul>
            <p class="meta">${langText(project.awardsOrFunding)}</p>
            ${sourceTag(project.source)}
          </article>`
      )
      .join("");
  }

  function renderAwards() {
    $("#awardList").innerHTML = resumeData.awards
      .map(
        (award) => `<li><span>${langText(award.title)}</span> <strong>${award.year}</strong> ${sourceTag(award.source)}</li>`
      )
      .join("");
  }

  function renderSkills() {
    const skillHtml = `
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "語言能力" : "Language Proficiency"}</h3>
        ${resumeData.skills.languages.map((s) => `<span class="chip">${s}</span>`).join(" ")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "工具能力" : "Tools"}</h3>
        ${resumeData.skills.tools.map((s) => `<span class="chip">${s}</span>`).join(" ")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "商業／研究／專案能力" : "Business / Research / Project Capabilities"}</h3>
        ${resumeData.skills.capabilities.map((c) => `<span class="chip">${langText(c)}</span>`).join(" ")}
        <div style="margin-top:.8rem">${sourceTag(resumeData.skills.source)}</div>
      </article>`;

    $("#skillBlocks").innerHTML = skillHtml;
  }

  function renderEvidence() {
    $("#evidenceHint").textContent = t("evidenceEmpty");
    const visibleItems = resumeData.evidence.filter((item) => item.visible);

    if (!visibleItems.length) {
      $("#evidenceList").innerHTML = `<article class="card"><p>${t("evidenceEmpty")}</p></article>`;
      return;
    }

    $("#evidenceList").innerHTML = visibleItems
      .map(
        (item) => `<article class="card">
          <p class="meta">${item.date || "TBD"} · ${item.type}</p>
          <h3>${langText(item.title)}</h3>
          <p>${langText(item.description)}</p>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer noopener">Open</a>` : ""}
        </article>`
      )
      .join("");
  }

  function renderContact() {
    const contacts = [
      ["Email", resumeData.contact.email, `mailto:${resumeData.contact.email}`],
      [state.lang === "zh-Hant" ? "手機" : "Phone", resumeData.contact.phone, `tel:${resumeData.contact.phone}`],
      [state.lang === "zh-Hant" ? "地區" : "Location", langText(resumeData.contact.location), ""],
      ["GitHub", resumeData.contact.github || "TODO", resumeData.contact.github],
      ["LinkedIn", resumeData.contact.linkedin || "TODO", resumeData.contact.linkedin]
    ];

    $("#contactTitle").textContent = t("contactTitle");
    $("#contactList").innerHTML = contacts
      .map(([label, value, href]) => {
        if (!href) {
          return `<article class="card"><h3>${label}</h3><p>${value}</p></article>`;
        }
        return `<article class="card"><h3>${label}</h3><a href="${href}">${value}</a></article>`;
      })
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
    const sections = links
      .map((link) => document.getElementById(link.dataset.target))
      .filter(Boolean);

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
