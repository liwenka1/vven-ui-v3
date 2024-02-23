import { dirname, join } from "path"

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")))
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("@storybook/addon-docs"),
    "@storybook/addon-themes"
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  typescript: {
    reactDocgen: false
  }
}

export default config
