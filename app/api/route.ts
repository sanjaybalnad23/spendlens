import { AuditEngine } from "@/lib/auditengine/AuditEngine";
import { NextRequest, NextResponse } from "next/server";
import { rules } from "@/lib/auditengine/rules";

export function GET(req: NextRequest, res: NextResponse) {
  const engine = new AuditEngine(rules);
  const result = engine.run({
    teamSize: 8,
    useCase: "research",
    toolsUsed: [
      {
        monthlySpend: 40,
        plan: "business",
        seats: 8,
        tool: "cursor",
      },
    ],
  });
  console.log(result);
  return NextResponse.json(result);
}
