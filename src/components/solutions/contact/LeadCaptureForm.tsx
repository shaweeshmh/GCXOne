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

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gcx-slate/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in touch
          </h2>
          <p className="text-slate-400">
            Request a demo or custom quote. Our team will respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gcx-card/80 border border-slate-700/50 rounded-xl p-6 sm:p-8 shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-gcx-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gcx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank you</h3>
              <p className="text-slate-400">
                We&apos;ve received your request and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-gcx-gold hover:text-gcx-amber font-medium text-sm"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1.5">
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg bg-gcx-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:border-transparent ${
                      errors.firstName ? "border-red-500" : "border-slate-600"
                    }`}
                    placeholder="Jane"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg bg-gcx-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:border-transparent ${
                      errors.lastName ? "border-red-500" : "border-slate-600"
                    }`}
                    placeholder="Doe"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Work email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-gcx-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-slate-600"
                  }`}
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Company <span className="text-red-400">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-gcx-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:border-transparent ${
                    errors.company ? "border-red-500" : "border-slate-600"
                  }`}
                  placeholder="Acme Inc."
                  aria-invalid={!!errors.company}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-2.5 rounded-lg bg-gcx-dark border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:border-transparent resize-none ${
                    errors.message ? "border-red-500" : "border-slate-600"
                  }`}
                  placeholder="Tell us about your use case or questions..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3.5 gcx-btn-gradient text-white font-semibold rounded-lg hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-gcx-gold focus:ring-offset-2 focus:ring-offset-gcx-dark"
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
