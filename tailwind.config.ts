import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6B3A4D",
          deep: "#523040",
          light: "#8B5068",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#DDC28A",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          marble: "#F5F0E8",
          warm: "#EDE6DC",
        },
        ink: {
          DEFAULT: "#3D2A32",
          muted: "#6B5560",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft:
          "0 4px 28px -6px rgba(61, 42, 50, 0.12), 0 12px 40px -12px rgba(107, 58, 77, 0.14)",
        card: "0 4px 24px -4px rgba(61, 42, 50, 0.08), 0 2px 12px -2px rgba(201, 169, 110, 0.12)",
        lift: "0 16px 48px -12px rgba(61, 42, 50, 0.18), 0 8px 24px -8px rgba(201, 169, 110, 0.2)",
        glow: "0 0 60px -12px rgba(201, 169, 110, 0.45), 0 24px 48px -20px rgba(107, 58, 77, 0.25)",
        "gold-glow":
          "0 0 0 1px rgba(201, 169, 110, 0.35), 0 20px 50px -15px rgba(201, 169, 110, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "luxury-shimmer": "luxuryShimmer 1.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        luxuryShimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
