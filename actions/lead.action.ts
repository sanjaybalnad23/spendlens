"use server";

import { connectToDatabase } from "@/lib/db/db";
import { Lead } from "@/lib/db/models/lead.model";

export type CreateLeadInput = {
  name: string;
  email: string;
  company?: string;
};

export async function createLead(data: CreateLeadInput) {
  try {
    await connectToDatabase();

    const existingLead = await Lead.findOne({
      email: data.email,
    });

    if (existingLead) {
      return JSON.parse(JSON.stringify(existingLead));
    }

    const lead = await Lead.create(data);

    return JSON.parse(JSON.stringify(lead));
  } catch (error) {
    console.error(error);

    throw new Error("Failed to create lead");
  }
}
