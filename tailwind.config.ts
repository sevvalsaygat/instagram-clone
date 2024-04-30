import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#c7c7c7",
          200: "#f2f2f2",
          300: "#dbdbdb",
          400: "#737373",
        },
        yellow: {
          300: "#ffc200",
        },
        rose: {
          300: "#ff3938",
        },
        fuchsia: {
          600: "#d300c5",
        },
        sky: {
          500: "#0095f6",
        },
        blue: {
          950: "#00376b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
