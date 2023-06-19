/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "DFCCCC",
        "gray-500": "#000723",
        "primary-100": "#C3E7EE",
        "primary-300": "#74C7D8",
        "primary-500": "#1E5D6A",
        "secondary-400": "#FFCD58",
        "secondary-500": "#E8836E",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        eaglelake: ["Eagle Lake", "sans-serif"],
      },
      content: {
        havan: "url(./assets/Havan.png)",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1280px",
    }
  },
  plugins: [],
}

