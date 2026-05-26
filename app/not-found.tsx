"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.14),transparent_40%)]" />

      <div className="relative z-10 text-center max-w-4xl">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[180px] md:text-[320px] font-black leading-none tracking-tight text-white/[0.04]">
            404
          </h1>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-300 mb-8">
            Page Not Found
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Lost In The
            <span className="block text-emerald-400">AI Stack</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
            The page you&apos;re looking for doesn&apos;t exist, was removed, or
            got consolidated to optimize costs 😭
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className=" bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-8 py-4 rounded-2xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.45)]"
            >
              Go Home
            </Link>

            <Link
              href="/audit"
              className=" border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl transition-all"
            >
              Run Audit
            </Link>
          </div>

          <div className="mt-20 text-slate-500 text-sm">
            SpendLens • AI Spend Optimization Platform
          </div>
        </div>
      </div>
    </main>
  );
}
