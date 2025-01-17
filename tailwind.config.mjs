/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary50:"#1fa45b88",
        primary25:"#1fa45b44",
        primary:"#1fa45b",
        "primary-light":"#afe4ab",
        "primary-lighter":"#d9f2d9",
        "primary-dark":"#1f642b",
        secondary:"#f7f7f7",
        "dark-bg":'#122337',
      },
    },
  },
  plugins: [],
};

