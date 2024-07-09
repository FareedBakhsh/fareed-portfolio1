import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode :"class",
  theme: {

    primaryColor: '#00B8FF',
    secondaryColor: '#001F2B',
    shadesOfBlue: '#00719c',
    mainGray: '#e5e5e5',
    extend: {
      
    },
  },
  plugins: [require("@tailwindcss/typography") , require("@tailwindcss/typography")],
};
export default config;
