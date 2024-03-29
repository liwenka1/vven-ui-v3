/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@vven-ui/eslint-config/react.js"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": "off",
    "react/jsx-no-leaked-render": "off"
  }
}
