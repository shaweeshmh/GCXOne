"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
};

export function LeadCaptureForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!firstName.trim()) next.firstName = "First name is required";
    if (!lastName.trim()) next.lastName = "Last name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email";
    if (!company.trim()) next.company = "Company name is required";
    if (message.trim().length > 0 && message.trim().length < 10)
      next.message = "Message must be at least 10 characters if provided";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setErrors({});
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-gcx-dark/80 border text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-gcx-gold/50 focus:border-gcx-gold/40";
  const inputError = "border-red-500/80 focus:ring-red-500/50 focus:border-red-500/60";
  const inputOk = "border-white/10 hover:border-white/20";

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gcx-dark via-gcx-slate/60 to-gcx-dark" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(184,134,43,0.06),transparent_70%)]" aria-hidden />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gcx-gold text-sm font-medium uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Get in touch
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Request a demo or custom quote. Our team will respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-2xl border border-white/10 bg-gcx-card/90 p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/20"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" aria-hidden />
          {submitted ? (
            <div className="relative text-center py-10">
              <div className="w-16 h-16 rounded-full bg-gcx-gold/20 flex items-center justify-center mx-auto mb-5 ring-2 ring-gcx-gold/30">
                <svg className="w-8 h-8 text-gcx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank you</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                We&apos;ve received your request and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 text-gcx-gold hover:text-gcx-amber font-medium text-sm transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`${inputBase} ${errors.firstName ? inputError : inputOk}`}
                    placeholder="Jane"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1.5 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`${inputBase} ${errors.lastName ? inputError : inputOk}`}
                    placeholder="Doe"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Work email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${inputBase} ${errors.email ? inputError : inputOk}`}
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company <span className="text-red-400">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`${inputBase} ${errors.company ? inputError : inputOk}`}
                  placeholder="Acme Inc."
                  aria-invalid={!!errors.company}
                />
                {errors.company && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.company}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`${inputBase} resize-none ${errors.message ? inputError : inputOk}`}
                  placeholder="Tell us about your use case or questions..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-4 gcx-btn-gradient text-white font-semibold rounded-xl hover:opacity-95 transition-opacity shadow-gcx-button focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:ring-offset-2 focus:ring-offset-gcx-dark"
              >
                Request demo
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
