import { AuditRule } from "./types";

const getAdoptionRatio = (seats: number, teamSize: number) => {
  if (teamSize <= 0) {
    return 1;
  }

  return seats / teamSize;
};

export const rules: AuditRule[] = [
  // ─── DOWNGRADE RULES ────────────────────────────────────────────────────────

  // 1
  {
    id: "chatgpt-business-small-team",

    priority: 100,

    condition(context) {
      return context.toolsUsed.some((tool) => {
        const adoptionRatio = getAdoptionRatio(tool.seats, context.teamSize);

        return (
          tool.tool === "chatgpt" &&
          tool.plan === "business" &&
          context.teamSize <= 5 &&
          adoptionRatio >= 0.8
        );
      });
    },

    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "chatgpt" && tool.plan === "business",
      );

      if (!tool) {
        return 0;
      }

      return Math.max(0, tool.monthlySpend - 20 * tool.seats);
    },

    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "chatgpt" && tool.plan === "business",
      )!;

      const savings = Math.max(0, tool.monthlySpend - 20 * tool.seats);

      return {
        action: "downgrade",
        recommendedTool: "chatgpt",
        recommendedPlan: "plus",
        reason: `ChatGPT Business is fully adopted, but a ${context.teamSize}-person team may not require admin and organization features. ChatGPT Plus could save $${savings}/mo.`,
      };
    },
  },

  // 2
  {
    id: "cursor-business-small-team",

    priority: 99,

    condition(context) {
      return context.toolsUsed.some((tool) => {
        const adoptionRatio = getAdoptionRatio(tool.seats, context.teamSize);

        return (
          tool.tool === "cursor" &&
          tool.plan === "business" &&
          context.teamSize <= 5 &&
          adoptionRatio >= 0.8
        );
      });
    },

    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "cursor" && tool.plan === "business",
      );

      if (!tool) {
        return 0;
      }

      return Math.max(0, tool.monthlySpend - 20 * tool.seats);
    },

    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "cursor" && tool.plan === "business",
      )!;

      const savings = Math.max(0, tool.monthlySpend - 20 * tool.seats);

      return {
        action: "downgrade",
        recommendedTool: "cursor",
        recommendedPlan: "pro",
        reason: `Cursor Business is heavily adopted, but a ${context.teamSize}-person engineering team may not require organization-level controls. Cursor Pro could save $${savings}/mo.`,
      };
    },
  },

  // 3
  {
    id: "claude-max-small-team",

    priority: 98,

    condition(context) {
      return context.toolsUsed.some((tool) => {
        const adoptionRatio = getAdoptionRatio(tool.seats, context.teamSize);

        return (
          tool.tool === "claude" &&
          tool.plan === "max" &&
          context.teamSize <= 3 &&
          adoptionRatio >= 0.8
        );
      });
    },

    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "claude" && tool.plan === "max",
      );

      if (!tool) {
        return 0;
      }

      return Math.max(0, tool.monthlySpend - 20 * tool.seats);
    },

    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "claude" && tool.plan === "max",
      )!;

      const savings = Math.max(0, tool.monthlySpend - 20 * tool.seats);

      return {
        action: "downgrade",
        recommendedTool: "claude",
        recommendedPlan: "pro",
        reason: `Claude Max is heavily adopted, but a ${context.teamSize}-person team may not require premium usage limits. Claude Pro could save $${savings}/mo.`,
      };
    },
  },

  // 4
  {
    id: "gemini-ultra-small-team",

    priority: 97,

    condition(context) {
      return context.toolsUsed.some((tool) => {
        const adoptionRatio = getAdoptionRatio(tool.seats, context.teamSize);

        return (
          tool.tool === "gemini" &&
          tool.plan === "ultra" &&
          context.teamSize <= 3 &&
          adoptionRatio >= 0.8
        );
      });
    },

    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "gemini" && tool.plan === "ultra",
      );

      if (!tool) {
        return 0;
      }

      return Math.max(0, tool.monthlySpend - 20 * tool.seats);
    },

    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "gemini" && tool.plan === "ultra",
      )!;

      const savings = Math.max(0, tool.monthlySpend - 20 * tool.seats);

      return {
        action: "downgrade",
        recommendedTool: "gemini",
        recommendedPlan: "pro",
        reason: `Gemini Ultra is heavily adopted, but a ${context.teamSize}-person team may not require ultra-tier usage limits. Gemini Pro could save $${savings}/mo.`,
      };
    },
  },

  // 5
  {
    id: "windsurf-teams-small-team",

    priority: 96,

    condition(context) {
      return context.toolsUsed.some((tool) => {
        const adoptionRatio = getAdoptionRatio(tool.seats, context.teamSize);

        return (
          tool.tool === "windsurf" &&
          tool.plan === "teams" &&
          context.teamSize <= 5 &&
          adoptionRatio >= 0.8
        );
      });
    },

    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "windsurf" && tool.plan === "teams",
      );

      if (!tool) {
        return 0;
      }

      return Math.max(0, tool.monthlySpend - 20 * tool.seats);
    },

    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "windsurf" && tool.plan === "teams",
      )!;

      const savings = Math.max(0, tool.monthlySpend - 20 * tool.seats);

      return {
        action: "downgrade",
        recommendedTool: "windsurf",
        recommendedPlan: "pro",
        reason: `Windsurf Teams is heavily adopted, but a ${context.teamSize}-person team may not require organization-level features. Windsurf Pro could save $${savings}/mo.`,
      };
    },
  },

  // ─── REMOVE RULES ───────────────────────────────────────────────────────────

  // 6
  {
    id: "cursor-copilot-overlap",

    priority: 95,

    condition(context) {
      const hasCursor = context.toolsUsed.some(
        (tool) => tool.tool === "cursor",
      );

      const hasCopilot = context.toolsUsed.some(
        (tool) => tool.tool === "copilot",
      );

      return context.useCase === "coding" && hasCursor && hasCopilot;
    },

    calculateSavings(context) {
      const copilot = context.toolsUsed.find((tool) => tool.tool === "copilot");

      return copilot?.monthlySpend || 0;
    },

    getRecommendation(context) {
      const copilot = context.toolsUsed.find(
        (tool) => tool.tool === "copilot",
      )!;

      return {
        action: "remove",
        recommendedTool: "cursor",
        reason: `Cursor already overlaps heavily with Copilot for coding workflows. Removing Copilot could save $${copilot.monthlySpend}/mo.`,
      };
    },
  },

  // 7
  {
    id: "cursor-windsurf-overlap",

    priority: 94,

    condition(context) {
      const hasCursor = context.toolsUsed.some(
        (tool) => tool.tool === "cursor",
      );

      const hasWindsurf = context.toolsUsed.some(
        (tool) => tool.tool === "windsurf",
      );

      return context.useCase === "coding" && hasCursor && hasWindsurf;
    },

    calculateSavings(context) {
      const windsurf = context.toolsUsed.find(
        (tool) => tool.tool === "windsurf",
      );

      return windsurf?.monthlySpend || 0;
    },

    getRecommendation(context) {
      const windsurf = context.toolsUsed.find(
        (tool) => tool.tool === "windsurf",
      )!;

      return {
        action: "remove",
        recommendedTool: "cursor",
        reason: `Cursor and Windsurf solve very similar AI coding workflows. Removing Windsurf could save $${windsurf.monthlySpend}/mo.`,
      };
    },
  },

  // 8
  {
    id: "three-coding-tools-overlap",

    priority: 93,

    condition(context) {
      const codingTools = context.toolsUsed.filter(
        (tool) =>
          tool.tool === "cursor" ||
          tool.tool === "copilot" ||
          tool.tool === "windsurf",
      );

      return context.useCase === "coding" && codingTools.length >= 3;
    },

    calculateSavings(context) {
      const codingTools = context.toolsUsed.filter(
        (tool) =>
          tool.tool === "cursor" ||
          tool.tool === "copilot" ||
          tool.tool === "windsurf",
      );

      const cheapest = [...codingTools].sort(
        (a, b) => a.monthlySpend - b.monthlySpend,
      )[0];

      return cheapest?.monthlySpend || 0;
    },

    getRecommendation(context) {
      const codingTools = context.toolsUsed.filter(
        (tool) =>
          tool.tool === "cursor" ||
          tool.tool === "copilot" ||
          tool.tool === "windsurf",
      );

      const totalSpend = codingTools.reduce(
        (acc, tool) => acc + tool.monthlySpend,
        0,
      );

      const cheapest = [...codingTools].sort(
        (a, b) => a.monthlySpend - b.monthlySpend,
      )[0];

      return {
        action: "consolidate",
        reason: `You're spending $${totalSpend}/mo across overlapping AI coding assistants. Consolidating to one primary coding tool could save at least $${cheapest.monthlySpend}/mo.`,
      };
    },
  },

  // 9
  {
    id: "three-chat-tools-overlap",

    priority: 92,

    condition(context) {
      const chatTools = context.toolsUsed.filter(
        (tool) =>
          tool.tool === "chatgpt" ||
          tool.tool === "claude" ||
          tool.tool === "gemini",
      );

      return chatTools.length >= 3;
    },

    calculateSavings(context) {
      const chatTools = context.toolsUsed.filter(
        (tool) =>
          tool.tool === "chatgpt" ||
          tool.tool === "claude" ||
          tool.tool === "gemini",
      );

      const cheapest = [...chatTools].sort(
        (a, b) => a.monthlySpend - b.monthlySpend,
      )[0];

      return cheapest?.monthlySpend || 0;
    },

    getRecommendation(context) {
      const chatTools = context.toolsUsed.filter(
        (tool) =>
          tool.tool === "chatgpt" ||
          tool.tool === "claude" ||
          tool.tool === "gemini",
      );

      const totalSpend = chatTools.reduce(
        (acc, tool) => acc + tool.monthlySpend,
        0,
      );

      const cheapest = [...chatTools].sort(
        (a, b) => a.monthlySpend - b.monthlySpend,
      )[0];

      return {
        action: "consolidate",
        reason: `You're spending $${totalSpend}/mo across overlapping conversational AI tools. Consolidating tools could save at least $${cheapest.monthlySpend}/mo.`,
      };
    },
  },

  // 10
  {
    id: "solo-user-overstacked",

    priority: 91,

    condition(context) {
      return context.teamSize === 1 && context.toolsUsed.length >= 3;
    },

    calculateSavings(context) {
      const cheapest = [...context.toolsUsed].sort(
        (a, b) => a.monthlySpend - b.monthlySpend,
      )[0];

      return cheapest?.monthlySpend || 0;
    },

    getRecommendation(context) {
      const cheapest = [...context.toolsUsed].sort(
        (a, b) => a.monthlySpend - b.monthlySpend,
      )[0];

      return {
        action: "consolidate",
        reason: `Solo workflows usually don't require ${context.toolsUsed.length} separate AI subscriptions. Consolidation could save at least $${cheapest.monthlySpend}/mo.`,
      };
    },
  },

  // ─── ALTERNATIVE RULES ──────────────────────────────────────────────────────

  // 11
  {
    id: "coding-without-coding-editor",

    priority: 90,

    condition(context) {
      const hasCodingEditor = context.toolsUsed.some(
        (tool) =>
          tool.tool === "cursor" ||
          tool.tool === "copilot" ||
          tool.tool === "windsurf",
      );

      return context.useCase === "coding" && !hasCodingEditor;
    },

    calculateSavings() {
      return 0;
    },

    getRecommendation() {
      return {
        action: "alternative",
        recommendedTool: "cursor",
        recommendedPlan: "pro",
        reason: `Your stack focuses on coding workflows but lacks a dedicated AI coding editor. Cursor Pro is purpose-built for engineering workflows.`,
      };
    },
  },

  // 12
  {
    id: "research-without-gemini",

    priority: 89,

    condition(context) {
      const hasGemini = context.toolsUsed.some(
        (tool) => tool.tool === "gemini",
      );

      return context.useCase === "research" && !hasGemini;
    },

    calculateSavings() {
      return 0;
    },

    getRecommendation() {
      return {
        action: "alternative",
        recommendedTool: "gemini",
        recommendedPlan: "pro",
        reason: `Gemini Pro integrates strongly with research and document workflows.`,
      };
    },
  },

  // 13
  {
    id: "writing-without-claude",

    priority: 88,

    condition(context) {
      const hasClaude = context.toolsUsed.some(
        (tool) => tool.tool === "claude",
      );

      return context.useCase === "writing" && !hasClaude;
    },

    calculateSavings() {
      return 0;
    },

    getRecommendation() {
      return {
        action: "alternative",
        recommendedTool: "claude",
        recommendedPlan: "pro",
        reason: `Claude Pro is particularly strong for long-form writing and editing workflows.`,
      };
    },
  },

  // 14
  {
    id: "cursor-business-to-copilot-pro",

    priority: 87,

    condition(context) {
      return context.toolsUsed.some(
        (tool) =>
          tool.tool === "cursor" &&
          tool.plan === "business" &&
          context.useCase !== "coding",
      );
    },

    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "cursor" && tool.plan === "business",
      );

      if (!tool) {
        return 0;
      }

      return Math.max(0, tool.monthlySpend - 10 * tool.seats);
    },

    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (tool) => tool.tool === "cursor" && tool.plan === "business",
      )!;

      const savings = Math.max(0, tool.monthlySpend - 10 * tool.seats);

      return {
        action: "alternative",
        recommendedTool: "copilot",
        recommendedPlan: "pro",
        reason: `Cursor Business may be excessive for ${context.useCase} workflows. Copilot Pro could provide lighter assistance while saving $${savings}/mo.`,
      };
    },
  },

  // ─── STACK HEALTH RULES ─────────────────────────────────────────────────────

  // 15
  {
    id: "high-spend-low-adoption-stack",

    priority: 86,

    condition(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, tool) => acc + tool.monthlySpend,
        0,
      );

      const averageAdoption =
        context.toolsUsed.reduce(
          (acc, tool) => acc + getAdoptionRatio(tool.seats, context.teamSize),
          0,
        ) / context.toolsUsed.length;

      return totalSpend >= 300 && averageAdoption < 0.7;
    },

    calculateSavings(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, tool) => acc + tool.monthlySpend,
        0,
      );

      return Math.round(totalSpend * 0.2);
    },

    getRecommendation(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, tool) => acc + tool.monthlySpend,
        0,
      );

      const savings = Math.round(totalSpend * 0.2);

      return {
        action: "consolidate",
        reason: `Your stack costs $${totalSpend}/mo while average adoption across tools remains relatively low. Consolidation could save roughly $${savings}/mo.`,
      };
    },
  },
];
