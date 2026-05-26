export const PRICING = {
    chatgpt: {
      plans: {
        plus: {
          label: "Plus",
          monthlyPrice: 20,
          billingType: "per-user",
          officialUrl: "https://openai.com/chatgpt/pricing",
          verifiedAt: "2026-05-23"
        },
  
        business: {
          label: "Business",
          monthlyPrice: 25,
          billingType: "per-user",
          officialUrl: "https://openai.com/chatgpt/pricing",
          verifiedAt: "2026-05-23"
        },
  
        enterprise: {
          label: "Enterprise",
          monthlyPrice: null,
          billingType: "custom",
          officialUrl: "https://openai.com/chatgpt/pricing",
          verifiedAt: "2026-05-23"
        }
      }
    },
  
  
    cursor: {
      plans: {
        hobby: {
          label: "Hobby",
          monthlyPrice: 0,
          billingType: "per-user",
          officialUrl: "https://cursor.com/pricing",
          verifiedAt: "2026-05-23"
        },
  
        pro: {
          label: "Pro",
          monthlyPrice: 20,
          billingType: "per-user",
          officialUrl: "https://cursor.com/pricing",
          verifiedAt: "2026-05-23"
        },
  
        business: {
          label: "Business",
          monthlyPrice: 40,
          billingType: "per-user",
          officialUrl: "https://cursor.com/pricing",
          verifiedAt: "2026-05-23"
        }
      }
    },
  
  
    copilot: {
      plans: {
        free: {
          label: "Free",
          monthlyPrice: 0,
          billingType: "per-user",
          officialUrl: "https://github.com/features/copilot/plans",
          verifiedAt: "2026-05-23"
        },
  
        pro: {
          label: "Pro",
          monthlyPrice: 10,
          billingType: "per-user",
          officialUrl: "https://github.com/features/copilot/plans",
          verifiedAt: "2026-05-23"
        },
  
        proPlus: {
          label: "Pro+",
          monthlyPrice: 39,
          billingType: "per-user",
          officialUrl: "https://github.com/features/copilot/plans",
          verifiedAt: "2026-05-23"
        }
      }
    },
  
  
    claude: {
      plans: {
        free: {
          label: "Free",
          monthlyPrice: 0,
          billingType: "per-user",
          officialUrl: "https://claude.ai/pricing",
          verifiedAt: "2026-05-23"
        },
  
        pro: {
          label: "Pro",
          monthlyPrice: 20,
          billingType: "per-user",
          officialUrl: "https://claude.ai/pricing",
          verifiedAt: "2026-05-23"
        },
  
        max: {
          label: "Max",
          monthlyPrice: 100,
          billingType: "per-user",
          officialUrl: "https://claude.ai/pricing",
          verifiedAt: "2026-05-23"
        }
      }
    },
  
  
    gemini: {
      plans: {
        free: {
          label: "Free",
          monthlyPrice: 0,
          billingType: "per-user",
          officialUrl: "https://gemini.google.com/pricing",
          verifiedAt: "2026-05-23"
        },
  
        pro: {
          label: "Pro",
          monthlyPrice: 20,
          billingType: "per-user",
          officialUrl: "https://gemini.google.com/pricing",
          verifiedAt: "2026-05-23"
        },
  
        ultra: {
          label: "Ultra",
          monthlyPrice: 100,
          billingType: "per-user",
          officialUrl: "https://gemini.google.com/pricing",
          verifiedAt: "2026-05-23"
        }
      }
    },
  
  
    windsurf: {
      plans: {
        free: {
          label: "Free",
          monthlyPrice: 0,
          billingType: "per-user",
          officialUrl: "https://windsurf.com/pricing",
          verifiedAt: "2026-05-23"
        },
  
        pro: {
          label: "Pro",
          monthlyPrice: 20,
          billingType: "per-user",
          officialUrl: "https://windsurf.com/pricing",
          verifiedAt: "2026-05-23"
        },
  
        teams: {
          label: "Teams",
          monthlyPrice: 40,
          billingType: "per-user",
          officialUrl: "https://windsurf.com/pricing",
          verifiedAt: "2026-05-23"
        }
      }
    },
  
  }
  

export const supportedPlatforms = ['chatgpt', 'cursor', 'copilot', 'claude', 'gemini', 'windsurf']