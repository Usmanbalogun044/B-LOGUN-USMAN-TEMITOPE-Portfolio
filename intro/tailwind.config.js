/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272627",
        secondary: "#00B462",
        grey: "#c8c8d1",
      },
    },
  },
  plugins: [],
};
