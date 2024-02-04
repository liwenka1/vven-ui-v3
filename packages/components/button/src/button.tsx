import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@vven-ui/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600"
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "medium"
  }
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ className, variant, size }))} ref={ref} {...props} />
  }
)

Button.displayName = "Button"
export default Button
