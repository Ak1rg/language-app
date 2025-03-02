import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        grayBg:'#1E1E1E',
        lightGrayBg:'#313131',
      },
    },
  },
  plugins: [],
} satisfies Config;
