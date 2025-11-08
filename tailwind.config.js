/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#09090f",
        accent: "#8dc6e1",
        "accent-soft": "#5b9bb7",
        surface: "#111118",
        muted: "#a1a1b5",
        "muted-strong": "#e5f4fb",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "radial-mask": "radial-gradient(circle at 20% 20%, rgba(141, 198, 225, 0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(141, 198, 225, 0.15), transparent 55%)",
        "grain-overlay": "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 400\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23n)\' opacity=\'0.18\'/%3E%3C/svg%3E')",
        "grid-accent": "linear-gradient(90deg, rgba(141,198,225,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(141,198,225,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "120px 120px",
      },
      boxShadow: {
        glow: "0 0 35px rgba(141, 198, 225, 0.35)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.7", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
