import { cn } from "@/lib/utils";
import type { User } from "@/types/instagram";

interface FloatingLikersProps {
  likers: User[];
  className?: string;
}

export function FloatingLikers({ likers, className }: FloatingLikersProps) {
  if (!likers.length) return null;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex -space-x-2">
        {likers.slice(0, 3).map((user, i) => (
          <div
            key={user.id}
            className="relative rounded-full border-2 border-black animate-float"
            style={{ animationDelay: `${i * 0.15}s`, zIndex: likers.length - i }}
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-7 h-7 rounded-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-pink-400 text-lg leading-none select-none">🩷</span>
    </div>
  );
}
