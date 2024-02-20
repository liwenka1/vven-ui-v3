import type { Meta } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "@vven-ui/react"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {}
}

export default meta

const Template = () => (
  <Avatar>
    <AvatarImage alt="@liwenka1" src="https://avatars.githubusercontent.com/u/92351553?v=4" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
)

export const Default = {
  render: Template,

  args: {}
}
