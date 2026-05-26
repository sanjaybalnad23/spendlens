import { AuditParams, AuditResult, AuditRule, Recommendation } from "./types";

export class AuditEngine {
  private rules: AuditRule[];

  constructor(rules: AuditRule[]) {
    this.rules = rules;
  }

  run(input: AuditParams): AuditResult {
    const matchedRules = this.rules.filter((rule) => rule.condition(input));

    if (!matchedRules.length) {
      return {
        totalSavings: 0,
        totalAnnualSavings: 0,
        recommendations: [
          {
            action: "optimal",
            reason:
              "Your current AI stack already appears reasonably optimized for your team size and use case.",
          },
        ],
      };
    }

    matchedRules.sort((a, b) => a.priority - b.priority);

    const totalSavings = matchedRules.reduce((acc, rule) => {
      return acc + rule.calculateSavings(input);
    }, 0);

    const recommendations: Recommendation[] = matchedRules.map((rule) =>
      rule.getRecommendation(input),
    );

    return {
      totalSavings,
      totalAnnualSavings: totalSavings * 12,
      recommendations,
    };
  }
}
