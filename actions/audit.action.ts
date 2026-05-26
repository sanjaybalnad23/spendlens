"use server";

import { connectToDatabase } from "@/lib/db/db";
import { Audit, type TAudit } from "@/lib/db/models/audit.model";

export async function createAudit(data: TAudit) {
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
      throw new Error("Audit not found");
    }

    return JSON.parse(JSON.stringify(audit));
  } catch (error) {
    console.error(error);

    throw new Error("Failed to fetch audit");
  }
}
