import { FEATURES } from "@/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen  text-white overflow-hidden">
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.15),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 mb-6">
                AI Spend Optimization Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                Stop Overpaying
                <span className="block text-emerald-400">For AI Tools</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                SpendLens audits your AI stack, detects overlapping tools,
                underused enterprise plans, and unnecessary subscriptions — then
                recommends smarter ways to reduce monthly spend.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/audit"
                  className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-8 py-4 rounded-2xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] inline-flex items-center justify-center"
                >
                  Run Free Audit
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-slate-400">
                <div>✓ No signup required</div>
                <div>✓ 30 second audit</div>
                <div>✓ Instant savings insights</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 h-72 w-72 bg-emerald-400/20 blur-3xl rounded-full" />

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-slate-400 text-sm">Estimated Savings</p>

                    <h2 className="text-5xl font-black mt-2">
                      $420
                      <span className="text-emerald-400 text-2xl ml-2">
                        /mo
                      </span>
                    </h2>
                  </div>

                  <div className="h-16 w-16 rounded-2xl bg-emerald-400/10 flex items-center justify-center text-3xl border border-emerald-400/20">
                    💸
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#0d1727] border border-white/5 rounded-2xl p-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">
                        Cursor Business → Pro
                      </p>

                      <p className="text-sm text-slate-400 mt-1">
                        Team size is too small to justify org-level features.
                      </p>
                    </div>

                    <div className="text-emerald-400 font-semibold whitespace-nowrap">
                      Save $160
                    </div>
                  </div>

                  <div className="bg-[#0d1727] border border-white/5 rounded-2xl p-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">
                        Remove GitHub Copilot
                      </p>

                      <p className="text-sm text-slate-400 mt-1">
                        Cursor already overlaps with Copilot workflows.
                      </p>
                    </div>

                    <div className="text-emerald-400 font-semibold whitespace-nowrap">
                      Save $80
                    </div>
                  </div>

                  <div className="bg-[#0d1727] border border-white/5 rounded-2xl p-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">
                        Consolidate Chat Tools
                      </p>

                      <p className="text-sm text-slate-400 mt-1">
                        ChatGPT, Claude, and Gemini heavily overlap.
                      </p>
                    </div>

                    <div className="text-emerald-400 font-semibold whitespace-nowrap">
                      Save $180
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-4">FEATURES</p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Built For Modern AI Teams
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            SpendLens analyzes your AI subscriptions and identifies real
            optimization opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 border border-emerald-400/20 rounded-[40px] p-10 md:p-16 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Your AI Stack
            <span className="block text-emerald-400">Might Be Overkill</span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Most teams accumulate overlapping AI tools over time. SpendLens
            helps you cut waste without slowing down your workflows.
          </p>

          <Link
            href="/audit"
            className="bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-[0_0_50px_rgba(16,185,129,0.35)] inline-flex items-center justify-center"
          >
            Start Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
