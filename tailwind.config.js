// tailwind.config.js
module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
