const resumeData = {
  profilePhoto: "assets/profile.jpg",
  siteMeta: {
    ogTitle: "TENG HAN SEN | MBA × ESG × Business Analysis × AI-Assisted Practice",
    ogDescription:
      "A bilingual personal resume website showcasing education, experience, projects, and AI-assisted practical work.",
    ogImage: "assets/profile.jpg",
    ogUrl: "https://example.github.io/hansencv/"
  },
  resumePdfPath: "",
  defaultLang: "zh-Hant",
  navOrder: ["about", "experience", "projects", "publications", "certifications", "activities", "skills", "evidence", "contact"],
  i18n: {
    "zh-Hant": {
      nav: {
        about: "關於我",
        experience: "經歷",
        projects: "專案",
        publications: "獎項與發表",
        certifications: "證照",
        activities: "活動參與",
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
        downloadLabel: "下載 PDF 履歷",
        backToTop: "回到上方"
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
        degree: "學位",
        gpa: "GPA",
        responsibilities: "負責內容",
        outcomes: "成果",
        status: "狀態",
        kpi: "預計 KPI",
        type: "類型",
        viewSite: "查看網站",
        codeSnapshot: "Code / Logic Snapshot"
      },
      evidenceTitle: "相關專案成果、活動紀錄與補充資料將持續更新。",
      contactTitle: "聯絡方式",
      footer: "© 2026 Teng Han Sen · Personal Profile Website"
    },
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        publications: "Awards & Publications",
        certifications: "Certifications",
        activities: "Activities",
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
        downloadLabel: "Download PDF Resume",
        backToTop: "Back to Top"
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
        degree: "Degree",
        gpa: "GPA",
        responsibilities: "Responsibilities",
        outcomes: "Outcomes",
        status: "Status",
        kpi: "Planned KPI",
        type: "Type",
        viewSite: "View Live Site",
        codeSnapshot: "Code / Logic Snapshot"
      },
      evidenceTitle: "Additional project evidence, activity records, and supporting materials will be updated over time.",
      contactTitle: "Contact",
      footer: "© 2026 Teng Han Sen · Personal Profile Website"
    }
  },

  contact: {
    emails: ["tenghansen@gmail.com", "114363103@g.nccu.edu.tw"],
    phone: "+886930718112"
  },

  education: [
    {
      school: {
        "zh-Hant": "國立政治大學 企業管理研究所（MBA）",
        en: "National Chengchi University, Master of Business Administration (MBA)"
      },
      degree: { "zh-Hant": "碩士", en: "Master’s" },
      period: { "zh-Hant": "2025/08 – 至今", en: "Aug. 2025 – Present" }
    },
    {
      school: { "zh-Hant": "慈濟大學 經營管理學系", en: "Tzu Chi University, Bachelor of Business Administration" },
      degree: { "zh-Hant": "學士", en: "Bachelor’s" },
      period: { "zh-Hant": "2021/10 – 2025/06", en: "Oct. 2021 – Jun. 2025" },
      gpa: "4.0 / 4.0"
    }
  ],

  experience: [
    {
      organization: {
        "zh-Hant": "台灣經濟研究院（永續與環境研究室）",
        en: "Taiwan Institute of Economic Research (Sustainability and Environmental Research Division)"
      },
      role: { "zh-Hant": "實習生", en: "Intern" },
      period: { "zh-Hant": "2025/07 – 至今", en: "Jul. 2025 – Present" },
      highlights: {
        "zh-Hant": [
          "國際永續框架基準分析（Benchmarking）：深度梳理全球逾 50 國 VNR（國家自願檢視報告）實踐指標，並針對 GRI、TNFD 及 ISSB（S1/S2）等國際框架進行對標研究，為產業研究提供關鍵數據支撐。",
          "政策研究與決策支援：持續追蹤台電、中油等能源產業政策動態，將複雜法規與海量數據轉譯為具備高度專業感的視覺化簡報，精準輔助內部研究員進行策略判斷。",
          "行政流程數位化優化：導入生成式 AI 協作工具優化專案行政流程，顯著提升跨單位溝通與資料彙整之效率，確保研究素材之即時性與準確度。"
        ],
        en: [
          "International sustainability framework benchmarking: analyzed practical indicators from 50+ countries’ VNRs and conducted benchmarking research on GRI, TNFD, and ISSB (S1/S2), providing key data support for industry research.",
          "Policy research and decision support: tracked policy developments in the energy sector, including Taipower and CPC, and translated complex regulations and large-scale information into professional visual presentations to support internal strategic judgment.",
          "Administrative workflow optimization: introduced generative AI collaboration tools to improve project administration, significantly enhancing cross-unit communication efficiency and data integration timeliness."
        ]
      }
    },
    {
      organization: {
        "zh-Hant": "覺揚股份有限公司－社團法人慧治教育協會（服務推廣 SD 部門）",
        en: "Jueyang Co., Ltd. / Huizhi Education Association (Service Promotion SD Department)"
      },
      role: { "zh-Hant": "實習生", en: "Intern" },
      period: { "zh-Hant": "2024/07 – 2025/06", en: "Jul. 2024 – Jun. 2025" },
      highlights: {
        "zh-Hant": [
          "專案進度精準管控：擔任跨部門溝通樞紐，負責追蹤專案關鍵里程碑（Milestones）與協調任務進度，確保各階段專案流程穩定推進並達成 100% 準時交付。",
          "數據自動化與效率提升：運用 AI 輔助開發 Excel VBA 自動化腳本，將原始營運數據自動化清洗並轉化為分析報表，成功降低 50% 以上的重複性行政勞務時間。",
          "用戶數據洞察與分析：執行用戶後台數據採集與資料加工，將複雜的營運資訊轉化為直觀的視覺化分析報告，提供主管作為優化服務流程之重要決策參考。"
        ],
        en: [
          "Project milestone control: served as a cross-functional coordination hub, tracking key milestones and task progress to ensure stable project execution and 100% on-time delivery.",
          "Data automation and efficiency improvement: used AI-assisted Excel VBA scripting to clean and transform raw operational data into analysis reports, reducing repetitive administrative workload by over 50%.",
          "User data insight and analysis: handled backend data collection and processing, converting complex operational information into intuitive visual reports that supported management decision-making."
        ]
      }
    }
  ],

  projects: [
    {
      title: {
        "zh-Hant": "黑水虻整合綠色能源去化廚餘專案",
        en: "Solar-Thermal × Black Soldier Fly Food Waste Upcycling Project"
      },
      role: { "zh-Hant": "團隊隊長｜學校跨域團隊", en: "Team Lead | Interdisciplinary Student Project" },
      intro: {
        "zh-Hant": "以廚餘循環利用為核心，結合永續議題、技術應用與商業提案思維，發展具延伸性的校園／場域應用方案。",
        en: "A project centered on food waste circularity, combining sustainability, technical application, and business proposal thinking to develop an adaptable campus-based solution."
      },
      responsibilities: {
        "zh-Hant": [
          "統整專案方向與團隊分工，協調研究、提案與簡報製作進度。",
          "盤點循環流程、價值鏈邏輯與應用情境，協助建立專案整體架構。",
          "將永續與技術內容轉化為較易理解的提案敘事，用於競賽與對外簡報。"
        ],
        en: [
          "Coordinated project direction and team collaboration across research, proposal development, and presentation preparation.",
          "Structured the circular process, value-chain logic, and application scenarios.",
          "Translated sustainability and technical content into a clearer proposal narrative for competitions and external presentations."
        ]
      },
      outcomes: {
        "zh-Hant": [
          "專案已發展為可延伸的 ESG／循環經濟案例。",
          "具備研究、提案與競賽展示基礎，可持續補充後續成果與獲獎資訊。"
        ],
        en: [
          "Developed into a project framework that can be extended as an ESG and circular economy case.",
          "Built a foundation for future proposal, research, and competition-based development."
        ]
      },
      tags: ["ESG", "Circular Economy", "Team Leadership"]
    },
    {
      title: { "zh-Hant": "AI 輔助網站建置實作", en: "AI-Assisted Website Development" },
      role: { "zh-Hant": "個人實作專案", en: "Independent Practice Project" },
      status: { "zh-Hant": "持續優化中", en: "Ongoing (continuously optimized)" },
      intro: {
        "zh-Hant": "雖然我本身是商管背景，但近期在 Claude Code 協作下，從零協助親戚公司建置官方網站，包含網站架構規劃、內容整理、介面調整、功能測試與上線前迭代。過程中持續透過 Prompt Engineering 快速生成 MVP，並反覆進行 debug 與優化，累積 AI 輔助開發的實作經驗。",
        en: "Although my academic background is in business and management, I recently worked with Claude Code to help build an official website for a relative’s company from scratch. The process included website structure planning, content organization, interface adjustment, testing, and iterative refinement before launch. Through this project, I gained hands-on experience in prompt engineering, rapid MVP generation, debugging, and AI-assisted execution."
      },
      responsibilities: {
        "zh-Hant": [
          "協助釐清網站需求與內容架構，整理前台資訊呈現方式。",
          "與 AI 工具協作進行頁面生成、功能調整、問題排查與反覆迭代。",
          "參與網站測試與上線流程，將想法快速轉化為可驗證的 MVP。"
        ],
        en: [
          "Helped define website requirements and structure the front-end content flow.",
          "Collaborated with AI tools for page generation, feature adjustment, troubleshooting, and repeated iteration.",
          "Participated in testing and launch preparation, turning ideas into a working MVP quickly."
        ]
      },
      outcomes: {
        "zh-Hant": [
          "前台測試網址已上線（暫用）：https://www.computex.com.my/",
          "累積 AI 輔助網站建置、Prompt Engineering 與 debug iteration 的實作經驗。",
          "形成從需求理解、原型生成到測試修正的完整實作循環。"
        ],
        en: [
          "Front-end test URL launched (temporary): https://www.computex.com.my/",
          "Built practical experience in AI-assisted website development, prompt engineering, and iterative debugging.",
          "Developed an end-to-end workflow from requirement understanding to prototype refinement."
        ]
      },
      tags: ["AI-assisted development", "Prompt Engineering", "MVP iteration", "Vibe Coding"],
      externalLink: "https://www.computex.com.my/",
      featured: true
    },
    {
      title: { "zh-Hant": "信義書院永續專題競賽", en: "Sinyi School Sustainability Case Competition" },
      role: { "zh-Hant": "專案研究員｜2026/01 – 2026/06", en: "Researcher | Jan. 2026 – Jun. 2026" },
      status: { "zh-Hant": "進行中", en: "In Progress" },
      intro: {
        "zh-Hant": "專案主題：服務業供應鏈淨零轉型與議合策略（Moving towards Net Zero with the Supply Chain）",
        en: "Topic: Moving towards Net Zero with the Supply Chain: Assessment and Engagement Strategies"
      },
      responsibilities: {
        "zh-Hant": [
          "針對信義房屋現有供應商（涵蓋資訊服務、營繕裝修及活動旅遊等）的碳管理能力進行評估。",
          "透過比較國內外管理制度，釐清範疇三邊界。",
          "設計供應商提供碳數據的誘因機制，以解決企業端碳排計算精準度不足的痛點。"
        ],
        en: [
          "Evaluated the carbon management capabilities of real estate suppliers, including IT services, construction/renovation, and event-related vendors.",
          "Conducted in-depth comparisons of domestic and international frameworks to define Scope 3 boundaries.",
          "Designed incentive mechanisms to improve supplier carbon data provision and enhance carbon accounting accuracy on the corporate side."
        ]
      },
      plannedKpi: {
        "zh-Hant": ["完成國際研討會投稿。", "建立可落地之供應鏈議合策略建議。"],
        en: [
          "Complete an international conference submission.",
          "Deliver practical supplier engagement strategy recommendations."
        ]
      },
      tags: ["Net Zero", "Scope 3", "Research", "Sustainability"]
    }
  ],

  awardsPublications: [
    {
      category: { "zh-Hant": "學術發表與研究補助", en: "Publications & Research Grants" },
      items: [
        {
          "zh-Hant": "研討會論文發表｜於學術研討會發表兩篇論文，深度探討黑水虻循環經濟系統之環境與經濟效益評估。",
          en: "Conference Papers: Published two papers at academic conferences, exploring the environmental and economic cost-benefit analysis of the BSF circular economy system."
        },
        {
          "zh-Hant": "國科會大專生研究計畫補助｜獲 113 年度計畫經費，獨立執行綠色能源整合黑水虻處理廚餘專案之成本效益分析。(2024)",
          en: "NSTC Research Grant: Awarded the 2024 National Science and Technology Council grant for independent research on the solar-thermal BSF upcycling project."
        }
      ]
    },
    {
      category: { "zh-Hant": "商業創新與永續科技競賽", en: "Business & Tech Competitions" },
      items: [
        {
          "zh-Hant": "冠軍｜行動通訊實務競賽 — 智慧節能與物聯網應用組 (2024)",
          en: "Champion: Mobile Communications Practice Competition — Smart Energy & IoT Applications (2024)"
        },
        {
          "zh-Hant": "銀牌｜全國經營管理專題競賽 — 管理組 (2024)",
          en: "Silver Award: National Business Management Thematic Competition — Management Group (2024)"
        },
        {
          "zh-Hant": "佳作｜教育部臺灣能永續能源創意實作競賽 — 淨零排放組 (2024)",
          en: "Honorable Mention: Taiwan Energy Sustainable Creative Implementation Competition — Net-Zero Emissions (2024)"
        },
        {
          "zh-Hant": "獲選團隊｜青年在地特有專案成果補助計畫 (2025)",
          en: "Selected Team: Youth Linking Industry Local Special Project Achievement Subsidy Program (2025)"
        },
        {
          "zh-Hant": "入選團隊｜教育部大學生創業模擬學習平台 (2024)",
          en: "Selected Team: MOE University Entrepreneurship Simulation Learning Platform (2024)"
        }
      ]
    },
    {
      category: { "zh-Hant": "社會影響力與公益實踐", en: "Social Impact & Public Practice" },
      items: [
        {
          "zh-Hant": "準決賽＆獲選團隊｜青年公益實踐計畫（亞太區）(2022, 2023)",
          en: "Semifinalist & Selected Team: Youth Public Practice Plan (Asia-Pacific) (2022, 2023)"
        },
        {
          "zh-Hant": "入圍｜花蓮縣 HSH 創新創業競賽 (2023)",
          en: "Shortlisted: Hualien County HSH Innovation & Entrepreneurship Competition (2023)"
        }
      ]
    }
  ],

  certifications: [
    { "zh-Hant": "ACP InDesign 2020 (2025)", en: "ACP InDesign 2020 (2025)" },
    { "zh-Hant": "TBSA 初級商務企劃能力檢定（2024）", en: "TBSA Basic Business Planning Certification (2024)" },
    { "zh-Hant": "PMA 專案助理證照（2024）", en: "PMA Project Management Assistant Certification (2024)" },
    { "zh-Hant": "ISO 14064-1（2023）", en: "ISO 14064-1 (2023)" },
  ],

  activities: [
    { "zh-Hant": "慈濟大學親善大使", en: "Tzu Chi University Goodwill Ambassador" },
    {
      "zh-Hant": "慈科大兒童劇幕前幕後支援",
      en: "Tzu Chi University of Science and Technology Children's Theater Frontstage/Backstage Support"
    },
    { "zh-Hant": "永續活動參與", en: "Participation in sustainability-related activities" }
  ],

  skills: {
    languageGroup: [
      { zh: "中文：流利", en: "Mandarin Chinese: Fluent" },
      { zh: "英文：中等", en: "English: Intermediate" },
      { zh: "馬來文：日常溝通", en: "Malay: Conversational" }
    ],
    digitalTools: ["Excel", "PowerPoint", "Word", "Canva", "Adobe InDesign", "Illustrator", "Premiere"],
    aiWeb: [
      { "zh-Hant": "Prompt Engineering", en: "Prompt Engineering" },
      { "zh-Hant": "Claude Code 協作實作", en: "Claude Code Collaboration" },
      { "zh-Hant": "AI 輔助網站建置", en: "AI-Assisted Website Development" },
      { "zh-Hant": "MVP 快速生成與迭代", en: "Rapid MVP Prototyping" },
      { "zh-Hant": "Debug 與問題排查", en: "Debugging and Iteration" },
      { "zh-Hant": "內容結構整理", en: "Content Structuring" }
    ],
    core: [
      { "zh-Hant": "資料整理與分析", en: "Data Organization and Analysis" },
      { "zh-Hant": "簡報製作", en: "Presentation Design" },
      { "zh-Hant": "專案協作", en: "Project Collaboration" },
      { "zh-Hant": "研究支援", en: "Research Support" },
      { "zh-Hant": "跨域溝通", en: "Cross-Functional Communication" },
      { "zh-Hant": "問題拆解與執行", en: "Problem Structuring and Execution" }
    ]
  },

  evidence: [
    {
      type: { "zh-Hant": "網站實作", en: "Website Practice" },
      title: { "zh-Hant": "bakewithmeow 測試版", en: "bakewithmeow test version" },
      link: "https://www.computex.com.my/",
      visible: true
    }
  ]
};
