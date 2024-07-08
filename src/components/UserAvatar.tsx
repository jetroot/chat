import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

interface UserAvatarProps {
    name: string;
    image: string;
    className?: string;
}

const UserAvatar = ({
    className,
    image,
    name
}: UserAvatarProps) => {
  return (
    <Avatar className={cn('bg-white text-black', className)}>
        <AvatarImage src={image} />
        <AvatarFallback className="dark:bg-white dark:text-black text-lg">
            {name[0]}
        </AvatarFallback>
    </Avatar>

  )
}

export default UserAvatar