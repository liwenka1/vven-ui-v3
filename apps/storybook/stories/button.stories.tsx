import type { Meta } from "@storybook/react"
import { Button, type ButtonProps } from "@vven-ui/react"
import { useState } from "react"

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"]
    },
    variant: {
      control: { type: "radio" },
      options: ["primary"]
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"]
    }
  }
}

export default meta

const defaultProps = {
  children: <span>Button</span>,
  type: "button",
  variant: "primary",
  size: "medium"
}

const StateTemplate = (args: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlePress = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <Button {...args} aria-label="Open" aria-pressed={isOpen} onClick={handlePress}>
      {isOpen ? "Close" : "Open"}
    </Button>
  )
}

export const Default = {
  args: {
    ...defaultProps
  }
}

export const AsChild = {
  args: {
    asChild: true,
    ...defaultProps
  }
}

export const WithState = {
  render: StateTemplate,

  args: {
    ...defaultProps
  }
}
