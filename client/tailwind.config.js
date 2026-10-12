/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        "main-foreground": "var(--main-foreground)",
        "secondary-background": "var(--secondary-background)",
        border: "var(--border)",
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      spacing: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
