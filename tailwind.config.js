/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c63ff",
        secondary: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
