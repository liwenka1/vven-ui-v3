import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(["font-semibold", "border", "rounded"], {
  variants: {
    variant: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"]
    },
    size: {
      small: ["text-small"]
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "small"
  }
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "slot" : "button"
    return <Comp className={className} ref={ref} {...props} />
  }
)

Button.displayName = "Button"
export default Button
