import type { Meta } from "@storybook/react"
import { Avatar } from "@vven-ui/react"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    radius: {
      control: { type: "select" },
      options: ["full", "lg", "md", "sm", "none"]
    }
  }
}

export default meta

const defaultProps = {
  size: "medium",
  radius: "full"
}

export const Default = {
  args: {
    ...defaultProps,
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    name: "javk"
  }
}
