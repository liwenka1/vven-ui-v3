import * as React from "react"

import { cn } from "@vven-ui/utils"
import {
  AvatarFallbackVariants,
  AvatarImageVariants,
  AvatarRootVariants,
  useAvatar,
  type UseAvatarProps
} from "./use-avatar"

export type AvatarProps = UseAvatarProps

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
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
    fallback: fallbackCompoent,
    ...otherProps
  } = useAvatar(props)

  const fallback = React.useMemo(() => {
    if (!showFallback && src) return null

    if (fallbackCompoent) {
      return <FallbackComponent asChild>{fallbackCompoent}</FallbackComponent>
    }

    return <FallbackComponent className={cn(AvatarFallbackVariants({ className, size }))}>{name}</FallbackComponent>
  }, [showFallback, src, fallbackCompoent, size, name, className, FallbackComponent])

  const image = React.useMemo(() => {
    if (!showFallback && src)
      return <ImageComponent className={cn(AvatarImageVariants({ className, radius }))} src={src} />

    return null
  }, [showFallback, src, radius, className, ImageComponent])

  return (
    <Component
      className={cn(
        AvatarRootVariants({ className, radius, size }),
        disabled && "opacity-50",
        bordered && "ring-2 ring-offset-2"
      )}
      ref={ref}
      {...otherProps}
    >
      {image}
      {fallback}
    </Component>
  )
})

Avatar.displayName = "Avatar"

export { Avatar }
