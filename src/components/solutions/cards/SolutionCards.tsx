"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    id: "surveillance",
    title: "Intelligent Surveillance",
    description:
      "Unified cameras and sensors with real-time monitoring, analytics, and integration across all your sites.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m13.5 6l2.25-2.25m0 0l2.25 2.25M19.5 9v11.38a2.25 2.25 0 01-1.28 2.05l-8.22 3.22a2.25 2.25 0 01-1.9 0L3.78 20.35A2.25 2.25 0 012.5 18.38V9" />
      </svg>
    ),
    features: ["Multi-site dashboards", "Live & recorded streams", "Sensor fusion"],
  },
  {
    id: "monitoring",
    title: "Monitored Sites",
    description:
      "Centralized visibility and control over all locations. One platform for cameras, sensors, and events.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    features: ["Single pane of glass", "Geo-mapping", "Alerts & escalation"],
  },
  {
    id: "analytics",
    title: "Event Analytics",
    description:
      "Events per 24 hours, trends, and reporting. Turn raw data into actionable insights and compliance reports.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    features: ["24/7 event metrics", "Custom reports", "Export & API"],
  },
  {
    id: "ai-filtering",
    title: "AI False Alarm Filtering",
    description:
      "Reduce noise with AI that filters false alarms. Focus on real threats and improve operator efficiency.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    features: ["Smart filtering", "Fewer false positives", "Configurable rules"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function SolutionCards() {
  return (
    <section
      id="solutions"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* gradient bg and light grid */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gcx-slate/60 via-gcx-slate/40 to-gcx-dark/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(184,134,43,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,134,43,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gcx-gold text-sm font-medium uppercase tracking-widest mb-3">
            Platform capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Solutions built for enterprise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From cameras and sensors to monitored sites and AI-powered filtering. One platform for your entire security operations.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.id}
              variants={item}
              className="group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[0_0_32px_rgba(184,134,43,0.12)]"
            >
              {/* card bg, border glows on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gcx-card/90 border border-white/10 group-hover:border-gcx-gold/30 transition-colors duration-300" />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 40px rgba(184,134,43,0.08), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              />
              {/* left gold accent, shows on hover */}
              <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gcx-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ top: "1rem", bottom: "1rem" }} />
              <div className="relative">
                {/* icon box keeps layout stable when we scale on hover */}
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gcx-gold/10 text-gcx-gold ring-1 ring-white/5 group-hover:bg-gcx-gold/15 group-hover:ring-gcx-gold/20 transition-colors duration-300">
                  <span className="inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110 will-change-transform">
                    {solution.icon}
                  </span>
                </div>
                <span className="text-xs font-medium text-gcx-gold/80 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-gcx-amber/90 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((f) => (
                    <li key={f} className="text-slate-500 text-sm flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gcx-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
