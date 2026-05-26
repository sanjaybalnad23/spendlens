// models/lead.model.ts

import { model, models, Schema, type InferSchemaType } from "mongoose";

const LeadSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export type TLead = InferSchemaType<typeof LeadSchema>;

export const Lead = models.Lead || model("Lead", LeadSchema);
