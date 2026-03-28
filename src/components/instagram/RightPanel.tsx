"use client";

import { Avatar } from "./Avatar";
import { useFollow } from "@/hooks/useFollow";
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
        <p className="text-sm font-semibold truncate">{suggestion.user.username}</p>
        <p className="text-xs text-neutral-400 truncate">{suggestion.reason}</p>
      </div>
      <button
        onClick={toggle}
        className="text-xs font-semibold bg-transparent border-none cursor-pointer"
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
    <aside className="hidden lg:flex flex-col w-80 xl:w-96 shrink-0 py-6 px-4 gap-6 sticky top-0 h-screen overflow-y-auto">
      <div className="flex items-center gap-3">
        <Avatar user={currentUser} size="md" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{currentUser.username}</p>
          <p className="text-sm text-neutral-400 truncate">{currentUser.bio}</p>
        </div>
        <button className="text-xs font-semibold text-blue-500 bg-transparent border-none cursor-pointer">
          Mudar
        </button>
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
