import type { Meta } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "@vven-ui/react"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {}
}

export default meta

const Template = () => (
  <Avatar>
    <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
)

export const Default = {
  render: Template,

  args: {}
}
