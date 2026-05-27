"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050d18]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        <p>© 2026 SpendLens. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link href="/audit" className="hover:text-white transition-colors">
            Audit
          </Link>

          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
