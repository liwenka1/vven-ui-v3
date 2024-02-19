import * as React from "react"

import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@vven-ui/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <AvatarPrimitive.Root className={cn("inline-flex items-center justify-center w-10 h-10 rounded-full", className)} ref={ref} {...props} />
})
Avatar.displayName = AvatarPrimitive.Root.displayName

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

export { Avatar, AvatarImage, AvatarFallback }
