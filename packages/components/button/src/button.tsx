import * as React from "react"

import { ReloadIcon } from "@radix-ui/react-icons"

import { cn } from "@vven-ui/utils"
import { useButton, buttonVariants, type UseButtonProps } from "./use-button"

export type ButtonProps = UseButtonProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    Component,
    SlottableComponent,
    className,
    variant,
    size,
    radius,
    asChild,
    loading,
    iconOnly,
    spinner = <ReloadIcon className="animate-spin mr-1" />,
    spinnerPlacement,
    startContent,
    endContent,
    children,
    ...otherprops
  } = useButton(props)

  return (
    <Component className={cn(buttonVariants({ className, variant, size, radius }))} ref={ref} {...otherprops}>
      {startContent}
      {loading && spinnerPlacement === "start" && spinner}
      {asChild && SlottableComponent}
      {asChild || (loading && iconOnly) ? null : children}
      {loading && spinnerPlacement === "end" && spinner}
      {endContent}
    </Component>
  )
})

Button.displayName = "Button"

export { Button }
