module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
        vazir: ["vazir"],
        vazirl: ["vazir-light"],
      },
      colors: {
        primary: "#8b5cf6",
        secondary: "#06b6d4",
        darkbg: "#0b1020",
        cardbg: "#11172a",
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
        slideIn: "slideIn 0.8s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.7 },
          "50%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(24px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
