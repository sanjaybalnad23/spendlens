"use client";

export default function GlobalError() {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-[#07111f] text-white flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl font-black mb-4">Something went wrong</h1>
            <p className="text-slate-400">Please refresh the page.</p>
          </div>
        </main>
      </body>
    </html>
  );
}
