"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SolutionsHero() {
  return (
    <header className="relative overflow-hidden bg-gcx-dark border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(184,134,43,0.12),transparent_50%)]" />
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-white">GCX</span>{" "}
          <span className="bg-gcx-gradient-gold bg-clip-text text-transparent">One</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/solutions"
            className="text-gcx-gold font-medium text-sm hidden sm:block hover:text-gcx-amber transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 hover:text-white text-sm transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://www.gcxone.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 gcx-btn-gradient text-white text-sm font-semibold rounded-lg hover:opacity-95 transition-opacity shadow-gcx-button"
          >
            Free Trial
          </a>
        </div>
      </nav>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-20 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-gcx-gold font-medium text-sm uppercase tracking-wider mb-4">
            Proactive Monitoring Operating System
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Solutions that scale with your{" "}
            <span className="bg-gcx-gradient-gold bg-clip-text text-transparent">security needs</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Trusted by companies from 10+ countries. Intelligent cameras, monitored sites, event analytics, and AI-powered false alarm filtering.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#solutions"
              className="px-6 py-3 gcx-btn-gradient text-white font-semibold rounded-lg hover:opacity-95 transition-opacity shadow-gcx-button"
            >
              Explore solutions
            </a>
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all"
            >
              <span className="absolute inset-0 rounded-lg bg-gcx-gradient-border" />
              <span className="absolute inset-[1px] rounded-[7px] bg-gcx-dark" />
              <span className="relative text-slate-300 group-hover:text-gcx-amber">Compare plans</span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-10 sm:gap-16 mt-16 pt-12 border-t border-white/5"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent">1.5M+</p>
            <p className="text-slate-400 text-sm mt-0.5">Events per 24 hours</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent">1M+</p>
            <p className="text-slate-400 text-sm mt-0.5">False Alarm Filtered</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
