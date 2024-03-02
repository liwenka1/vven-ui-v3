import * as React from "react"

import { PersonIcon } from "@radix-ui/react-icons"

import { cn, safeText } from "@vven-ui/utils"
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
    icon = <PersonIcon height="80%" width="80%" />,
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

    return (
      <FallbackComponent className={cn(AvatarFallbackVariants({ size }))}>
        {name ? safeText(name) : icon}
      </FallbackComponent>
    )
  }, [showFallback, src, fallbackCompoent, size, name, icon, FallbackComponent])

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
      {!showFallback && src && <ImageComponent className={cn(AvatarImageVariants({ radius }))} src={src} />}
      {fallback}
    </Component>
  )
})

Avatar.displayName = "Avatar"

export { Avatar }
