/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: {
          background: "#000000",
          blackFill: "#131315",
          purple: "#4B3DE3",
          yellow: "#F7D848",
          grey: "#DFE0DB",
          orange: "#F75D48",
          text: "#8A8A93",
        },
      },
    },
  },
  plugins: [],
};
