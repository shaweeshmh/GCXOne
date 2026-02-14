"use client";

import { motion, useAnimation } from "framer-motion";
import { createElement, useEffect, useState } from "react";

type EntranceAnimationProps = {
  onComplete: () => void;
};

export function EntranceAnimation({ onComplete }: EntranceAnimationProps) {
  const circleControls = useAnimation();
  const contentControls = useAnimation();
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSkip(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const run = async () => {
      // circle starts big and faint, then shrinks into place
      await circleControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
      });

      // content fades in
      await contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      // hold a sec
      await new Promise((r) => setTimeout(r, 1400));

      // then circle and content fade out
      await Promise.all([
        circleControls.start({
          scale: 0.3,
          opacity: 0,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        }),
        contentControls.start({
          opacity: 0,
          scale: 0.95,
          transition: { duration: 0.5 },
        }),
      ]);

      onComplete();
    };
    run();
  }, [circleControls, contentControls, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gcx-dark overflow-hidden"
      aria-hidden="true"
    >
      {/* small specks in bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-gcx-gold/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.3] }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 1.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* big circle in the middle */}
      <motion.div
        initial={{ scale: 1.8, opacity: 0.25 }}
        animate={circleControls}
        className="relative flex items-center justify-center rounded-full w-[min(85vmin,720px)] h-[min(85vmin,720px)]"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%,
              rgba(26,26,31,0.92) 0%,
              rgba(20,20,25,0.88) 40%,
              rgba(12,12,15,0.85) 100%),
            radial-gradient(ellipse 80% 80% at 50% 30%,
              rgba(184,134,43,0.12) 0%,
              transparent 50%)
          `,
          boxShadow: `
            0 0 0 1px rgba(184,134,43,0.25),
            0 0 80px rgba(184,134,43,0.12),
            inset 0 0 60px rgba(0,0,0,0.3)
          `,
        }}
      >
        {/* inner rings */}
        <div
          className="absolute inset-[15%] rounded-full border border-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[28%] rounded-full border border-white/[0.03] pointer-events-none"
          aria-hidden="true"
        />

        {/* logo and tagline inside circle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={contentControls}
          className="relative z-10 text-center px-8 max-w-md"
        >
          <div className="mb-4">
            <span className="text-2xl sm:text-3xl font-bold text-white">GCX</span>{" "}
            <span className="text-2xl sm:text-3xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent">
              One
            </span>
          </div>
          <p className="text-slate-400 text-sm sm:text-base font-medium mb-6">
            Proactive Monitoring Operating System
          </p>
          <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <svg className="w-4 h-4 text-gcx-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.653 2.065a1 1 0 01.694 0l5 2a1 1 0 01.543 1.33l-2.5 4.5a1 1 0 01-1.52.212L9.5 7.5 6.68 9.117a1 1 0 01-1.52-.212l-2.5-4.5a1 1 0 01.543-1.33l5-2z" />
            </svg>
            <span>Explore solutions</span>
          </div>
        </motion.div>
      </motion.div>

      {/* faint curved line at bottom */}
      <svg
        className="absolute bottom-[18%] left-0 right-0 w-full h-24 pointer-events-none opacity-[0.06]"
        viewBox="0 0 1200 80"
        fill="none"
      >
        <path
          d="M0 40 Q300 0 600 40 T1200 40"
          stroke="url(#lineGold)"
          strokeWidth="1"
        />
        <defs>
          {createElement(
            "linearGradient",
            { id: "lineGold", x1: "0", y1: "0", x2: "1", y2: "0" },
            createElement("stop", { stopColor: "#b8862b" }),
            createElement("stop", { offset: "1", stopColor: "#9a6b20" })
          )}
        </defs>
      </svg>

      {/* skip button shows after a bit */}
      {showSkip && (
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onComplete}
          className="absolute top-6 right-6 z-20 text-slate-500 hover:text-gcx-gold text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:ring-offset-2 focus:ring-offset-gcx-dark rounded px-2 py-1"
        >
          Skip
        </motion.button>
      )}
    </motion.div>
  );
}

