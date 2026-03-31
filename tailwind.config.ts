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
        rose: {
          dust: "#C9A9A6",
          blush: "#E8D5D2",
          deep: "#9B6B6B",
        },
        cream: {
          DEFAULT: "#FAF7F4",
          warm: "#F5EDE8",
          deep: "#EDE4DC",
        },
        ink: {
          DEFAULT: "#3D3532",
          muted: "#6B635F",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(61, 53, 50, 0.08), 0 8px 32px -8px rgba(155, 107, 107, 0.12)",
        card: "0 2px 16px -2px rgba(61, 53, 50, 0.06), 0 4px 24px -4px rgba(155, 107, 107, 0.08)",
        lift: "0 12px 40px -12px rgba(61, 53, 50, 0.15), 0 4px 16px -4px rgba(155, 107, 107, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};

export default config;
