import type { Meta } from "@storybook/react"
import { HeartIcon } from "@radix-ui/react-icons"
import { Button } from "@vven-ui/react"

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"]
    },
    variant: {
      control: { type: "select" },
      options: ["text", "contained", "outlined"]
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    radius: {
      control: { type: "select" },
      options: ["full", "lg", "md", "sm", "none"]
    },
    disabled: {
      type: "boolean"
    },
    loading: {
      type: "boolean"
    }
  }
}

export default meta

const defaultProps = {
  type: "button",
  variant: "contained",
  size: "medium",
  radius: "md",
  disabled: false,
  loading: false
}

export const Default = {
  args: {
    children: "Button",
    ...defaultProps
  }
}

export const WithStartContent = {
  args: {
    children: "Button",
    startContent: <HeartIcon />,
    ...defaultProps
  }
}

export const WithEndContent = {
  args: {
    children: "Button",
    endContent: <HeartIcon />,
    ...defaultProps
  }
}

export const AsChild = {
  args: {
    children: <span>这个是AsChild</span>,
    asChild: true,
    ...defaultProps
  }
}
