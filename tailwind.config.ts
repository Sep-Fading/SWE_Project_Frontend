import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans'],
      },
      backgroundImage: {
        'fdm-gradient': 'linear-gradient(40deg, rgba(21, 65, 200, 1) 0%, rgba(136, 32, 187, 1) 100%)',
      },
      colors: {
        blue: "#1daded",
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
export default config;
