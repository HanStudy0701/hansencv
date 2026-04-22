/**
 * Resume data source.
 *
 * Maintenance notes:
 * 1) Please treat records marked source="104" as the current truth.
 * 2) If content conflicts with old PDF CVs, keep 104 version and add a note.
 * 3) Evidence/news cards are intentionally data-driven for easy future updates.
 */
const resumeData = {
  profilePhoto: "assets/profile-placeholder.svg", // TODO: replace with real headshot file, e.g. assets/profile.jpg
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
        intro:
          "目前就讀政大企研所（MBA），具備跨域學習與專案協作經驗，聚焦 ESG、數據分析與商業問題解決。",
        badges: ["104 最新版本優先", "可持續更新網站", "雙語履歷"]
      },
      about: {
        heading: "關於我",
        summary:
          "我是鄧翰升，來自馬來西亞，現於台灣就讀國立政治大學企業管理研究所。根據目前 104 最新履歷資料，我的求職定位聚焦於商業分析、ESG 相關研究與專案執行角色。"
      },
      sectionSubtitle: "內容依 104 最新資料整理；若有未完整欄位已保留可擴充位置。",
      labels: {
        role: "職稱",
        period: "期間",
        location: "地點",
        source104: "104",
        sourceSupp: "補充"
      },
      contactTitle: "聯絡方式",
      evidenceEmpty: "可於 data.js 新增資料以顯示更多新聞、活動、成果與證明文件。",
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
          "Currently an MBA candidate at NCCU with cross-functional training and hands-on project collaboration experience in ESG, analytics, and structured problem solving.",
        badges: ["104-first content policy", "Maintainable architecture", "Bilingual resume site"]
      },
      about: {
        heading: "About Me",
        summary:
          "I am Han Sen Teng, from Malaysia, currently studying in the MBA program at National Chengchi University in Taiwan. Based on the latest 104 profile, I am targeting roles in business analysis, ESG-related research, and project execution."
      },
      sectionSubtitle: "Compiled with latest 104 details; incomplete items are intentionally left expandable.",
      labels: {
        role: "Role",
        period: "Period",
        location: "Location",
        source104: "104",
        sourceSupp: "Supplementary"
      },
      contactTitle: "Contact",
      evidenceEmpty: "Add records in data.js to publish more news, events, outcomes, and supporting files.",
      footer: "© 2026 Teng Han Sen · Built for GitHub Pages"
    }
  },

  quickLinks: ["contact", "experience", "projects", "skills", "evidence"],

  contact: {
    email: "tenghansen@gmail.com",
    phone: "+886 0930-718-112",
    location: {
      "zh-Hant": "台北市文山區指南路二段64號（政治大學）",
      en: "Sec. 2, Zhinan Rd., Wenshan Dist., Taipei (NCCU)"
    },
    github: "", // TODO: add GitHub URL if available
    linkedin: "" // TODO: add LinkedIn URL
  },

  education: [
    {
      school: { "zh-Hant": "國立政治大學 企業管理研究所（MBA）", en: "National Chengchi University, MBA" },
      period: "2025/08 - present",
      source: "104"
    },
    {
      school: { "zh-Hant": "義守大學 經營管理學系", en: "I-Shou University, Department of Business Administration" },
      period: "2021/10 - 2025/06",
      source: "104"
    }
  ],

  experience: [
    {
      organization: {
        "zh-Hant": "台灣經濟研究院（五所）",
        en: "Taiwan Institute of Economic Research (Division 5)"
      },
      role: {
        "zh-Hant": "專案工讀（永續與環境研究室）",
        en: "Project Assistant (Sustainability & Environmental Research)"
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
      },
      source: "104"
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
      },
      source: "104"
    },
    {
      organization: {
        "zh-Hant": "黑水虻整合綠色能源／廚餘循環專案（學校團隊）",
        en: "Black Soldier Fly Circular Project (Green Energy & Food Waste)"
      },
      role: {
        "zh-Hant": "團隊成員（創業與創新競賽題目）",
        en: "Team Member (Entrepreneurship/Innovation Competition Track)"
      },
      period: "2022/09 - present",
      highlights: {
        "zh-Hant": [
          "參與跨域團隊協作，聚焦廚餘循環與永續價值主張。",
          "支援提案簡報、競賽資料與成果展示內容整合。"
        ],
        en: [
          "Collaborated in a cross-disciplinary team on circular food-waste solutions.",
          "Supported proposal decks, competition materials, and outcome storytelling."
        ]
      },
      source: "104"
    }
  ],

  projects: [
    {
      key: "bsf-circular",
      title: {
        "zh-Hant": "黑水虻整合綠色能源／廚餘循環亮點專案",
        en: "Featured Project: Black Soldier Fly Circular Economy Initiative"
      },
      background: {
        "zh-Hant": "以廚餘循環利用為核心，結合永續與商業提案思維，作為創新競賽與跨領域協作主題。",
        en: "A circular food-waste initiative integrating sustainability and business proposal design for innovation competitions."
      },
      role: {
        "zh-Hant": "團隊成員，負責資料整理、簡報敘事與專案協作。",
        en: "Team member focusing on research synthesis, pitch narrative, and cross-functional coordination."
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
        "zh-Hant": "TODO：請依 104 最新版本補充實際獲獎／補助名稱與年份。",
        en: "TODO: Add exact award/funding names and years from latest 104 records."
      },
      source: "104"
    }
  ],

  awards: [
    {
      title: {
        "zh-Hant": "TBSA 初級商務企劃能力檢定",
        en: "TBSA Entry-Level Business Planning Certification"
      },
      year: "2024",
      source: "104"
    },
    {
      title: {
        "zh-Hant": "PMA 專案助理證照",
        en: "PMA Project Assistant Certificate"
      },
      year: "2024",
      source: "104"
    },
    {
      title: {
        "zh-Hant": "ISO 14064-1:2018 溫室氣體內部查證課程",
        en: "ISO 14064-1:2018 Internal Verification Training"
      },
      year: "2023",
      source: "104"
    }
  ],

  skills: {
    languages: ["中文（流利）", "英文（中上）", "馬來文（日常溝通）"],
    tools: ["Excel", "PowerPoint", "Word", "Canva", "ChatGPT"],
    capabilities: [
      { "zh-Hant": "商業分析與資料整理", en: "Business analysis & data synthesis" },
      { "zh-Hant": "ESG / 永續研究支援", en: "ESG / sustainability research support" },
      { "zh-Hant": "專案協作與溝通", en: "Project collaboration & communication" },
      { "zh-Hant": "跨文化適應力", en: "Cross-cultural adaptability" }
    ],
    source: "104"
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
