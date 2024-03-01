import type { Meta } from "@storybook/react"
import { Accordion, AccordionItem, type AccordionProps } from "@vven-ui/react"

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  argTypes: {}
}

export default meta

const defaultContent = <span>这里是AccordionItem</span>

const Template = (args: AccordionProps) => (
  <Accordion type="single" {...args}>
    <AccordionItem label={<span className="text-red-300">试一下span</span>} value="1">
      {defaultContent}
    </AccordionItem>
    <AccordionItem label="2" value="2">
      {defaultContent}
    </AccordionItem>
    <AccordionItem label="3" value="3">
      {defaultContent}
    </AccordionItem>
  </Accordion>
)

export const Default = {
  render: Template
}
