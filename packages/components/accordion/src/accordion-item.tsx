import * as React from "react"

import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
  AccordionContentVariants,
  AccordionHeaderVariants,
  AccordionItemVariants,
  AccordionTriggerVariants,
  useAccordionItem,
  type UseAccordionItemProps
} from "./use-accordion-item"
import { cn } from "@vven-ui/utils"

export type AccordionItemProps = UseAccordionItemProps

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const {
    Component,
    HeaderComponent,
    TriggerComponent,
    ContentComponent,
    className,
    value,
    label,
    children,
    ...otherProps
  } = useAccordionItem(props)

  return (
    <Component className={cn(AccordionItemVariants({ className }))} ref={ref} value={value} {...otherProps}>
      <HeaderComponent className={cn(AccordionHeaderVariants({}))}>
        <TriggerComponent className={cn(AccordionTriggerVariants({}))}>
          {label}
          <ChevronDownIcon className="transition-transform delay-200" />
        </TriggerComponent>
      </HeaderComponent>
      <ContentComponent className={cn(AccordionContentVariants({}))}>{children}</ContentComponent>
    </Component>
  )
})

AccordionItem.displayName = "AccordionItem"

export { AccordionItem }
