import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient":
          "linear-gradient(180deg,rgba(226,232,255,0) 0%,rgba(226,232,255,.12) 100%)",
        "btn-gradient":
          "linear-gradient(96.34deg,color(display-p3 .5725490196 .4156862745 1/1) 0%,color(display-p3 1 .4666666667 .6901960784/1) 50%,color(display-p3 1 .7019607843 .4039215686/1) 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
