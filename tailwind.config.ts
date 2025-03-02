import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#f4aa3a",
          secondary: "#272136",
          "base-100": "#ffffff",
          "base-300": "#d4d4d4",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};

export default config;
