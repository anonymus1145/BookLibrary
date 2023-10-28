/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      // Grid Style //
      'layout': '200px 100px minmax(600px, 1fr) 50px',
    },
  },
  plugins: [],
}

