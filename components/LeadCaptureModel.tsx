"use client";

import { useState, useTransition } from "react";
import { createLead } from "@/actions/lead.action";

type LeadCaptureModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeadCaptureModal({ setIsOpen }: LeadCaptureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  const [isPending, startTransition] = useTransition();

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    startTransition(async () => {
      try {
        if (!name.trim()) {
          setError("Name is required");
          return;
        }

        if (!email.trim()) {
          setError("Email is required");
          return;
        }

        await createLead({ name, email, company: company || undefined });

        setIsOpen(false);
      } catch (error) {
        console.error(error);

        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      }
    });
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={closeModal}
      />

      <div className="relative w-full max-w-xl rounded-[32px] border border-white/10 bg-[#07111f] p-8 shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 h-10 w-10 rounded-full bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
        >
          ✕
        </button>

        <div className="mb-8">
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 mb-6">
            Save Your Audit
          </div>

          <h2 className="text-4xl font-black tracking-tight mb-4">
            Get Future
            <span className="block text-emerald-400">Savings Insights</span>
          </h2>

          <p className="text-slate-400 leading-relaxed">
            Receive future optimization updates from SpendLens.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-2xl bg-[#0d1727] border border-white/10 px-4 py-4 outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="w-full rounded-2xl bg-[#0d1727] border border-white/10 px-4 py-4 outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Company
              <span className="text-slate-500 ml-2">(optional)</span>
            </label>

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Inc."
              className="w-full rounded-2xl bg-[#0d1727] border border-white/10 px-4 py-4 outline-none focus:border-emerald-400"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-6 py-4 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Lead"}
          </button>
        </form>
      </div>
    </div>
  );
}
