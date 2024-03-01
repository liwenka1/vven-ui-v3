import * as React from "react"

import { useAccordionItem, type UseAccordionItemProps } from "./use-accordion-item"

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
    <Component className={className} ref={ref} value={value} {...otherProps}>
      <HeaderComponent>
        <TriggerComponent>{label}</TriggerComponent>
      </HeaderComponent>
      <ContentComponent>{children}</ContentComponent>
    </Component>
  )
})

AccordionItem.displayName = "AccordionItem"

export { AccordionItem }
