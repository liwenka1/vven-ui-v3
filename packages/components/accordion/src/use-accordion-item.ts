import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"

const AccordionItemVariants = cva()

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
