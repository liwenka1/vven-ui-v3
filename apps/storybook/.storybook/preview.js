import "../src/index.css"
import { withThemeByClassName } from "@storybook/addon-themes"

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark"
    },
    defaultTheme: "light"
  })
]
