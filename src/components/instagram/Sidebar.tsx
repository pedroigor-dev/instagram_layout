"use client";

import React from "react";
import {
  Home,
  Search,
  Clapperboard,
  PlusSquare,
  BarChart2,
  MessageCircle,
  Compass,
  Heart,
  Menu,
} from "lucide-react";
import { Avatar } from "./Avatar";
import { ME } from "@/data/mock";

const NAV_ITEMS = [
  { icon: Home, label: "Início", active: true },
  { icon: Search, label: "Pesquisar" },
  { icon: Clapperboard, label: "Reels" },
  { icon: MessageCircle, label: "Mensagens", badge: 9 },
  { icon: Heart, label: "Notificações" },
  { icon: Compass, label: "Explorar" },
  { icon: PlusSquare, label: "Criar" },
  { icon: BarChart2, label: "Dashboard" },
] satisfies { icon: React.ElementType; label: string; active?: boolean; badge?: number }[];

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-18 xl:w-60 h-screen sticky top-0 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-4 px-3 gap-1 shrink-0">
      <div className="mb-6 px-2 py-2">
        <svg
          className="w-6 h-auto xl:hidden"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span className="hidden xl:block font-['Billabong',cursive] text-3xl tracking-tighter select-none">
          Instagram
        </span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {NAV_ITEMS.map(({ icon: Icon, label, active, badge }) => (
          <button
            key={label}
            className={`flex items-center gap-4 w-full px-2 py-3 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 bg-transparent border-none cursor-pointer ${active ? "font-bold" : ""}`}
          >
            <div className="relative shrink-0">
              <Icon className="w-6 h-6" />
              {badge !== undefined && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-4 h-4 flex items-center justify-center px-0.5">
                  {badge}+
                </span>
              )}
            </div>
            <span className="hidden xl:block text-sm">{label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-1 mt-auto">
        <button className="flex items-center gap-4 w-full px-2 py-3 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 bg-transparent border-none cursor-pointer">
          <Avatar user={ME} size="sm" className="shrink-0" />
          <span className="hidden xl:block text-sm">{ME.username}</span>
        </button>
        <button className="flex items-center gap-4 w-full px-2 py-3 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 bg-transparent border-none cursor-pointer">
          <Menu className="w-6 h-6 shrink-0" />
          <span className="hidden xl:block text-sm">Mais</span>
        </button>
      </div>
    </aside>
  );
}
