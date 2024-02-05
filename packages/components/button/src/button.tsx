import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { ReloadIcon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@vven-ui/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

const buttonVariants = cva(
  "inline-flex items-center justify-center px-2 py-1 transition-colors disabled:pointer-events-none disabled:text-gray-400",
  {
    variants: {
      variant: {
        text: "text-blue-500 hover:bg-blue-50",
        contained: "bg-blue-500 text-white border-transparent hover:bg-blue-600 disabled:bg-gray-200",
        outlined: "text-blue-500 hover:bg-blue-50 border border-blue-500 disabled:border-gray-400"
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg"
      },
      radius: {
        full: "rounded-full",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        none: "rounded-none"
      }
    },
    defaultVariants: {
      variant: "contained",
      size: "medium"
    }
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, loading = false, startContent, endContent, ...props }, ref) => {
    if (loading) {
      props.disabled = true
    }
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ className, variant, size, radius }))} ref={ref} {...props}>
        {loading && <ReloadIcon className="animate-spin mr-1" />}
        {startContent}
        {props.children}
        {endContent}
      </Comp>
    )
  }
)

Button.displayName = "Button"
export default Button
