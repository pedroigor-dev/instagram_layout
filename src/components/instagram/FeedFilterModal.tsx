"use client";

import { useEffect } from "react";
import { Users, Sparkles, LayoutList, X, Check } from "lucide-react";
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={cn(
          "relative z-10 w-full sm:max-w-md mx-4 sm:mx-auto",
          "bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden",
          "shadow-2xl",
          "animate-modal-in"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative px-6 pt-8 pb-4 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-800 dark:hover:text-white border-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <h2 className="text-lg font-bold">Controle do feed</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Escolha o que você quer ver
          </p>
        </div>

        <div className="px-4 pb-6 flex flex-col gap-3">
          {OPTIONS.map(({ mode, icon: Icon, label, desc }) => {
            const active = current === mode;
            return (
              <button
                key={mode}
                onClick={() => { onChange(mode); onClose(); }}
                className={cn(
                  "flex items-center gap-4 w-full px-4 py-4 rounded-2xl text-left",
                  "border-2 transition-all duration-200 cursor-pointer",
                  "bg-transparent",
                  active
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40"
                    : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                )}
              >
                <div className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                  active ? "bg-blue-500 text-white" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn("text-sm font-semibold", active && "text-blue-600 dark:text-blue-400")}>{label}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{desc}</p>
                </div>
                {active && <Check className="w-5 h-5 text-blue-500 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
