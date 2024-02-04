/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/*/src/**/*.tsx"
  ],
  darkMode: ["class"],
  theme: {
    extend: {}
  },
  plugins: []
}
