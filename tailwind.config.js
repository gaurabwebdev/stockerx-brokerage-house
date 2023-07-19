/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom right, #1A2C79 30%, rgba(26, 44,121, 0.18) 100%)",
      },
    },
  },
  plugins: [],
};
