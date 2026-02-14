import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gcx-dark": "#0c0c0f",
        "gcx-slate": "#141419",
        "gcx-gold": "#b8862b",
        "gcx-amber": "#c99432",
        "gcx-orange": "#9a6b20",
        "gcx-accent": "#c99432",
        "gcx-muted": "#64748b",
        "gcx-card": "#1a1a1f",
      },
      backgroundImage: {
        "gcx-gradient-gold":
          "linear-gradient(135deg, #8b5e18 0%, #9a6b20 25%, #b8862b 50%, #a67c28 75%, #8b5e18 100%)",
        "gcx-gradient-gold-subtle": "linear-gradient(135deg, rgba(184,134,43,0.12) 0%, rgba(154,107,32,0.06) 100%)",
        "gcx-gradient-border":
          "linear-gradient(135deg, #8b5e18, #9a6b20, #b8862b, #a67c28, #8b5e18)",
      },
      boxShadow: {
        "gcx-button": "0 0 18px rgba(184,134,43,0.4), 0 4px 12px rgba(154,107,32,0.2), 0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
        "gcx-glow": "0 0 20px rgba(184,134,43,0.25)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
