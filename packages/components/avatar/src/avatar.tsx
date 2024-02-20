import * as React from "react"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@vven-ui/utils"

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      className={cn("inline-flex items-center justify-center w-10 h-10 rounded-full", className)}
      ref={ref}
      {...props}
    />
  )
})
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  return <AvatarPrimitive.Image className={cn("h-full w-full rounded-full", className)} ref={ref} {...props} />
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  return <AvatarPrimitive.Fallback className={cn("h-full w-full", className)} ref={ref} {...props} />
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export interface AvatarProps extends VariantProps<typeof AvatarVariants> {
  src: string
  name: string
}

const AvatarVariants = cva()

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(({ src, name }) => {
  return (
    <AvatarRoot>
      <AvatarImage src={src} />
      <AvatarFallback>{name}</AvatarFallback>
    </AvatarRoot>
  )
})
Avatar.displayName = "Avatar"

export { Avatar, AvatarVariants }
