"use client";

import { Avatar } from "./Avatar";
import { useFollow } from "@/hooks/useFollow";
import { DarkModeToggle } from "./DarkModeToggle";
import type { Suggestion, User } from "@/types/instagram";

interface SuggestionItemProps {
  suggestion: Suggestion;
}

function SuggestionItem({ suggestion }: SuggestionItemProps) {
  const { isFollowing, toggle } = useFollow(suggestion.user.isFollowing);

  return (
    <div className="flex items-center gap-2">
      <Avatar user={suggestion.user} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold truncate leading-tight">{suggestion.user.displayName}</p>
          {suggestion.user.isVerified && (
            <svg className="w-3 h-3 fill-blue-500 shrink-0" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )}
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          {suggestion.mutualFollowers && suggestion.mutualFollowers.length > 0 && (
            <div className="flex items-center shrink-0">
              {suggestion.mutualFollowers.slice(0, 2).map((f, i) => (
                <img
                  key={f.username}
                  src={f.avatar}
                  alt={f.username}
                  className="w-4 h-4 rounded-full border-[1.5px] border-white dark:border-neutral-900 object-cover"
                  style={{ marginLeft: i > 0 ? "-5px" : "0" }}
                />
              ))}
            </div>
          )}
          <p className="text-xs text-neutral-400 truncate">{suggestion.reason}</p>
        </div>
      </div>
      <button
        onClick={toggle}
        className="text-xs font-semibold bg-transparent border-none cursor-pointer shrink-0"
        style={{ color: isFollowing ? "#737373" : "#0095f6" }}
      >
        {isFollowing ? "Seguindo" : "Seguir"}
      </button>
    </div>
  );
}

interface RightPanelProps {
  currentUser: User;
  suggestions: Suggestion[];
}

export function RightPanel({ currentUser, suggestions }: RightPanelProps) {
  return (
    <aside className="hidden lg:flex flex-col w-[293px] shrink-0 py-6 pl-6 pr-2 gap-6 sticky top-6 self-start">
      <div className="flex items-center gap-3">
        <Avatar user={currentUser} size="md" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{currentUser.username}</p>
          <p className="text-sm text-neutral-400 truncate">{currentUser.bio}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="text-xs font-semibold text-blue-500 bg-transparent border-none cursor-pointer">
            Mudar
          </button>
          <DarkModeToggle />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-neutral-400">Sugestões para você</p>
          <button className="text-xs font-semibold bg-transparent border-none cursor-pointer">
            Ver tudo
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {suggestions.map((s) => (
            <SuggestionItem key={s.user.id} suggestion={s} />
          ))}
        </div>
      </div>

      <footer className="mt-auto">
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-neutral-400">
          {["Sobre", "Ajuda", "Imprensa", "API", "Carreiras", "Privacidade", "Termos", "Localizações", "Idioma", "Meta Verified"].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-neutral-400 mt-3">© 2026 INSTAGRAM FROM META</p>
      </footer>
    </aside>
  );
}
