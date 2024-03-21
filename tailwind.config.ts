import type { Config } from "tailwindcss";
import  { fontFamily }  from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: {
          light: '#3A5700',
          dark: '#76AC00'
        }
      },
      fontFamily: {
        sans: ['var(----font-rubik)', 'var(----font-elMessiri)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
