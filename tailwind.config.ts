import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A3BF5",
        accent: "#D4F53B",
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};

export default config;
