"use client";

import { Home, Search, Clapperboard, Plus, Send } from "lucide-react";
import { ME } from "@/data/mock";

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-around py-2 px-2">
      <button aria-label="Início" className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
        <Home className="w-7 h-7 stroke-[2.5px]" />
      </button>

      <button aria-label="Pesquisar" className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
        <Search className="w-7 h-7 stroke-[1.5px]" />
      </button>

      <button aria-label="Reels" className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
        <Clapperboard className="w-7 h-7 stroke-[1.5px]" />
      </button>

      <button aria-label="Criar" className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
        <Plus className="w-7 h-7 stroke-[1.5px]" />
      </button>

      <div className="relative">
        <button aria-label="Mensagens" className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
          <Send className="w-7 h-7 stroke-[1.5px]" />
        </button>
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-bold rounded-full min-w-4 h-4 flex items-center justify-center px-0.5 leading-none pointer-events-none">9+</span>
      </div>

      <button aria-label="Perfil" className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer">
        <img
          src={ME.avatar}
          alt={ME.username}
          className="w-7 h-7 rounded-full object-cover ring-2 ring-black dark:ring-white"
        />
      </button>
    </nav>
  );
}
