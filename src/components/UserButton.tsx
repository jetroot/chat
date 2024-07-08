import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"

const UserButton = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name="Sofia" image="https://images.pexels.com/photos/15835264/pexels-photo-15835264/free-photo-of-woman-wearing-a-hat.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

  )
}

export default UserButton