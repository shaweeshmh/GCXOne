"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type PlanId = "starter" | "professional" | "enterprise";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "For small sites and teams",
    priceMonthly: "$99",
    priceAnnual: "$990",
    periodMonthly: "per month",
    periodAnnual: "per year",
    features: [
      "Up to 50 cameras/sensors",
      "Up to 5 monitored sites",
      "Events per 24h reporting",
      "Email support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing operations",
    priceMonthly: "$249",
    priceAnnual: "$2,490",
    periodMonthly: "per month",
    periodAnnual: "per year",
    features: [
      "Up to 200 cameras/sensors",
      "Up to 20 monitored sites",
      "Advanced analytics & API",
      "False alarm filtering",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale deployment",
    priceMonthly: "$999",
    priceAnnual: "Custom",
    periodMonthly: "per month",
    periodAnnual: "Contact us",
    features: [
      "Unlimited cameras/sensors",
      "Unlimited sites",
      "Dedicated instance",
      "SLA & 24/7 support",
      "Custom integrations",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const comparisonRows = [
  { feature: "Cameras & sensors", starter: "50", professional: "200", enterprise: "Unlimited" },
  { feature: "Monitored sites", starter: "5", professional: "20", enterprise: "Unlimited" },
  { feature: "Events per 24 hours", starter: "✓", professional: "✓", enterprise: "✓" },
  { feature: "False alarm filtering", starter: "-", professional: "✓", enterprise: "✓" },
  { feature: "API & integrations", starter: "-", professional: "✓", enterprise: "✓" },
  { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 dedicated" },
];

export function PricingTable() {
  const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual");
  const [focusedPlan, setFocusedPlan] = useState<PlanId>("professional");

  const isFocused = (plan: PlanId) => focusedPlan === plan;

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gcx-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Transparent pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Scale from a single site to global deployment. All plans include core platform features.
          </p>
          <div className="inline-flex items-center gap-3 p-1.5 bg-gcx-card rounded-lg">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "gcx-btn-gradient text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "annual"
                  ? "gcx-btn-gradient text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annual
            </button>
            <span className="text-xs text-gcx-gold font-medium hidden sm:inline">
              Save with annual
            </span>
          </div>
        </motion.div>

        {/* plan cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`relative rounded-xl border p-6 flex flex-col ${
                plan.highlighted
                  ? "border-gcx-gold/50 bg-gcx-card/80 shadow-gcx-button"
                  : "border-white/10 bg-gcx-card/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 gcx-btn-gradient text-white text-xs font-semibold rounded-full">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{plan.description}</p>
              <div className="mt-5 mb-6">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className={`text-2xl sm:text-3xl font-bold tracking-tight ${plan.highlighted ? "bg-gcx-gradient-gold bg-clip-text text-transparent" : "text-white"}`}>
                    {billingPeriod === "annual" ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">
                    {billingPeriod === "annual" ? plan.periodAnnual : plan.periodMonthly}
                  </span>
                </div>
                {billingPeriod === "annual" && plan.priceAnnual !== "Custom" && (
                  <p className="text-gcx-gold/90 text-xs font-medium mt-1.5">
                    Save when you pay yearly
                  </p>
                )}
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="text-gcx-gold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block text-center py-3 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? "gcx-btn-gradient text-white font-semibold hover:opacity-95 shadow-gcx-button"
                    : "group relative inline-flex items-center justify-center"
                }`}
              >
                {plan.highlighted ? null : (
                  <>
                    <span className="absolute inset-0 rounded-lg bg-gcx-gradient-border" />
                    <span className="absolute inset-[1px] rounded-[7px] bg-gcx-card" />
                  </>
                )}
                <span className={plan.highlighted ? "" : "relative text-slate-300 group-hover:text-gcx-amber"}>
                  {plan.cta}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* comparison table: click a plan to highlight that column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-xl border border-white/10 bg-gcx-card/40"
        >
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="p-4 text-slate-400 font-medium w-[200px]">Feature</th>
                {(["starter", "professional", "enterprise"] as const).map((plan) => (
                  <th
                    key={plan}
                    scope="col"
                    className={`p-4 text-center transition-colors cursor-pointer select-none min-w-[120px] border-b-2 -mb-px ${
                      isFocused(plan)
                        ? "border-gcx-gold text-gcx-gold"
                        : "border-transparent text-slate-400 hover:text-slate-300"
                    }`}
                    onClick={() => setFocusedPlan(plan)}
                  >
                    <span className="font-medium">
                      {plan.charAt(0).toUpperCase() + plan.slice(1)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-slate-700/30 transition-colors duration-150 ${
                    i % 2 === 0 ? "bg-slate-900/20" : ""
                  } hover:bg-slate-800/20`}
                >
                  <td className="p-4 text-slate-300 font-medium">{row.feature}</td>
                  <td
                    className={`p-4 text-center transition-colors duration-200 ${
                      isFocused("starter")
                        ? "bg-white/[0.04] text-slate-200"
                        : "text-slate-400"
                    }`}
                  >
                    {row.starter}
                  </td>
                  <td
                    className={`p-4 text-center transition-colors duration-200 ${
                      isFocused("professional")
                        ? "bg-white/[0.04] text-slate-200"
                        : "text-slate-400"
                    }`}
                  >
                    {row.professional}
                  </td>
                  <td
                    className={`p-4 text-center transition-colors duration-200 ${
                      isFocused("enterprise")
                        ? "bg-white/[0.04] text-slate-200"
                        : "text-slate-400"
                    }`}
                  >
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
