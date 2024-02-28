/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/*/src/**/*.tsx",
    "../../packages/components/*/src/**/*.ts"
  ],
  darkMode: ["class"],
  theme: {
    extend: {}
  },
  plugins: []
}
