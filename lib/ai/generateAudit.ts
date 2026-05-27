import { generateText } from "ai";
import { AuditEngine } from "@/lib/auditengine/AuditEngine";
import { rules } from "@/lib/auditengine/rules";
import type { AuditParams } from "@/lib/auditengine/types";
import { SYSTEM_PROMPT } from "@/constants";
import { CreateAuditInput } from "@/actions/audit.action";

type GeneratedAudit = CreateAuditInput;

export async function generateAudit(
  params: AuditParams,
): Promise<GeneratedAudit> {
  const engine = new AuditEngine(rules);
  const result = engine.run(params);
  const { text } = await generateText({
    model: "google/gemini-2.5-flash",
    system: SYSTEM_PROMPT,
    prompt: `
      Audit Input:
      ${JSON.stringify(params, null, 2)}
      Audit Result:
      ${JSON.stringify(result, null, 2)}
      Generate a concise AI audit summary.
      `,
  });

  return {
    ...params,
    totalSavings: result.totalSavings,
    totalAnnualSavings: result.totalAnnualSavings,
    recommendations: result.recommendations,
    aiSummary: text,
  };
}
