import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"

export const AccordionItemVariants = cva("border-b")

export const AccordionHeaderVariants = cva("flex")

export const AccordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
)

export const AccordionContentVariants = cva(
  "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
)

export interface UseAccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionItemVariants> {
  value: string
  label?: React.ReactNode | string
}

export const useAccordionItem = (props: UseAccordionItemProps) => {
  const { className, value, label, children, ...otherProps } = props

  const Component = AccordionPrimitive.Item

  const HeaderComponent = AccordionPrimitive.Header

  const TriggerComponent = AccordionPrimitive.Trigger

  const ContentComponent = AccordionPrimitive.Content

  return {
    Component,
    HeaderComponent,
    TriggerComponent,
    ContentComponent,
    className,
    value,
    label,
    children,
    ...otherProps
  }
}

export type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>
