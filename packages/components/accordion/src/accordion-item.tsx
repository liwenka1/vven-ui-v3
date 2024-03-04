import * as React from "react"

import { ChevronDownIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

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

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" }
  }

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Component className={cn(AccordionItemVariants({ className }))} ref={ref} value={value} {...otherProps}>
      <HeaderComponent className={cn(AccordionHeaderVariants({}))} onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <TriggerComponent className={cn(AccordionTriggerVariants({}))}>
          {label}
          <ChevronDownIcon className="transition-transform delay-200" />
        </TriggerComponent>
      </HeaderComponent>
      <ContentComponent className={cn(AccordionContentVariants({}))}>
        <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
          {children}
        </motion.div>
      </ContentComponent>
    </Component>
  )
})

AccordionItem.displayName = "AccordionItem"

export { AccordionItem }
