import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center px-2 py-1 transition-colors disabled:pointer-events-none disabled:text-gray-400",
  {
    variants: {
      variant: {
        text: "text-blue-500 hover:bg-blue-50",
        contained: "bg-blue-500 text-white border-transparent hover:bg-blue-600 disabled:bg-gray-200",
        outlined: "text-blue-500 hover:bg-blue-50 ring-1 ring-offset-0 disabled:ring-gray-400"
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

export interface UseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

export const useButton = (props: UseButtonProps) => {
  const {
    className,
    variant,
    size,
    radius,
    asChild = false,
    loading = false,
    startContent,
    endContent,
    ...otherprops
  } = props

  if (loading) {
    props.disabled = true
  }

  const Comp = asChild ? Slot : "button"

  return {
    Comp,
    className,
    variant,
    size,
    radius,
    asChild,
    loading,
    startContent,
    endContent,
    ...otherprops
  }
}
