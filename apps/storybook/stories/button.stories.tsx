import type { Meta } from "@storybook/react"
import { Button } from "@vven-ui/react"

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"]
    },
    variant: {
      control: { type: "radio" },
      options: ["text", "contained", "outlined"]
    },
    size: {
      control: { type: "radio" },
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
		startContent: <span>startContent</span>,
    ...defaultProps
  }
}

export const WithEndContent= {
  args: {
    children: "Button",
		endContent: <span>endContent</span>,
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
