/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        990: "990px",
      },
      minHeight: {
        "150vh": "150vh",
        "300vh": "300vh",
      },
      maxWidth: {
        600: "600px",
      },
      backgroundColor: {
        onHover: "rgb(231,233,234,0.1)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};
