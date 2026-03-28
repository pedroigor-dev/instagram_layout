"use client";

import { useEffect } from "react";
import { Users, Sparkles, LayoutList, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeedMode = "all" | "friends" | "recommended";

interface FeedFilterModalProps {
  open: boolean;
  current: FeedMode;
  onChange: (mode: FeedMode) => void;
  onClose: () => void;
}

const OPTIONS: { mode: FeedMode; icon: React.ElementType; label: string; desc: string }[] = [
  {
    mode: "friends",
    icon: Users,
    label: "Só amigos",
    desc: "Apenas publicações de quem você segue",
  },
  {
    mode: "recommended",
    icon: Sparkles,
    label: "Só recomendados",
    desc: "Descubra criadores e conteúdos novos",
  },
  {
    mode: "all",
    icon: LayoutList,
    label: "Misto",
    desc: "Amigos e recomendações combinados",
  },
];

export function FeedFilterModal({ open, current, onChange, onClose }: FeedFilterModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={cn(
          "relative z-10 w-full sm:max-w-lg mx-0 sm:mx-4",
          "bg-white dark:bg-black",
          "rounded-t-3xl sm:rounded-3xl overflow-hidden",
          "shadow-2xl animate-modal-in"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex items-center justify-center px-14 pt-5 pb-4">
          <button
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1 bg-transparent border-none cursor-pointer text-black dark:text-white"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-base font-semibold">Controle do feed</h2>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800" />

        {/* Options */}
        <div className="px-4 py-4 flex flex-col gap-3">
          {OPTIONS.map(({ mode, icon: Icon, label, desc }) => {
            const active = current === mode;
            return (
              <button
                key={mode}
                onClick={() => { onChange(mode); onClose(); }}
                className={cn(
                  "flex items-center gap-4 w-full px-4 py-4 rounded-xl text-left",
                  "border border-neutral-200 dark:border-neutral-800",
                  "bg-transparent cursor-pointer transition-colors",
                  "hover:bg-neutral-50 dark:hover:bg-neutral-900",
                  active && "bg-neutral-50 dark:bg-neutral-900"
                )}
              >
                <div className="w-12 h-12 rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0 bg-white dark:bg-black">
                  <Icon className="w-6 h-6 text-black dark:text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-black dark:text-white leading-tight">{label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">{desc}</p>
                </div>
                <ChevronRight className={cn("w-5 h-5 shrink-0", active ? "text-black dark:text-white" : "text-neutral-400")} />
              </button>
            );
          })}
        </div>

        {/* bottom safe-area spacer on mobile */}
        <div className="h-2 sm:hidden" />
      </div>
    </div>
  );
}

