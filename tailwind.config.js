/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        accent: "#A78BFA",
        accentGlow: "#7C3AED",
        cosmos: {
          bg: "#04040F",
          surface: "#0A0A1F",
          card: "#0F0F2A",
          border: "#1E1B4B",
          muted: "#312E81",
          text: "#E0E7FF",
          sub: "#A5B4FC",
        },
        light: {
          bg: "#F5F3FF",
          surface: "#EDE9FE",
          card: "#FFFFFF",
          border: "#C4B5FD",
          text: "#1E1B4B",
          sub: "#4C1D95",
        },
      },
    },
  },
  plugins: [],
};