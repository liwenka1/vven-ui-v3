import * as React from "react"

import { ReloadIcon } from "@radix-ui/react-icons"

import { cn } from "@vven-ui/utils"
import { useButton, buttonVariants, type UseButtonProps } from "./use-button"

export type ButtonProps = UseButtonProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Comp, className, variant, size, radius, asChild, loading, startContent, endContent, ...otherprops } =
    useButton(props)

  return asChild ? (
    <Comp className={cn(buttonVariants({ className, variant, size, radius }))} ref={ref} {...otherprops} />
  ) : (
    <Comp className={cn(buttonVariants({ className, variant, size, radius }))} ref={ref} {...otherprops}>
      {loading && <ReloadIcon className="animate-spin mr-1" />}
      {startContent}
      {props.children}
      {endContent}
    </Comp>
  )
})

Button.displayName = "Button"

export { Button, buttonVariants }
