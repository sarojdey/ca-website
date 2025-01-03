/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bruno: "var(--font-bruno)",
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [],
};
