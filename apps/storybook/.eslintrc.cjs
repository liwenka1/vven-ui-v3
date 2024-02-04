/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@vven-ui/eslint-config/storybook.js"],
  rules: {
    "react/function-component-definition": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
