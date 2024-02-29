import * as Accordion from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"

const AccordionItemVariants = cva()

export interface UseAccordionItem
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionItemVariants> {}

export const useAccordionItem = (props: UseAccordionItem) => {
  const { ...otherProps } = props

  const Component = Accordion.Root

  return {
    Component,
    ...otherProps
  }
}

export type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>
