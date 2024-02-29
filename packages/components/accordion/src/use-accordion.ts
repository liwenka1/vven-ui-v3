import * as Accordion from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"

const AccordionRootVariants = cva()

export interface UseAccordion
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionRootVariants> {}

export const useAccordion = (props: UseAccordion) => {
  const { ...otherProps } = props

  const Component = Accordion.Item

  return {
    Component,
    ...otherProps
  }
}

export type UseAccordionReturn = ReturnType<typeof useAccordion>
