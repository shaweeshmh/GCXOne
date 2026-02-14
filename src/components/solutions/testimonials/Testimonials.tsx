"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "GCX One gave us a single platform for all our sites. We cut false alarms by over 60% and our operators can finally focus on what matters.",
    author: "Sarah M.",
    role: "Head of Security, European Retail Group",
    avatar: "SM",
  },
  {
    id: 2,
    quote:
      "The event analytics and reporting saved us countless hours. We now have clear metrics for compliance and board reporting.",
    author: "James K.",
    role: "Operations Director, Logistics",
    avatar: "JK",
  },
  {
    id: 3,
    quote:
      "Implementation was smooth and support was responsive. We're rolling out to 50+ sites and the scalability is there.",
    author: "Elena V.",
    role: "CTO, Property Management",
    avatar: "EV",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  const t = testimonials[index];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* base gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gcx-slate/80 via-gcx-dark to-gcx-slate/60"
        aria-hidden
      />
      {/* big blur orbs for depth */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gcx-gold/15 blur-[120px] -translate-y-1/2 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full bg-gcx-amber/10 blur-[100px] translate-y-1/2 pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 right-0 w-[280px] h-[280px] rounded-full bg-slate-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
      {/* diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 60px,
            rgba(184,134,43,0.15) 60px,
            rgba(184,134,43,0.15) 61px
          )`,
        }}
        aria-hidden
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,134,43,0.7) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      {/* darken edges so card pops */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 45%, transparent 0%, transparent 40%, rgba(12,12,15,0.4) 100%)`,
        }}
        aria-hidden
      />
      {/* bit of light at top */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-gcx-gold/10 to-transparent pointer-events-none" aria-hidden />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gcx-gold text-sm font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Trusted by security leaders
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            See why companies from 10+ countries rely on GCX One for enterprise surveillance and monitoring.
          </p>
        </motion.div>

        <div className="relative">
          {/* slide area, overflow hidden for animation */}
          <div className="relative min-h-[280px] sm:min-h-[260px] flex items-stretch justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={t.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col bg-gcx-card/90 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl"
              >
                <span className="text-5xl sm:text-6xl text-gcx-gold/30 font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed -mt-6 flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gcx-gold/20 flex items-center justify-center text-gcx-gold font-semibold text-sm shrink-0 ring-2 ring-gcx-gold/30">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <cite className="not-italic font-semibold text-white block">
                      {t.author}
                    </cite>
                    <p className="text-slate-500 text-sm truncate">{t.role}</p>
                  </div>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* prev/next buttons */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/15 bg-white/[0.03] text-slate-400 hover:border-gcx-gold/40 hover:bg-gcx-gold/10 hover:text-gcx-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gcx-gold/50 focus:ring-offset-2 focus:ring-offset-gcx-dark"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-gcx-gold"
                      : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/15 bg-white/[0.03] text-slate-400 hover:border-gcx-gold/40 hover:bg-gcx-gold/10 hover:text-gcx-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gcx-gold/50 focus:ring-offset-2 focus:ring-offset-gcx-dark"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
