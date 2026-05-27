"use client";

import { TAudit } from "@/lib/db/models/audit.model";
import { useEffect, useState } from "react";
import LeadCaptureModal from "./LeadCaptureModel";

type AuditViewerProps = TAudit;

export default function AuditViewer(audit: AuditViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isOpen && <LeadCaptureModal setIsOpen={setIsOpen} />}
      <section className="min-h-screen bg-[#07111f] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 mb-6">
              Audit Report
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Estimated Savings
            </h1>

            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div>
                <h2 className="text-6xl md:text-8xl font-black text-emerald-400 leading-none">
                  ${audit.totalSavings}
                </h2>

                <p className="text-slate-400 mt-3 text-lg">
                  monthly savings potential
                </p>
              </div>

              <div className="pb-2">
                <p className="text-3xl font-bold">
                  ${audit.totalAnnualSavings}/year
                </p>

                <p className="text-slate-500 mt-1">annual projection</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl">
              <p className="text-slate-400 text-sm mb-3">Use Case</p>

              <h3 className="text-3xl font-black capitalize">
                {audit.useCase}
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl">
              <p className="text-slate-400 text-sm mb-3">Team Size</p>

              <h3 className="text-3xl font-black">{audit.teamSize}</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl">
              <p className="text-slate-400 text-sm mb-3">Tools Audited</p>

              <h3 className="text-3xl font-black">{audit.toolsUsed.length}</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-8">Current Stack</h2>

              <div className="space-y-4">
                {audit.toolsUsed.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-[#0d1727] border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold capitalize">
                        {tool.tool}
                      </h3>

                      <p className="text-slate-400 mt-1 capitalize">
                        {tool.plan} plan · {tool.seats} seats
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-emerald-400 text-xl font-bold">
                        ${tool.monthlySpend}
                      </p>

                      <p className="text-slate-500 text-sm">/month</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-8">Recommendations</h2>

              <div className="space-y-4">
                {audit.recommendations.map((recommendation, index) => (
                  <div
                    key={index}
                    className="bg-[#0d1727] border border-white/10 rounded-2xl p-5"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                        {recommendation.action}
                      </span>

                      {recommendation.recommendedTool && (
                        <p className="text-sm text-slate-400 capitalize">
                          {recommendation.recommendedTool}
                          {recommendation.recommendedPlan &&
                            ` · ${recommendation.recommendedPlan}`}
                        </p>
                      )}
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {recommendation.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
