"use server";

import { connectToDatabase } from "@/lib/db/db";
import { Audit } from "@/lib/db/models/audit.model";

export type CreateAuditInput = {
  useCase: "coding" | "research" | "mixed" | "data" | "writing";
  teamSize: number;
  toolsUsed: {
    tool: string;
    plan: string;
    seats: number;
    monthlySpend: number;
  }[];
  totalSavings: number;
  totalAnnualSavings: number;
  recommendations: {
    action: "optimal" | "alternative" | "downgrade" | "remove" | "consolidate";
    reason: string;
    recommendedTool?: string;
    recommendedPlan?: string;
  }[];
  aiSummary?: string;
};

export async function createAudit(data: CreateAuditInput) {
  try {
    await connectToDatabase();

    const audit = await Audit.create(data);

    return JSON.parse(JSON.stringify(audit));
  } catch (error) {
    console.error(error);

    throw new Error("Failed to create audit");
  }
}

export async function getAuditById(auditId: string) {
  try {
    await connectToDatabase();

    const audit = await Audit.findById(auditId).lean();

    if (!audit) {
      return null;
    }

    return JSON.parse(JSON.stringify(audit));
  } catch (error) {
    console.error(error);

    throw new Error("Failed to fetch audit");
  }
}
