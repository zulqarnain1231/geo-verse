import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#188B22",
        },
        black: {
          main: "#000",
          off: "#585858",
        },
        white: {
          main: "#fff",
          off: "#CBCBCB",
        },
      },
      boxShadow: {
        main: "0px 4px 50px 0px rgba(14, 238, 50, 0.36)",
        secondary: " 0px 4px 45px 0px #004F07",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
