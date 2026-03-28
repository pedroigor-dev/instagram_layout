"use client";

import { Home, Search, Clapperboard, PlusSquare, User } from "lucide-react";

const NAV_ITEMS = [
  { icon: Home, label: "Início", active: true },
  { icon: Search, label: "Pesquisar" },
  { icon: Clapperboard, label: "Reels" },
  { icon: PlusSquare, label: "Criar" },
  { icon: User, label: "Perfil" },
];

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-around py-2 px-4">
      {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          aria-label={label}
          className="flex flex-col items-center gap-0.5 p-2 bg-transparent border-none cursor-pointer"
        >
          <Icon className={`w-7 h-7 ${active ? "stroke-[2.5px]" : "stroke-[1.5px]"}`} />
        </button>
      ))}
    </nav>
  );
}
