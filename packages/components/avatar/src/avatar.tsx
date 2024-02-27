import * as React from "react"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@vven-ui/utils"

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <AvatarPrimitive.Root className={className} ref={ref} {...props} />
})
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

const AvatarImageVariants = cva("h-full w-full", {
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

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & VariantProps<typeof AvatarImageVariants>
>(({ className, radius, ...props }, ref) => {
  return <AvatarPrimitive.Image className={cn(AvatarImageVariants({ className, radius }))} ref={ref} {...props} />
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallbackVariants = cva("h-full w-full flex items-center justify-center", {
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

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & VariantProps<typeof AvatarFallbackVariants>
>(({ className, size, ...props }, ref) => {
  return <AvatarPrimitive.Fallback className={cn(AvatarFallbackVariants({ className, size }))} ref={ref} {...props} />
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof AvatarVariants> {
  src?: string
  name?: string
  disabled?: boolean
  bordered?: boolean
  showFallback?: boolean
  fallback?: React.ReactNode
}

const AvatarVariants = cva("inline-flex items-center justify-center bg-blue-50", {
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

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      radius,
      size,
      src,
      name,
      disabled = false,
      bordered = false,
      showFallback = false,
      fallback: fallbackCompoent,
      ...props
    },
    ref
  ) => {
    const fallback = React.useMemo(() => {
      if (!showFallback && src) return null

      if (fallbackCompoent) {
        return <AvatarFallback asChild>{fallbackCompoent}</AvatarFallback>
      }

      return <AvatarFallback size={size}>{name}</AvatarFallback>
    }, [showFallback, src, fallbackCompoent, size, name])

    const image = React.useMemo(() => {
      if (!showFallback && src) return <AvatarImage radius={radius} src={src} />

      return null
    }, [showFallback, src, radius])

    return (
      <AvatarRoot
        className={cn(
          AvatarVariants({ className, radius, size }),
          disabled && "opacity-50",
          bordered && "ring-2 ring-offset-2"
        )}
        ref={ref}
        {...props}
      >
        {image}
        {fallback}
      </AvatarRoot>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar, AvatarVariants }
