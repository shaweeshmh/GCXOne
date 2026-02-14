"use client";

import Link from "next/link";

export function SolutionsFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* thin gold line along top */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(184,134,43,0.5) 20%, rgba(184,134,43,0.6) 50%, rgba(184,134,43,0.5) 80%, transparent 100%)",
        }}
        aria-hidden
      />
      {/* bg gradients and dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-gcx-slate/90 to-gcx-dark" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,134,43,0.9) 1.5px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 1px,
            rgba(184,134,43,0.2) 1px,
            rgba(184,134,43,0.2) 2px
          )`,
        }}
        aria-hidden
      />
      {/* soft glow at top */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(184,134,43,0.04) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8 sm:pb-10">
        {/* top row: brand + links */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12">
          {/* logo and tagline */}
          <div className="space-y-3 max-w-sm">
            <Link href="/" className="inline-flex items-baseline gap-2 group">
              <span className="text-xl font-bold text-white tracking-tight">GCX</span>
              <span className="text-xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent tracking-tight">
                One
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Advanced Enterprise Security & Surveillance
            </p>
            <p className="text-slate-600 text-xs">
              NXGEN Technology AG · Trusted in 10+ countries
            </p>
          </div>

          {/* legal links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <span className="text-slate-600 text-xs font-medium uppercase tracking-wider">
              Legal &amp; info
            </span>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-1" aria-label="Footer">
              <a
                href="https://www.gcxone.com/en/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gcx-gold text-sm font-medium transition-colors"
              >
                Terms
              </a>
              <span className="text-slate-700" aria-hidden>·</span>
              <a
                href="https://www.gcxone.com/en/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gcx-gold text-sm font-medium transition-colors"
              >
                Privacy
              </a>
              <span className="text-slate-700" aria-hidden>·</span>
              <Link
                href="/"
                className="text-slate-400 hover:text-gcx-gold text-sm font-medium transition-colors"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>

        {/* divider line */}
        <div
          className="my-10 h-px w-full opacity-40"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(184,134,43,0.3) 50%, transparent)",
          }}
          aria-hidden
        />

        {/* copyright row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} NXGEN Technology AG. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Proactive monitoring operating system
          </p>
        </div>
      </div>

      {/* gold line at very bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 opacity-50"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(184,134,43,0.4) 50%, transparent 100%)",
        }}
        aria-hidden
      />
    </footer>
  );
}
