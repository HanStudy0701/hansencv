/**
 * Resume data source.
 * Keep this file as the single source of truth for content updates.
 */
const resumeData = {
  profilePhoto: "assets/profile-placeholder.svg", // TODO: replace with real headshot file
  defaultLang: "zh-Hant",
  languages: ["zh-Hant", "en"],
  navOrder: ["about", "experience", "projects", "awards", "skills", "evidence", "contact"],
  i18n: {
    "zh-Hant": {
      nav: {
        about: "關於我",
        experience: "經歷",
        projects: "專案",
        awards: "獎項",
        skills: "技能",
        evidence: "佐證資料",
        contact: "聯絡方式"
      },
      hero: {
        nameZh: "鄧翰升",
        nameEn: "TENG HAN SEN",
        title: "MBA × ESG × 商業分析 × 專案協作",
        intro: "目前就讀政大企研所（MBA），具備跨域學習與專案協作經驗，聚焦 ESG、數據分析與商業問題解決。",
        badges: ["可持續更新網站", "雙語履歷"]
      },
      about: {
        heading: "關於我",
        summary:
          "我是鄧翰升，來自馬來西亞，現於台灣就讀國立政治大學企業管理研究所。求職定位聚焦於商業分析、ESG 研究與專案執行角色。"
      },
      sectionSubtitle: "內容可持續擴充，未完整欄位已保留後續更新空間。",
      labels: {
        role: "職稱",
        period: "期間",
        gpa: "GPA"
      },
      contactTitle: "聯絡方式",
      evidenceEmpty: "可於 data.js 新增資料以顯示更多新聞、活動、成果與證明文件。",
      evidenceDownload: "下載 Evidence 範本",
      checklistTitle: "待補充內容檢查清單",
      checklistHint: "系統會自動列出目前資料中仍為 TODO 或空白的欄位。",
      footer: "© 2026 Teng Han Sen · Built for GitHub Pages"
    },
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        awards: "Awards",
        skills: "Skills",
        evidence: "Evidence",
        contact: "Contact"
      },
      hero: {
        nameZh: "鄧翰升",
        nameEn: "TENG HAN SEN",
        title: "MBA × ESG × Business Analytics × Project Collaboration",
        intro:
          "Currently an MBA candidate at NCCU with cross-functional training and project collaboration experience in ESG, analytics, and structured problem solving.",
        badges: ["Maintainable architecture", "Bilingual resume site"]
      },
      about: {
        heading: "About Me",
        summary:
          "I am Han Sen Teng, from Malaysia, currently studying in the MBA program at National Chengchi University in Taiwan. I am targeting roles in business analysis, ESG-related research, and project execution."
      },
      sectionSubtitle: "Content is intentionally structured for continuous updates.",
      labels: {
        role: "Role",
        period: "Period",
        gpa: "GPA"
      },
      contactTitle: "Contact",
      evidenceEmpty: "Add records in data.js to publish more news, events, outcomes, and supporting files.",
      evidenceDownload: "Download evidence template",
      checklistTitle: "Missing-content checklist",
      checklistHint: "This list is auto-generated from fields that are TODO or currently empty.",
      footer: "© 2026 Teng Han Sen · Built for GitHub Pages"
    }
  },

  quickLinks: ["contact", "experience", "projects", "skills", "evidence"],

  contact: {
    email: "114363103.g.nccu.edu.tw",
    phone: "+886 0930-718-112",
    github: "",
    linkedin: ""
  },

  education: [
    {
      school: { "zh-Hant": "國立政治大學 企業管理研究所（MBA）", en: "National Chengchi University, MBA" },
      period: "2025/08 - present"
    },
    {
      school: { "zh-Hant": "慈濟大學", en: "Tzu Chi University" },
      period: "2021/10 - 2025/06",
      gpa: "4.0/4.0"
    }
  ],

  experience: [
    {
      organization: {
        "zh-Hant": "台灣經濟研究院（五所）",
        en: "Taiwan Institute of Economic Research (Division 5)"
      },
      role: {
        "zh-Hant": "實習生（永續與環境研究室）",
        en: "Intern (Sustainability & Environmental Research)"
      },
      period: "2025/07 - present",
      highlights: {
        "zh-Hant": [
          "參與碳盤查與永續指標相關研究支援（含 SDG、GRI、TNFD 等主題）。",
          "協助資料蒐整、初步分析與研究產出支援。"
        ],
        en: [
          "Support sustainability and environmental research tasks, including SDG/GRI/TNFD-related topics.",
          "Contribute to data collection, preliminary analysis, and research output support."
        ]
      }
    },
    {
      organization: {
        "zh-Hant": "覺揚股份有限公司",
        en: "Jue Yang Co., Ltd."
      },
      role: {
        "zh-Hant": "服務推廣（SD）部門實習生",
        en: "Service Promotion (SD) Intern"
      },
      period: "2024/07 - 2025/06",
      highlights: {
        "zh-Hant": [
          "協助專案負責人追蹤客戶進度與溝通協調。",
          "彙整案源與行政支援，參與後續分析資料整理。"
        ],
        en: [
          "Assisted project leads in progress tracking and client communication.",
          "Handled lead management and administrative support with analytical documentation."
        ]
      }
    }
  ],

  projects: [
    {
      key: "bsf-circular",
      title: {
        "zh-Hant": "黑水虻整合綠色能源去化廚餘專案（學校團隊）",
        en: "Black Soldier Fly Green Energy & Food Waste Reduction Project (University Team)"
      },
      background: {
        "zh-Hant": "以廚餘循環利用為核心，結合永續與商業提案思維，作為創新競賽與跨領域協作主題。",
        en: "A circular food-waste initiative integrating sustainability and business proposal design for innovation competitions."
      },
      role: {
        "zh-Hant": "團隊隊長",
        en: "Team Leader"
      },
      actions: {
        "zh-Hant": ["盤點循環流程與價值鏈邏輯。", "協助提案內容結構化與競賽簡報製作。"],
        en: ["Mapped circular workflow and value chain logic.", "Helped structure proposal content and competition decks."]
      },
      outcomes: {
        "zh-Hant": ["已具備可延伸為 ESG／循環經濟案例的專案架構。"],
        en: ["Established a project structure that can scale into ESG/circular-economy case development."]
      },
      awardsOrFunding: {
        "zh-Hant": "TODO：請補充實際獲獎／補助名稱與年份。",
        en: "TODO: Add exact award/funding names and years."
      }
    }
  ],

  awards: [
    {
      title: {
        "zh-Hant": "TBSA 初級商務企劃能力檢定",
        en: "TBSA Entry-Level Business Planning Certification"
      },
      year: "2024"
    },
    {
      title: {
        "zh-Hant": "PMA 專案助理證照",
        en: "PMA Project Assistant Certificate"
      },
      year: "2024"
    },
    {
      title: {
        "zh-Hant": "ISO 14064-1",
        en: "ISO 14064-1"
      },
      year: "2023"
    }
  ],

  skills: {
    languageProficiency: [
      {
        language: { "zh-Hant": "中文", en: "Chinese" },
        levels: { "zh-Hant": "聽/精通 說/精通 讀/精通 寫/精通", en: "Listening/Fluent Speaking/Fluent Reading/Fluent Writing/Fluent" }
      },
      {
        language: { "zh-Hant": "英文", en: "English" },
        levels: { "zh-Hant": "聽/中等 說/中等 讀/中等 寫/中等", en: "Listening/Intermediate Speaking/Intermediate Reading/Intermediate Writing/Intermediate" }
      },
      {
        language: { "zh-Hant": "馬來文", en: "Malay" },
        levels: { "zh-Hant": "聽/中等 說/中等 讀/中等 寫/中等", en: "Listening/Intermediate Speaking/Intermediate Reading/Intermediate Writing/Intermediate" }
      }
    ],
    specialties: [
      {
        group: "Microsoft Office",
        hashtags: [
          "#文件或資料輸入建檔處理",
          "#文書處理╱排版能力",
          "#文件收發與檔案管理",
          "#行政事務處理",
          "#Word",
          "#Excel",
          "#PowerPoint",
          "#VBA"
        ]
      },
      {
        group: "Adobe",
        hashtags: ["#基礎多媒體影像處理", "#Adobe InDesign", "#Illustrator", "#Premiere"]
      }
    ],
    certifications: [
      { category: { "zh-Hant": "Adobe", en: "Adobe" }, items: ["ACP InDesign 2020"] },
      { category: { "zh-Hant": "專案管理", en: "Project Management" }, items: ["PMA 專案助理"] },
      { category: { "zh-Hant": "企劃相關證照", en: "Planning Certificates" }, items: ["TBSA商務企劃能力初級檢定"] },
      { category: { "zh-Hant": "其他證照", en: "Other Certificates" }, items: ["ISO 14064-1"] }
    ]
  },

  evidence: [
    {
      date: "",
      type: "news",
      title: { "zh-Hant": "TODO：新聞報導標題", en: "TODO: News title" },
      description: {
        "zh-Hant": "請填入與專案、競賽或研究相關的新聞摘要。",
        en: "Add a concise summary for project/competition/research news."
      },
      link: "",
      visible: false
    },
    {
      date: "",
      type: "evidence",
      title: { "zh-Hant": "TODO：佐證文件名稱", en: "TODO: Evidence file title" },
      description: {
        "zh-Hant": "可放證照、活動證明、成果連結。",
        en: "Use for certificates, event proof, and outcome links."
      },
      link: "",
      visible: false
    }
  ]
};
