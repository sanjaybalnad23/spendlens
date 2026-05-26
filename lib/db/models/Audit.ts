// models/audit.model.ts

import { model, models, Schema, type InferSchemaType } from "mongoose";

const ToolSchema = new Schema(
  {
    tool: {
      type: String,
      required: true,
    },

    plan: {
      type: String,
      required: true,
    },

    seats: {
      type: Number,
      required: true,
      min: 0,
    },

    monthlySpend: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    _id: false,
  },
);

const RecommendationSchema = new Schema(
  {
    action: {
      type: String,
      required: true,
      enum: ["optimal", "alternative", "downgrade", "remove", "consolidate"],
    },

    recommendedTool: {
      type: String,
    },

    recommendedPlan: {
      type: String,
    },

    reason: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const AuditSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    useCase: {
      type: String,
      required: true,
      enum: ["coding", "research", "mixed", "data", "writing"],
    },

    teamSize: {
      type: Number,
      required: true,
      min: 1,
    },

    toolsUsed: {
      type: [ToolSchema],
      required: true,
    },

    totalSavings: {
      type: Number,
      required: true,
      min: 0,
    },

    totalAnnualSavings: {
      type: Number,
      required: true,
      min: 0,
    },

    recommendations: {
      type: [RecommendationSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export type TAudit = InferSchemaType<typeof AuditSchema>;

export const Audit = models.Audit || model("Audit", AuditSchema);
