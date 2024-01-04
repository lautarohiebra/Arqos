/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#eab308",

          "primary-content":"#ffffff",

          secondary: "#1c1917",

          accent: "#f3f4f6",

          neutral: "#0f0f0f",

          "base-100": "#f5f5f5",

          info: "#38bdf8",

          success: "#4ade80",

          warning: "#fde047",

          error: "#fb7185",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
