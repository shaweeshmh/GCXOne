"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroWithEntrance() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-gcx-dark border-b border-white/5">
      {/* ambient glow behind hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(184,134,43,0.12) 0%, transparent 50%)",
        }}
      />

      {/* starfield layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* lots of small stars, twinkle */}
        {Array.from({ length: 100 }).map((_, i) => {
          const left = (i * 7.3 + 2) % 100;
          const top = (i * 11.7 + 5) % 100;
          return (
            <motion.span
              key={`tiny-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: 1,
                height: 1,
                opacity: 0.15,
              }}
              animate={{
                opacity: [0.08, 0.35, 0.08],
              }}
              transition={{
                duration: 2 + (i % 4) * 0.8,
                delay: (i % 7) * 0.4,
                repeat: Infinity,
              }}
            />
          );
        })}
        {/* medium gold stars */}
        {Array.from({ length: 45 }).map((_, i) => {
          const left = (i * 13.1 + 3) % 100;
          const top = (i * 17.3 + 8) % 100;
          return (
            <motion.span
              key={`med-${i}`}
              className="absolute rounded-full bg-gcx-gold/40"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: 2,
                height: 2,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.5 + (i % 3) * 0.5,
                delay: (i % 5) * 0.3,
                repeat: Infinity,
              }}
            />
          );
        })}
        {/* brighter ones with glow */}
        {Array.from({ length: 15 }).map((_, i) => {
          const left = (i * 23 + 10) % 100;
          const top = (i * 31 + 15) % 100;
          return (
            <motion.span
              key={`bright-${i}`}
              className="absolute rounded-full bg-gcx-gold/50"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: 3,
                height: 3,
                boxShadow: "0 0 12px 5px rgba(184,134,43,0.45)",
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + (i % 2) * 0.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          );
        })}
        {/* A few “hero” stars */}
        {[
          { left: 15, top: 22 },
          { left: 82, top: 18 },
          { left: 45, top: 70 },
          { left: 88, top: 55 },
          { left: 8, top: 65 },
        ].map((pos, i) => (
          <motion.span
            key={`hero-star-${i}`}
            className="absolute rounded-full bg-gcx-gold/30"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              width: 4,
              height: 4,
              boxShadow: "0 0 18px 6px rgba(184,134,43,0.4)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto"
      >
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">GCX</span>{" "}
          <span className="bg-gcx-gradient-gold bg-clip-text text-transparent">One</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/solutions" className="text-gcx-gold font-medium text-sm hidden sm:block hover:text-gcx-amber transition-colors">
            Solutions
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-white text-sm transition-colors">
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
      </motion.nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 sm:pt-10 sm:pb-32">
        <div className="relative max-w-4xl mx-auto min-h-[400px] sm:min-h-[440px]">
          {/* floating dots that fade in and drift */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gcx-gold/40 pointer-events-none"
              style={{
                left: `${18 + i * 14 + (i % 2) * 8}%`,
                top: `${28 + (i % 3) * 18}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0.3],
                scale: 1,
                y: [0, -6, 0],
                x: [0, (i % 2 === 0 ? 1 : -1) * 4, 0],
              }}
              transition={{
                opacity: { duration: 1.5, delay: 0.8 + i * 0.15 },
                scale: { duration: 0.6, delay: 0.8 + i * 0.1 },
                y: { duration: 4 + i * 0.5, delay: 1.5 + i * 0.2, repeat: Infinity, repeatType: "reverse" },
                x: { duration: 3 + i * 0.3, delay: 1.8 + i * 0.15, repeat: Infinity, repeatType: "reverse" },
              }}
            />
          ))}

          {/* frame fades in, scales up, then glows */}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-gcx-gold/30 pointer-events-none"
            initial={{
              opacity: 0,
              scale: 0.94,
              boxShadow: "0 0 0 0 rgba(184,134,43,0), inset 0 0 80px rgba(0,0,0,0)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              boxShadow: [
                "0 0 0 0 rgba(184,134,43,0), inset 0 0 80px rgba(0,0,0,0)",
                "0 0 56px rgba(184,134,43,0.3), inset 0 0 100px rgba(0,0,0,0.12)",
                "0 0 36px rgba(184,134,43,0.22), inset 0 0 90px rgba(0,0,0,0.1)",
              ],
            }}
            transition={{
              opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              boxShadow: { duration: 2, delay: 0.4, repeat: Infinity, repeatDelay: 3 },
            }}
            style={{
              background: "linear-gradient(145deg, rgba(20,20,24,0.4) 0%, rgba(12,12,15,0.3) 100%)",
              backdropFilter: "blur(1px)",
            }}
          />
          {/* inner border glow */}
          <motion.div
            className="absolute inset-[1px] rounded-[15px] pointer-events-none"
            style={{ border: "1px solid rgba(184,134,43,0.25)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* light sweep across frame after it shows */}
          <motion.div
            className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gcx-gold/30 to-transparent"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* headline/content: blur to sharp, slide up */}
          <motion.div
            initial={{ opacity: 0, y: 56, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 text-center py-10 sm:py-14 px-6 sm:px-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.75, duration: 0.65 }}
              className="text-gcx-gold font-medium text-sm uppercase tracking-wider mb-4"
            >
              Proactive Monitoring Operating System
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.88, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Solutions that scale with your{" "}
              <span className="bg-gcx-gradient-gold bg-clip-text text-transparent gcx-text-glow">security needs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            >
              Trusted by companies from 10+ countries. Intelligent cameras, monitored sites, event analytics, and
              AI-powered false alarm filtering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.22, duration: 0.5 }}
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
        </div>

        {/* stats fade in with slight scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-10 sm:gap-16 pt-10 border-t border-white/5"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent gcx-text-glow">
              1.5M+
            </p>
            <p className="text-slate-400 text-sm mt-0.5">Events per 24 hours</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent gcx-text-glow">
              1M+
            </p>
            <p className="text-slate-400 text-sm mt-0.5">False Alarm Filtered</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
