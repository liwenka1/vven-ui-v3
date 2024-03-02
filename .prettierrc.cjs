module.exports = {
  $schema: "https://json.schemastore.org/prettierrc.json",
  plugins: ["prettier-plugin-tailwindcss"],
	tailwindConfig: './apps/storybook/tailwind.config.js',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  semi: false,
  trailingComma: "none",
  bracketSpacing: true,
  endOfLine: "lf"
}
