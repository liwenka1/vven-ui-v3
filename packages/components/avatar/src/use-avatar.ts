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

const AvatarRoot = AvatarPrimitive.Root

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

const AvatarImage = AvatarPrimitive.Image

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

const AvatarFallback = AvatarPrimitive.Fallback

export interface UseAvatarProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof AvatarRootVariants> {
  src?: string
  name?: string
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
    disabled = false,
    bordered = false,
    showFallback = false,
    fallback,
    ...otherProps
  } = props

  const Component = AvatarRoot

  const ImageComponent = AvatarImage

  const FallbackComponent = AvatarFallback

  return {
    Component,
    ImageComponent,
    FallbackComponent,
    className,
    radius,
    size,
    src,
    name,
    disabled,
    bordered,
    showFallback,
    fallback,
    ...otherProps
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
