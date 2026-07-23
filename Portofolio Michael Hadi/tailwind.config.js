/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#64748b",
        dark: "#020617",
        property: "#14b8a6",
        cyan: "#22d3ee",
      },
      screen: {
        "2xl": "132px",
      },
    },
  },
  plugins: [],
};
