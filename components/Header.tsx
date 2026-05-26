"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="SpendLens"
            width={220}
            height={60}
            className="h-12 w-auto"
          />
        </div>

        <Link
          href="/audit"
          className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-5 py-3 rounded-xl transition-all"
        >
          Run Audit
        </Link>
      </div>
    </header>
  );
}
