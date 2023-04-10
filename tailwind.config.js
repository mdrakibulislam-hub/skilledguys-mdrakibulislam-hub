/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7E90FE",

          "secondary": "#F9F9FF",

          "accent": "#474747",

          "neutral": "#1A1919",

          "base-100": "#FFFFFF",

          "info": "#8EB0F1",

          "success": "#757575",

          "warning": "#F6BE23",

          "error": "#EC3C65",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

