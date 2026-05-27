import { AuditRule } from "./types";

export const rules: AuditRule[] = [
  // ─── DOWNGRADE RULES ────────────────────────────────────────────────────────

  // 1
  {
    id: "chatgpt-business-low-adoption",
    priority: 100,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "chatgpt" && t.plan === "business",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return adoptionRatio < 0.3 && context.teamSize < 50;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "chatgpt" && t.plan === "business",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "chatgpt" && t.plan === "business",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "chatgpt",
        recommendedPlan: "plus",
        reason: `ChatGPT Business is provisioned for ${tool.seats} seats but your team has ${context.teamSize} people — only ${adoptionRatio}% adoption. Plus at $20/seat covers the same core workflows and saves $${savings}/mo.`,
      };
    },
  },

  // 2
  {
    id: "chatgpt-business-small-org",
    priority: 95,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "chatgpt" && t.plan === "business",
      );
      if (!tool) return false;
      return context.teamSize <= 5;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "chatgpt" && t.plan === "business",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "chatgpt" && t.plan === "business",
      )!;
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "chatgpt",
        recommendedPlan: "plus",
        reason: `ChatGPT Business adds admin and compliance features rarely needed at ${context.teamSize} people. Plus at $20/seat is sufficient and saves $${savings}/mo.`,
      };
    },
  },

  // 3
  {
    id: "cursor-business-low-adoption",
    priority: 94,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "business",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return adoptionRatio < 0.3 && context.teamSize < 50;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "business",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "business",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "cursor",
        recommendedPlan: "pro",
        reason: `Cursor Business is at ${adoptionRatio}% team adoption. SSO and admin controls at $40/seat are hard to justify at this scale. Pro at $20/seat saves $${savings}/mo.`,
      };
    },
  },

  // 4
  {
    id: "cursor-business-small-org",
    priority: 90,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "business",
      );
      if (!tool) return false;
      return context.teamSize <= 5;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "business",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "business",
      )!;
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "cursor",
        recommendedPlan: "pro",
        reason: `Cursor Business at $40/seat adds org-level controls not needed for a ${context.teamSize}-person team. Pro at $20/seat has identical model access and saves $${savings}/mo.`,
      };
    },
  },

  // 5
  {
    id: "claude-max-low-adoption",
    priority: 88,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "max",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return adoptionRatio < 0.25;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "max",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "max",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "claude",
        recommendedPlan: "pro",
        reason: `Claude Max at $100/seat is provisioned for ${tool.seats} of ${context.teamSize} team members (${adoptionRatio}% adoption). Max is designed for power users with very high message volume. Pro at $20/seat saves $${savings}/mo.`,
      };
    },
  },

  // 6
  {
    id: "claude-max-small-org",
    priority: 85,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "max",
      );
      if (!tool) return false;
      return context.teamSize <= 5;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "max",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "max",
      )!;
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "claude",
        recommendedPlan: "pro",
        reason: `Claude Max at $100/seat is rarely justified for teams under 5 unless usage is exceptionally high. Pro at $20/seat covers standard workflows and saves $${savings}/mo.`,
      };
    },
  },

  // 7
  {
    id: "gemini-ultra-low-adoption",
    priority: 83,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "ultra",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return adoptionRatio < 0.25;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "ultra",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "ultra",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "gemini",
        recommendedPlan: "pro",
        reason: `Gemini Ultra at $100/seat is at ${adoptionRatio}% team adoption. Pro at $20/seat covers research and writing workflows for most teams and saves $${savings}/mo.`,
      };
    },
  },

  // 8
  {
    id: "gemini-ultra-small-org",
    priority: 80,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "ultra",
      );
      if (!tool) return false;
      return context.teamSize <= 5;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "ultra",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "ultra",
      )!;
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "gemini",
        recommendedPlan: "pro",
        reason: `Gemini Ultra at $100/seat is unlikely to be justified for a ${context.teamSize}-person team. Pro at $20/seat is sufficient for most research and writing needs and saves $${savings}/mo.`,
      };
    },
  },

  // 9
  {
    id: "windsurf-teams-low-adoption",
    priority: 78,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "windsurf" && t.plan === "teams",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return adoptionRatio < 0.3 && context.teamSize < 50;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "windsurf" && t.plan === "teams",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "windsurf" && t.plan === "teams",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "windsurf",
        recommendedPlan: "pro",
        reason: `Windsurf Teams is at ${adoptionRatio}% adoption. Org management features at $40/seat are not cost-effective at this usage level. Pro at $20/seat saves $${savings}/mo.`,
      };
    },
  },

  // 10
  {
    id: "windsurf-teams-small-org",
    priority: 75,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "windsurf" && t.plan === "teams",
      );
      if (!tool) return false;
      return context.teamSize <= 5;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "windsurf" && t.plan === "teams",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 20 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "windsurf" && t.plan === "teams",
      )!;
      const savings = tool.monthlySpend - 20 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "windsurf",
        recommendedPlan: "pro",
        reason: `Windsurf Teams at $40/seat adds org-level controls unnecessary for ${context.teamSize} developers. Pro at $20/seat is functionally equivalent and saves $${savings}/mo.`,
      };
    },
  },

  // 11
  {
    id: "copilot-proplus-non-coding",
    priority: 73,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "copilot" && t.plan === "proPlus",
      );
      if (!tool) return false;
      return context.useCase !== "coding";
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "copilot" && t.plan === "proPlus",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 10 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "copilot" && t.plan === "proPlus",
      )!;
      const savings = tool.monthlySpend - 10 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "copilot",
        recommendedPlan: "pro",
        reason: `Copilot Pro+ at $39/seat is built for heavy coding agent workflows. Your primary use case is ${context.useCase} — Pro at $10/seat is sufficient and saves $${savings}/mo.`,
      };
    },
  },

  // 12
  {
    id: "copilot-proplus-low-adoption",
    priority: 70,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "copilot" && t.plan === "proPlus",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return adoptionRatio < 0.2;
    },
    calculateSavings(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "copilot" && t.plan === "proPlus",
      );
      if (!tool) return 0;
      return tool.monthlySpend - 10 * tool.seats;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "copilot" && t.plan === "proPlus",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      const savings = tool.monthlySpend - 10 * tool.seats;
      return {
        action: "downgrade",
        recommendedTool: "copilot",
        recommendedPlan: "pro",
        reason: `Copilot Pro+ is provisioned for ${tool.seats} of ${context.teamSize} team members (${adoptionRatio}% adoption). Pro at $10/seat covers most coding workflows and saves $${savings}/mo.`,
      };
    },
  },

  // ─── REMOVE RULES ───────────────────────────────────────────────────────────

  // 13
  {
    id: "redundant-copilot-with-cursor",
    priority: 95,
    condition(context) {
      const hasCursor = context.toolsUsed.some((t) => t.tool === "cursor");
      const hasCopilot = context.toolsUsed.some((t) => t.tool === "copilot");
      return hasCursor && hasCopilot;
    },
    calculateSavings(context) {
      const copilot = context.toolsUsed.find((t) => t.tool === "copilot");
      return copilot ? copilot.monthlySpend : 0;
    },
    getRecommendation(context) {
      const copilot = context.toolsUsed.find((t) => t.tool === "copilot")!;
      return {
        action: "remove",
        recommendedTool: "cursor",
        reason: `Cursor already covers inline completions, chat, and agent workflows — the same value proposition as Copilot. Running both creates redundant spend. Dropping Copilot saves $${copilot.monthlySpend}/mo.`,
      };
    },
  },

  // 14
  {
    id: "redundant-windsurf-with-cursor",
    priority: 92,
    condition(context) {
      const hasCursor = context.toolsUsed.some((t) => t.tool === "cursor");
      const hasWindsurf = context.toolsUsed.some((t) => t.tool === "windsurf");
      return hasCursor && hasWindsurf;
    },
    calculateSavings(context) {
      const windsurf = context.toolsUsed.find((t) => t.tool === "windsurf");
      return windsurf ? windsurf.monthlySpend : 0;
    },
    getRecommendation(context) {
      const windsurf = context.toolsUsed.find((t) => t.tool === "windsurf")!;
      return {
        action: "remove",
        recommendedTool: "cursor",
        reason: `Cursor and Windsurf are near-identical AI coding editors with overlapping model access and workflows. Consolidating to Cursor saves $${windsurf.monthlySpend}/mo.`,
      };
    },
  },

  // ─── CONSOLIDATE RULES ──────────────────────────────────────────────────────

  // 15
  {
    id: "multiple-chat-tools-overlap",
    priority: 68,
    condition(context) {
      const chatTools = context.toolsUsed.filter((t) =>
        ["chatgpt", "claude", "gemini"].includes(t.tool),
      );
      return chatTools.length >= 3;
    },
    calculateSavings(context) {
      const chatTools = context.toolsUsed.filter((t) =>
        ["chatgpt", "claude", "gemini"].includes(t.tool),
      );
      return Math.min(...chatTools.map((t) => t.monthlySpend));
    },
    getRecommendation(context) {
      const chatTools = context.toolsUsed.filter((t) =>
        ["chatgpt", "claude", "gemini"].includes(t.tool),
      );
      const totalSpend = chatTools.reduce((acc, t) => acc + t.monthlySpend, 0);
      const cheapest = Math.min(...chatTools.map((t) => t.monthlySpend));
      return {
        action: "consolidate",
        reason: `Your stack includes ChatGPT, Claude, and Gemini — $${totalSpend}/mo across three general-purpose chat tools with heavily overlapping capabilities. Consolidating to two saves at least $${cheapest}/mo.`,
      };
    },
  },

  // 16
  {
    id: "multiple-coding-tools-overlap",
    priority: 65,
    condition(context) {
      const codingTools = context.toolsUsed.filter((t) =>
        ["cursor", "copilot", "windsurf"].includes(t.tool),
      );
      return codingTools.length >= 3;
    },
    calculateSavings(context) {
      const codingTools = context.toolsUsed.filter((t) =>
        ["cursor", "copilot", "windsurf"].includes(t.tool),
      );
      return Math.min(...codingTools.map((t) => t.monthlySpend));
    },
    getRecommendation(context) {
      const codingTools = context.toolsUsed.filter((t) =>
        ["cursor", "copilot", "windsurf"].includes(t.tool),
      );
      const totalSpend = codingTools.reduce(
        (acc, t) => acc + t.monthlySpend,
        0,
      );
      const cheapest = Math.min(...codingTools.map((t) => t.monthlySpend));
      return {
        action: "consolidate",
        reason: `You're running Cursor, Copilot, and Windsurf for $${totalSpend}/mo — three tools serving nearly identical coding workflows. Consolidating to one saves at least $${cheapest}/mo.`,
      };
    },
  },

  // 17
  {
    id: "solo-user-many-tools",
    priority: 60,
    condition(context) {
      return context.teamSize === 1 && context.toolsUsed.length >= 3;
    },
    calculateSavings(context) {
      return Math.min(...context.toolsUsed.map((t) => t.monthlySpend));
    },
    getRecommendation(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, t) => acc + t.monthlySpend,
        0,
      );
      const cheapest = Math.min(
        ...context.toolsUsed.map((t) => t.monthlySpend),
      );
      return {
        action: "consolidate",
        reason: `As a solo user you're spending $${totalSpend}/mo across ${context.toolsUsed.length} AI tools. Single-person workflows rarely require more than two tools. Trimming the least-used saves at least $${cheapest}/mo.`,
      };
    },
  },

  // 18
  {
    id: "high-spend-per-seat",
    priority: 55,
    condition(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, t) => acc + t.monthlySpend,
        0,
      );
      const totalSeats = context.toolsUsed.reduce((acc, t) => acc + t.seats, 0);
      const spendPerSeat = totalSeats > 0 ? totalSpend / totalSeats : 0;
      return spendPerSeat > 80 && context.teamSize <= 20;
    },
    calculateSavings(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, t) => acc + t.monthlySpend,
        0,
      );
      return Math.round(totalSpend * 0.2);
    },
    getRecommendation(context) {
      const totalSpend = context.toolsUsed.reduce(
        (acc, t) => acc + t.monthlySpend,
        0,
      );
      const totalSeats = context.toolsUsed.reduce((acc, t) => acc + t.seats, 0);
      const spendPerSeat = Math.round(totalSpend / totalSeats);
      const savings = Math.round(totalSpend * 0.2);
      return {
        action: "consolidate",
        reason: `Your stack averages $${spendPerSeat}/seat/mo across ${totalSeats} seats — above typical for a ${context.teamSize}-person team. Reviewing plan tiers and removing underused tools could save ~$${savings}/mo.`,
      };
    },
  },

  // ─── ALTERNATIVE RULES ──────────────────────────────────────────────────────

  // 19
  {
    id: "coding-team-no-dedicated-editor",
    priority: 50,
    condition(context) {
      const hasCodingEditor = context.toolsUsed.some((t) =>
        ["cursor", "copilot", "windsurf"].includes(t.tool),
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
        reason: `Your team's primary use case is coding but your stack has no dedicated AI coding editor. Cursor Pro at $20/seat provides inline completions, multi-file edits, and agent workflows built for engineering teams.`,
      };
    },
  },

  // 20
  {
    id: "writing-team-no-claude",
    priority: 45,
    condition(context) {
      const hasClaude = context.toolsUsed.some((t) => t.tool === "claude");
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
        reason: `For writing-focused workflows Claude consistently performs well on tone, long-form coherence, and editing tasks. Claude Pro at $20/seat is worth evaluating against your current stack.`,
      };
    },
  },

  // 21
  {
    id: "research-team-no-gemini",
    priority: 40,
    condition(context) {
      const hasGemini = context.toolsUsed.some((t) => t.tool === "gemini");
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
        reason: `For research-heavy workflows Gemini Pro offers native Google Search grounding and strong document analysis. At $20/seat it may complement or replace higher-cost tools in your current stack.`,
      };
    },
  },

  // ─── OPTIMAL RULES ──────────────────────────────────────────────────────────

  // 22
  {
    id: "cursor-pro-coding-team-optimal",
    priority: 20,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "pro",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return context.useCase === "coding" && adoptionRatio >= 0.7;
    },
    calculateSavings() {
      return 0;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "cursor" && t.plan === "pro",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      return {
        action: "optimal",
        recommendedTool: "cursor",
        recommendedPlan: "pro",
        reason: `Cursor Pro at $20/seat with ${adoptionRatio}% team adoption is well-matched to a coding-focused team. Current setup appears reasonably optimized.`,
      };
    },
  },

  // 23
  {
    id: "claude-pro-writing-team-optimal",
    priority: 20,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "pro",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return context.useCase === "writing" && adoptionRatio >= 0.7;
    },
    calculateSavings() {
      return 0;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "claude" && t.plan === "pro",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      return {
        action: "optimal",
        recommendedTool: "claude",
        recommendedPlan: "pro",
        reason: `Claude Pro at $20/seat with ${adoptionRatio}% adoption is a strong fit for a writing-focused team. Current setup appears reasonably optimized.`,
      };
    },
  },

  // 24
  {
    id: "gemini-pro-research-team-optimal",
    priority: 20,
    condition(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "pro",
      );
      if (!tool) return false;
      const adoptionRatio = tool.seats / context.teamSize;
      return context.useCase === "research" && adoptionRatio >= 0.7;
    },
    calculateSavings() {
      return 0;
    },
    getRecommendation(context) {
      const tool = context.toolsUsed.find(
        (t) => t.tool === "gemini" && t.plan === "pro",
      )!;
      const adoptionRatio = Math.round((tool.seats / context.teamSize) * 100);
      return {
        action: "optimal",
        recommendedTool: "gemini",
        recommendedPlan: "pro",
        reason: `Gemini Pro at $20/seat with ${adoptionRatio}% adoption is well-suited to a research-focused team. Current setup appears reasonably optimized.`,
      };
    },
  },
];
