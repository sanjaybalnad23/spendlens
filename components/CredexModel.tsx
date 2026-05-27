"use client";

type CredexModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CredexModal({ setIsOpen }: CredexModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  function handelClick() {
    window.open(
      "https://credextechnology.com/",
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={closeModal}
      />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-white/10 bg-[#07111f] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%)]" />

        <button
          onClick={closeModal}
          className="absolute right-5 top-5 z-20 h-10 w-10 rounded-full bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
        >
          ✕
        </button>

        <div className="relative z-10 p-10 md:p-12">
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 mb-6">
            Capture More Savings
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
            You Could Save
            <span className="block text-emerald-400 mt-2">Thousands More</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            SpendLens detected significant optimization opportunities in your AI
            stack. Credex helps teams operationalize those savings, consolidate
            tooling, and continuously optimize AI procurement at scale.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-emerald-400 mb-2">↓</p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Reduce duplicated AI spend across teams
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-emerald-400 mb-2">⚡</p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Optimize vendor and subscription decisions
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black text-emerald-400 mb-2">📈</p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Track ongoing AI savings opportunities
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handelClick}
              className=" inline-flex items-center justify-center rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-8 py-4 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]"
            >
              Talk To Credex
            </button>

            <button
              type="button"
              onClick={closeModal}
              className=" inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
