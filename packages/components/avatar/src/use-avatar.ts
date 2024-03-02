import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

export const AvatarRootVariants = cva("inline-flex items-center justify-center bg-blue-50", {
  variants: {
    radius: {
      full: "rounded-full",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      none: "rounded-none"
    },
    size: {
      small: "w-10 h-10",
      medium: "w-12 h-12",
      large: "w-14 h-14"
    }
  },
  defaultVariants: {
    radius: "full",
    size: "medium"
  }
})

export const AvatarImageVariants = cva("h-full w-full", {
  variants: {
    radius: {
      full: "rounded-full",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      none: "rounded-none"
    }
  },
  defaultVariants: {
    radius: "full"
  }
})

export const AvatarFallbackVariants = cva("h-full w-full flex items-center justify-center", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg"
    }
  },
  defaultVariants: {
    size: "medium"
  }
})

export interface UseAvatarProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof AvatarRootVariants> {
  src?: string
  name?: string
  icon?: React.ReactNode
  disabled?: boolean
  bordered?: boolean
  showFallback?: boolean
  fallback?: React.ReactNode
}

export const useAvatar = (props: UseAvatarProps) => {
  const {
    className,
    radius,
    size,
    src,
    name,
    icon,
    disabled = false,
    bordered = false,
    showFallback = false,
    fallback,
    ...otherProps
  } = props

  const Component = AvatarPrimitive.Root

  const ImageComponent = AvatarPrimitive.Image

  const FallbackComponent = AvatarPrimitive.Fallback

  return {
    Component,
    ImageComponent,
    FallbackComponent,
    className,
    radius,
    size,
    src,
    name,
    icon,
    disabled,
    bordered,
    showFallback,
    fallback,
    ...otherProps
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
