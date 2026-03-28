"use client";

import React from "react";
import {
  Home,
  Search,
  Clapperboard,
  Plus,
  BarChart2,
  Send,
  Heart,
  Menu,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "./Avatar";
import { ME } from "@/data/mock";

type NavItem = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: number;
  dot?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { icon: Home, label: "Página inicial", active: true },
  { icon: Clapperboard, label: "Reels" },
  { icon: Send, label: "Mensagens", badge: 9 },
  { icon: Search, label: "Pesquisa" },
  { icon: Heart, label: "Notificações", dot: true },
  { icon: Plus, label: "Criar" },
  { icon: BarChart2, label: "Painel" },
];

const INSTAGRAM_ICON_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

export function Sidebar() {
  return (
    <aside
      className={cn(
        "group/sidebar",
        "hidden md:flex flex-col shrink-0",
        "w-[72px] hover:w-[245px]",
        "transition-[width] duration-300 ease-in-out",
        "h-screen sticky top-0 overflow-hidden",
        "border-r border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-black",
        "py-3 px-3 gap-0.5 z-50"
      )}
    >
      <div className="relative flex items-center h-[72px] px-0.5 mb-2 overflow-hidden shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cn(
            "w-6 h-6 shrink-0 absolute left-0.5",
            "transition-all duration-200",
            "group-hover/sidebar:opacity-0 group-hover/sidebar:-translate-x-1 group-hover/sidebar:scale-90"
          )}
        >
          <path d={INSTAGRAM_ICON_PATH} />
        </svg>

        <span
          className={cn(
            "font-['Billabong',cursive] text-[28px] leading-none whitespace-nowrap select-none",
            "opacity-0 translate-x-1",
            "transition-all duration-200 delay-150",
            "group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0"
          )}
        >
          Instagram
        </span>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1">
        {NAV_ITEMS.map(({ icon: Icon, label, active, badge, dot }) => (
          <button
            key={label}
            className={cn(
              "flex items-center gap-4 w-full px-2 py-3 rounded-xl",
              "bg-transparent border-none cursor-pointer",
              "transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-900",
              active && "font-bold"
            )}
          >
            <div className="relative shrink-0 w-6 h-6 flex items-center justify-center">
              <Icon className={cn("w-6 h-6", active && "stroke-[2.5]")} />

              {badge !== undefined && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-0.5 leading-none">
                  {badge}+
                </span>
              )}

              {dot && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-black" />
              )}
            </div>

            <span
              className={cn(
                "text-sm whitespace-nowrap overflow-hidden",
                "opacity-0 translate-x-1",
                "transition-all duration-200 delay-[180ms]",
                "group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0"
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-0.5">
        <button
          className={cn(
            "flex items-center gap-4 w-full px-2 py-3 rounded-xl",
            "bg-transparent border-none cursor-pointer",
            "transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          )}
        >
          <Avatar user={ME} size="sm" className="shrink-0" />
          <span
            className={cn(
              "text-sm whitespace-nowrap overflow-hidden",
              "opacity-0 translate-x-1",
              "transition-all duration-200 delay-[180ms]",
              "group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0"
            )}
          >
            Perfil
          </span>
        </button>

        <button
          className={cn(
            "flex items-center gap-4 w-full px-2 py-3 rounded-xl",
            "bg-transparent border-none cursor-pointer",
            "transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          )}
        >
          <Menu className="w-6 h-6 shrink-0" />
          <span
            className={cn(
              "text-sm whitespace-nowrap overflow-hidden",
              "opacity-0 translate-x-1",
              "transition-all duration-200 delay-[180ms]",
              "group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0"
            )}
          >
            Mais
          </span>
        </button>

        <button
          className={cn(
            "flex items-center gap-4 w-full px-2 py-3 rounded-xl",
            "bg-transparent border-none cursor-pointer",
            "transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          )}
        >
          <LayoutGrid className="w-6 h-6 shrink-0" />
          <span
            className={cn(
              "text-sm whitespace-nowrap overflow-hidden",
              "opacity-0 translate-x-1",
              "transition-all duration-200 delay-[180ms]",
              "group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0"
            )}
          >
            Também da Meta
          </span>
        </button>
      </div>
    </aside>
  );
}
