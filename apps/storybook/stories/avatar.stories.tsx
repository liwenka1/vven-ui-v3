import type { Meta } from "@storybook/react"
import { Avatar } from "@vven-ui/react"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"]
    },
    radius: {
      control: { type: "select" },
      options: ["full", "lg", "md", "sm", "none"]
    }
  }
}

export default meta

// const Template = () => <Avatar />

export const Default = {
  args: {
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    name: "javk",
    radius: "full"
  }
}
