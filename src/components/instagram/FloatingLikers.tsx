import { cn } from "@/lib/utils";
import type { User } from "@/types/instagram";

interface FloatingLikersProps {
  likers: User[];
  className?: string;
}

export function FloatingLikers({ likers, className }: FloatingLikersProps) {
  if (!likers.length) return null;

  return (
    <div className={cn("flex items-end gap-1.5", className)}>
      <div className="flex -space-x-3">
        {likers.slice(0, 3).map((user, i) => (
          <div
            key={user.id}
            className="relative animate-float"
            style={{ animationDelay: `${i * 0.18}s`, zIndex: likers.length - i }}
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full object-cover border-2 border-black"
            />
            <span
              className="absolute -bottom-1 -right-1 text-sm leading-none select-none drop-shadow-md"
              style={{ animationDelay: `${i * 0.18 + 0.3}s` }}
            >
              🩷
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
