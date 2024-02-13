import type { Meta } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "@vven-ui/react"

const meta: Meta = {}

export default meta

const Template = () => (
  <Avatar>
    <AvatarImage />
    <AvatarFallback />
  </Avatar>
)

export const Default = {
  render: Template,

  args: {}
}
