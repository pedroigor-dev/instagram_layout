import { cn } from "@/lib/utils";
import type { User } from "@/types/instagram";

interface AvatarProps {
  user: Pick<User, "username" | "avatar" | "displayName">;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  showRing?: boolean;
  ringColor?: "gradient" | "gray";
}

const sizeMap = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-16 h-16",
  "2xl": "w-20 h-20",
};

const ringMap = {
  gradient: "ring-2 ring-offset-1 ring-transparent bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]",
  gray: "ring-2 ring-offset-1 ring-gray-300",
};

export function Avatar({ user, size = "md", className, showRing, ringColor = "gradient" }: AvatarProps) {
  if (showRing && ringColor === "gradient") {
    return (
      <div className={cn("rounded-full shrink-0 neon-ring p-[3px]", sizeMap[size], className)}>
        <div className="rounded-full bg-white dark:bg-black p-[2px] w-full h-full">
          <img
            src={user.avatar}
            alt={user.username}
            className="rounded-full w-full h-full object-cover block"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src={user.avatar}
      alt={user.username}
      className={cn("rounded-full object-cover shrink-0", sizeMap[size], showRing && ringMap[ringColor!], className)}
    />
  );
}
