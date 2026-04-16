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
        primary: "#58A6FF",
        accent: "#7C3AED",
        dark: {
          50: "#f8fafc",
          100: "#C9D1D9",
          200: "#8B949E",
          300: "#6E7681",
          400: "#484F58",
          500: "#30363D",
          600: "#21262D",
          700: "#161B22",
          800: "#0D1117",
          900: "#010409",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        typing: "typing 3.5s steps(40, end), blink 0.75s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(88,166,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(88,166,255,0.6)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
export default config;
