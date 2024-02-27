import type { Meta } from "@storybook/react"
import { HeartIcon } from "@radix-ui/react-icons"
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
    ...defaultProps
  }
}

export const WithText = {
  args: {
    ...defaultProps,
    name: "javk"
  }
}

export const WithImage = {
  args: {
    ...defaultProps,
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    name: "javk"
  }
}

export const Bordered = {
  args: {
    ...defaultProps,
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    bordered: true
  }
}

export const Disabled = {
  args: {
    ...defaultProps,
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    bordered: true,
    disabled: true
  }
}

export const ShowFallback = {
  args: {
    ...defaultProps,
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    name: "javk",
    showFallback: true
  }
}

export const ShowFallbackCompoent = {
  args: {
    ...defaultProps,
    src: "https://avatars.githubusercontent.com/u/92351553?v=4",
    name: "javk",
    showFallback: true,
    fallback: <HeartIcon />
  }
}
