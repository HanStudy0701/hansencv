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
            ${item.gpa ? `<p class="meta">${t("labels.gpa")}: ${item.gpa}</p>` : ""}
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
          </article>`
      )
      .join("");
  }

  function renderAwards() {
    $("#awardList").innerHTML = resumeData.awards
      .map(
        (award) => `<li><span>${langText(award.title)}</span><strong class="award-year">${award.year}</strong></li>`
      )
      .join("");
  }

  function renderSkills() {
    const skillHtml = `
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "語文能力" : "Language Proficiency"}</h3>
        ${resumeData.skills.languageProficiency
          .map(
            (item) => `<p><strong>${langText(item.language)}</strong><br /><span class="meta">${langText(item.levels)}</span></p>`
          )
          .join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "專長" : "Specialties"}</h3>
        ${resumeData.skills.specialties
          .map(
            (item) =>
              `<p><strong>${item.group}</strong><br />${item.hashtags.map((s) => `<span class=\"chip\">${s}</span>`).join(" ")}</p>`
          )
          .join("")}
      </article>
      <article class="card">
        <h3>${state.lang === "zh-Hant" ? "證照" : "Certifications"}</h3>
        ${resumeData.skills.certifications
          .map((cert) => `<p><strong>${langText(cert.category)}</strong><br />${cert.items.join("、")}</p>`)
          .join("")}
      </article>`;

    $("#skillBlocks").innerHTML = skillHtml;
  }

  function renderEvidence() {
    $("#evidenceHint").textContent = t("evidenceEmpty");
    $("#downloadEvidenceTemplate").textContent = t("evidenceDownload");
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

  function collectMissingItems() {
    const missing = [];
    const push = (path, value) => {
      if (typeof value === "string" && (value.trim() === "" || value.includes("TODO"))) {
        missing.push(path);
      }
    };

    push("contact.github", resumeData.contact.github);
    push("contact.linkedin", resumeData.contact.linkedin);
    push("profilePhoto (replace placeholder if needed)", resumeData.profilePhoto.includes("placeholder") ? "TODO" : "");

    resumeData.projects.forEach((project, idx) => {
      push(`projects[${idx}].awardsOrFunding.zh-Hant`, project.awardsOrFunding?.["zh-Hant"]);
      push(`projects[${idx}].awardsOrFunding.en`, project.awardsOrFunding?.en);
    });

    resumeData.evidence.forEach((item, idx) => {
      push(`evidence[${idx}].date`, item.date);
      push(`evidence[${idx}].link`, item.link);
      push(`evidence[${idx}].title.zh-Hant`, item.title?.["zh-Hant"]);
      push(`evidence[${idx}].title.en`, item.title?.en);
    });

    return missing;
  }

  function renderChecklist() {
    $("#checklistTitle").textContent = t("checklistTitle");
    $("#checklistHint").textContent = t("checklistHint");
    const missing = collectMissingItems();
    $("#checklistItems").innerHTML = missing.length
      ? missing.map((field) => `<li><span>${field}</span><strong>TODO</strong></li>`).join("")
      : `<li><span>${state.lang === "zh-Hant" ? "目前沒有待補欄位" : "No missing fields detected"}</span></li>`;
  }

  function setupEvidenceTemplateDownload() {
    const button = $("#downloadEvidenceTemplate");
    button.onclick = () => {
      const template = {
        date: "YYYY-MM-DD",
        type: "news | evidence | award | activity",
        title: { "zh-Hant": "標題", en: "Title" },
        description: { "zh-Hant": "簡述", en: "Summary" },
        link: "https://...",
        visible: true
      };
      const blob = new Blob([JSON.stringify(template, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "evidence-template.json";
      link.click();
      URL.revokeObjectURL(link.href);
    };
  }

  function renderContact() {
    const contacts = [
      [
        "Email",
        resumeData.contact.email,
        resumeData.contact.email.includes("@") ? `mailto:${resumeData.contact.email}` : ""
      ],
      [state.lang === "zh-Hant" ? "手機" : "Phone", resumeData.contact.phone, `tel:${resumeData.contact.phone}`],
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
    renderChecklist();
    renderContact();
    applyLanguageAttrs();
    bindActiveSectionObserver();
    setupEvidenceTemplateDownload();
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
