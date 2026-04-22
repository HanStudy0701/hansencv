const resumeData = {
  profilePhoto: "assets/profile-placeholder.svg",
  siteMeta: {
    ogTitle: "TENG HAN SEN | MBA × ESG × Business Analysis × AI-Assisted Practice",
    ogDescription:
      "A bilingual personal resume website showcasing education, experience, projects, and AI-assisted practical work.",
    ogImage: "assets/profile-placeholder.svg",
    ogUrl: "https://example.github.io/hansencv/"
  },
  resumePdfPath: "",
  defaultLang: "zh-Hant",
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
          "目前就讀國立政治大學企業管理研究所（MBA），具備跨域學習、研究支援、數據整理分析與專案協作經驗，持續累積 ESG、商業分析與 AI 輔助實作能力。",
        ctas: [
          { label: "查看經歷", target: "experience" },
          { label: "查看專案", target: "projects" },
          { label: "聯絡方式", target: "contact" }
        ],
        downloadLabel: "下載 PDF 履歷"
      },
      about: {
        heading: "關於我",
        summary:
          "我是鄧翰升，來自馬來西亞，現於台灣就讀國立政治大學企業管理研究所。過去累積了永續議題研究支援、數據整理分析、簡報製作與專案協作經驗，也持續透過實作方式探索 AI 工具在網站建置、內容整理與問題解決上的應用。整體關注主軸包括 ESG、商業分析、跨域協作，以及將複雜資訊整理成具結構、可執行內容的能力。"
      },
      sectionSubtitle: "個人履歷網站 / 個人介紹網站 / 個人作品型網站",
      labels: {
        role: "角色",
        period: "期間",
        gpa: "GPA",
        responsibilities: "負責內容",
        outcomes: "成果",
        type: "類型",
        viewSite: "查看網站",
        codeSnapshot: "Code / Logic Snapshot"
      },
      contactTitle: "聯絡方式",
      evidenceTitle: "相關專案成果、活動紀錄與補充資料將持續更新。",
      footer: "© 2026 Teng Han Sen · Personal Profile Website"
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
        title: "MBA × ESG × 商業分析 × 專案協作",
        intro:
          "MBA student at National Chengchi University with experience in cross-disciplinary learning, research support, data analysis, and project collaboration. Continuously building capabilities in ESG, business analysis, and AI-assisted execution.",
        ctas: [
          { label: "View Experience", target: "experience" },
          { label: "View Projects", target: "projects" },
          { label: "Contact", target: "contact" }
        ],
        downloadLabel: "Download PDF Resume"
      },
      about: {
        heading: "About Me",
        summary:
          "I am TENG HAN SEN from Malaysia and currently pursuing an MBA at National Chengchi University in Taiwan. My experience includes ESG-related research support, data organization and analysis, presentation preparation, and project collaboration. I also continue to explore how AI tools can be applied to website building, content structuring, and practical problem-solving. My work centers around ESG, business analysis, cross-functional collaboration, and the ability to turn complex information into clear and actionable output."
      },
      sectionSubtitle: "Personal Resume / Profile / Portfolio Website",
      labels: {
        role: "Role",
        period: "Period",
        gpa: "GPA",
        responsibilities: "Responsibilities",
        outcomes: "Outcomes",
        type: "Type",
        viewSite: "View Live Site",
        codeSnapshot: "Code / Logic Snapshot"
      },
      contactTitle: "Contact",
      evidenceTitle: "Additional project evidence, activity records, and supporting materials will be updated over time.",
      footer: "© 2026 Teng Han Sen · Personal Profile Website"
    }
  },

  contact: {
    emails: ["114363103@g.nccu.edu.tw", "tenghansen@gmail.com"],
    phone: "+886930718112"
  },

  education: [
    {
      school: { "zh-Hant": "國立政治大學 企業管理研究所（MBA）", en: "National Chengchi University, MBA" },
      period: { "zh-Hant": "2025/08 – 至今", en: "2025/08 – Present" }
    },
    {
      school: { "zh-Hant": "慈濟大學 經營管理學系", en: "Tzu Chi University, Department of Business Administration" },
      period: { "zh-Hant": "2021/10 – 2025/06", en: "2021/10 – 2025/06" },
      gpa: "4.0 / 4.0"
    }
  ],

  experience: [
    {
      organization: {
        "zh-Hant": "台灣經濟研究院（五所）",
        en: "Taiwan Institute of Economic Research (Division 5)"
      },
      role: {
        "zh-Hant": "實習生｜永續與環境研究室",
        en: "Intern | Sustainability and Environmental Research Office"
      },
      period: { "zh-Hant": "2025/07 – 至今", en: "2025/07 – Present" },
      highlights: {
        "zh-Hant": [
          "協助蒐整與整理 SDG、GRI、TNFD 等永續相關框架資料，支援研究主題分析與內容產出。",
          "參與能源與永續議題之資料彙整、初步分析與簡報製作，協助將政策與產業資訊轉化為可用研究素材。",
          "支援研究與專案行政協作，提升資料整合效率與後續溝通順暢度。"
        ],
        en: [
          "Collected and organized sustainability framework materials, including SDG, GRI, and TNFD, to support thematic analysis and research output.",
          "Contributed to data consolidation, preliminary analysis, and presentation preparation on energy and sustainability topics, turning policy and industry information into usable research input.",
          "Supported research and project administration workflows to improve data integration efficiency and communication flow."
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
        en: "Service Promotion (SD) Department Intern"
      },
      period: { "zh-Hant": "2024/07 – 2025/06", en: "2024/07 – 2025/06" },
      highlights: {
        "zh-Hant": [
          "協助專案負責人進行進度追蹤、資料整理與溝通協調，支持專案流程穩定推進。",
          "彙整營運與專案相關資訊，協助製作分析資料與行政支援內容。",
          "參與後續資料整理與簡報支援，提升團隊資訊整合效率。"
        ],
        en: [
          "Supported project leads with progress tracking, documentation, and communication coordination to keep project execution stable.",
          "Consolidated operational and project-related information to assist with analytical materials and administrative support.",
          "Contributed to follow-up data organization and presentation support, improving team information integration efficiency."
        ]
      }
    }
  ],

  projects: [
    {
      title: {
        "zh-Hant": "黑水虻整合綠色能源去化廚餘專案",
        en: "Black Soldier Fly Green Energy & Food Waste Reduction Project"
      },
      role: {
        "zh-Hant": "團隊隊長｜學校跨域團隊",
        en: "Team Leader | Cross-disciplinary University Team"
      },
      intro: {
        "zh-Hant": "以廚餘循環利用為核心，結合永續議題、技術應用與商業提案思維，發展具延伸性的校園／場域應用方案。",
        en: "Focused on circular food-waste utilization by integrating sustainability issues, technical application, and business proposal thinking to build scalable campus/field solutions."
      },
      responsibilities: {
        "zh-Hant": [
          "統整專案方向與團隊分工，協調研究、提案與簡報製作進度。",
          "盤點循環流程、價值鏈邏輯與應用情境，協助建立專案整體架構。",
          "將永續與技術內容轉化為較易理解的提案敘事，用於競賽與對外簡報。"
        ],
        en: [
          "Led project direction and team task allocation, coordinating research, proposal development, and presentation timelines.",
          "Mapped circular process design, value-chain logic, and application scenarios to establish the project framework.",
          "Translated sustainability and technical content into clearer proposal narratives for competitions and external presentations."
        ]
      },
      outcomes: {
        "zh-Hant": [
          "專案已發展為可延伸的 ESG／循環經濟案例。",
          "具備研究、提案與競賽展示基礎，可持續補充後續成果與獲獎資訊。"
        ],
        en: [
          "Developed into an extendable ESG/circular-economy case.",
          "Built a solid base for research, proposal delivery, and competition presentation, with room for future evidence and awards updates."
        ]
      },
      tags: ["ESG", "Circular Economy", "Project Leadership"]
    },
    {
      title: {
        "zh-Hant": "AI 輔助網站建置實作",
        en: "AI-Assisted Website Development"
      },
      role: {
        "zh-Hant": "個人實作專案",
        en: "Personal Practice Project"
      },
      intro: {
        "zh-Hant": "在 Claude Code 協作下，從零協助親戚公司建置官方網站，涵蓋網站架構規劃、內容整理、介面調整、功能測試與上線前迭代。",
        en: "Collaborated with Claude Code to build a company website from scratch, covering architecture planning, content structuring, UI adjustment, functional testing, and pre-launch iteration."
      },
      responsibilities: {
        "zh-Hant": [
          "協助釐清網站需求與內容架構，整理前台資訊呈現方式。",
          "與 AI 工具協作進行頁面生成、功能調整、問題排查與反覆迭代。",
          "參與網站測試與上線流程，將想法快速轉化為可驗證的 MVP。"
        ],
        en: [
          "Clarified website requirements and content architecture, and organized front-end information structure.",
          "Collaborated with AI tools for page generation, feature adjustment, troubleshooting, and iterative refinements.",
          "Participated in testing and launch workflows, turning ideas into verifiable MVPs quickly."
        ]
      },
      outcomes: {
        "zh-Hant": [
          "前台測試版已上線：https://www.computex.com.my/",
          "累積 AI 輔助網站建置、Prompt Engineering 與 debug iteration 的實作經驗。",
          "形成從需求理解、原型生成到測試修正的完整實作循環。"
        ],
        en: [
          "A front-end test version is online: https://www.computex.com.my/",
          "Built practical experience in AI-assisted website development, prompt engineering, and debug iteration.",
          "Established an end-to-end cycle from requirement understanding and prototype generation to testing and refinement."
        ]
      },
      tags: ["AI-assisted development", "Prompt Engineering", "MVP iteration", "Vibe Coding"],
      externalLink: "https://www.computex.com.my/",
      codeSnapshot: {
        "zh-Hant": "Prompt → 快速產生頁面草稿 → 手動檢查 UI/文案 → Debug 與重構 → 再次驗證。",
        en: "Prompt -> rapid page draft -> manual UI/content review -> debug and refactor -> verify again."
      },
      featured: true
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
    languageGroup: [
      { zh: "中文：流利", en: "Mandarin Chinese: Fluent" },
      { zh: "英文：中等", en: "English: Intermediate" },
      {
        zh: "馬來文：日常溝通",
        en: "Malay: Conversational, with practical familiarity for cross-cultural communication in Southeast Asia"
      }
    ],
    tools: [
      "AI-Assisted Dev",
      "Claude Code",
      "Prompt Engineering",
      "MVP Iteration",
      "Debugging",
      "Content Structuring",
      "Excel",
      "PowerPoint",
      "Canva",
      "Adobe InDesign",
      "Illustrator",
      "Premiere"
    ],
    aiWeb: [
      { "zh-Hant": "Prompt Engineering", en: "Prompt Engineering" },
      { "zh-Hant": "Claude Code 協作實作", en: "Claude Code collaboration practice" },
      { "zh-Hant": "AI 輔助網站建置", en: "AI-assisted website building" },
      { "zh-Hant": "MVP 快速生成與迭代", en: "Rapid MVP generation and iteration" },
      { "zh-Hant": "Debug 與問題排查", en: "Debugging and troubleshooting" },
      { "zh-Hant": "內容結構整理", en: "Content structuring" }
    ],
    core: [
      { "zh-Hant": "資料整理與分析", en: "Data organization and analysis" },
      { "zh-Hant": "簡報製作", en: "Presentation preparation" },
      { "zh-Hant": "專案協作", en: "Project collaboration" },
      { "zh-Hant": "研究支援", en: "Research support" },
      { "zh-Hant": "跨域溝通", en: "Cross-functional communication" },
      { "zh-Hant": "問題拆解與執行", en: "Problem decomposition and execution" }
    ]
  },

  evidence: [
    {
      type: { "zh-Hant": "網站實作", en: "Website Practice" },
      title: { "zh-Hant": "Computex 公司網站測試版", en: "Computex Company Website Test Version" },
      link: "https://www.computex.com.my/",
      visible: true
    }
  ]
};
