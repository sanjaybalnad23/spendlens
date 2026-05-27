"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { supportedPlatforms } from "@/constants";
import { PRICING } from "@/constants";

import { generateAudit } from "@/lib/ai/generateAudit";
import { createAudit } from "@/actions/audit.action";

import type { AuditParams, UseCase } from "@/lib/auditengine/types";

type ToolInput = {
  tool: string;
  plan: string;
  seats: number;
  monthlySpend: string;
};

function getPlans(tool: string) {
  return Object.keys(PRICING[tool as keyof typeof PRICING]?.plans || {});
}

function getMonthlySpend(tool: ToolInput) {
  if (tool.monthlySpend) {
    return Number(tool.monthlySpend);
  }

  const pricing = PRICING[tool.tool as keyof typeof PRICING];

  const selectedPlan = pricing.plans[
    tool.plan as keyof typeof pricing.plans
  ] as {
    monthlyPrice: number;
  };

  return selectedPlan.monthlyPrice * tool.seats;
}

export default function AuditForm() {
  const router = useRouter();
  const [teamSize, setTeamSize] = useState(2);
  const [useCase, setUseCase] = useState<UseCase>("coding");
  const [tools, setTools] = useState<ToolInput[]>([
    {
      tool: "cursor",
      plan: "pro",
      seats: 2,
      monthlySpend: "",
    },
  ]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  function updateTool(
    index: number,
    field: keyof ToolInput,
    value: string | number,
  ) {
    const updated = [...tools];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    if (field === "tool") {
      updated[index].plan = getPlans(String(value))[0];
    }

    setTools(updated);
  }

  function addTool() {
    setTools([
      ...tools,
      {
        tool: "chatgpt",
        plan: "plus",
        seats: 1,
        monthlySpend: "",
      },
    ]);
  }

  function removeTool(index: number) {
    setTools(tools.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    startTransition(async () => {
      try {
        const payload: AuditParams = {
          teamSize,
          useCase,
          toolsUsed: tools.map((tool) => ({
            tool: tool.tool,
            plan: tool.plan,
            seats: tool.seats,
            monthlySpend: getMonthlySpend(tool),
          })),
        };

        const generatedAudit = await generateAudit(payload);
        const savedAudit = await createAudit(generatedAudit);

        router.push(`/audit/${savedAudit._id}`);
      } catch (error) {
        console.error(error);
        setError(
          error instanceof Error ? error.message : "Failed to generate audit",
        );
      }
    });
  }

  return (
    <section className="min-h-screen bg-[#07111f] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 mb-6">
            AI Spend Audit
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Audit Your
            <span className="block text-emerald-400">AI Stack</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl">
            Discover wasted AI spend, overlapping subscriptions, and
            optimization opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-black mb-6">Team Details</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Team Size
                </label>

                <input
                  type="number"
                  min={1}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full rounded-2xl bg-[#0d1727] border border-white/10 px-4 py-4 outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Primary Use Case
                </label>

                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value as UseCase)}
                  className="w-full rounded-2xl bg-[#0d1727] border border-white/10 px-4 py-4 outline-none focus:border-emerald-400"
                >
                  <option value="coding">Coding</option>

                  <option value="research">Research</option>

                  <option value="writing">Writing</option>

                  <option value="data">Data</option>

                  <option value="mixed">Mixed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">Tools Used</h2>

              <button
                type="button"
                onClick={addTool}
                className="rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-sm transition-all"
              >
                + Add Tool
              </button>
            </div>

            <div className="space-y-5">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-5 gap-4 rounded-2xl bg-[#0d1727] border border-white/10 p-5"
                >
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Tool
                    </label>

                    <select
                      value={tool.tool}
                      onChange={(e) =>
                        updateTool(index, "tool", e.target.value)
                      }
                      className="w-full rounded-xl bg-[#07111f] border border-white/10 px-3 py-3 outline-none focus:border-emerald-400"
                    >
                      {supportedPlatforms.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Plan
                    </label>

                    <select
                      value={tool.plan}
                      onChange={(e) =>
                        updateTool(index, "plan", e.target.value)
                      }
                      className="w-full rounded-xl bg-[#07111f] border border-white/10 px-3 py-3 outline-none focus:border-emerald-400"
                    >
                      {getPlans(tool.tool).map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Seats
                    </label>

                    <input
                      type="number"
                      min={1}
                      value={tool.seats}
                      onChange={(e) =>
                        updateTool(index, "seats", Number(e.target.value))
                      }
                      className="w-full rounded-xl bg-[#07111f] border border-white/10 px-3 py-3 outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Monthly Spend
                    </label>

                    <input
                      type="number"
                      min={0}
                      placeholder="auto"
                      value={tool.monthlySpend}
                      onChange={(e) =>
                        updateTool(index, "monthlySpend", e.target.value)
                      }
                      className="w-full rounded-xl bg-[#07111f] border border-white/10 px-3 py-3 outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      type="button"
                      disabled={tools.length === 1}
                      onClick={() => removeTool(index)}
                      className="w-full rounded-xl border border-red-400/20 bg-red-400/10 text-red-300 px-3 py-3 disabled:opacity-40"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className=" w-full rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-8 py-5 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] disabled:opacity-50
            "
          >
            {isPending ? "Generating Audit..." : "Run Audit"}
          </button>
        </form>
      </div>
    </section>
  );
}
