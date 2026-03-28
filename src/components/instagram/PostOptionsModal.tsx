"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PostOptionsModalProps {
  onClose: () => void;
  isFollowing: boolean;
  onUnfollow: () => void;
}

const OPTIONS = [
  { label: "Denunciar", danger: true },
  { label: "Deixar de seguir", danger: true, action: "unfollow" },
  { label: "Adicionar aos Favoritos" },
  { label: "Ir para o post" },
  { label: "Compartilhar" },
  { label: "Copiar link" },
  { label: "Incorporar" },
  { label: "Sobre essa conta" },
  { label: "Cancelar", bold: true },
];

export function PostOptionsModal({ onClose, isFollowing, onUnfollow }: PostOptionsModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleOption = (label: string, action?: string) => {
    if (action === "unfollow") { onUnfollow(); }
    if (label === "Cancelar") { onClose(); return; }
    onClose();
  };

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleBackdrop}
      className="fixed inset-0 z-100001 flex items-center justify-center bg-black/60 animate-post-options-backdrop"
    >
      <div className="animate-post-options-in w-85 max-w-[90vw] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-neutral-800">
        {OPTIONS.filter(o => o.label !== "Deixar de seguir" || isFollowing).map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => handleOption(opt.label, (opt as { action?: string }).action)}
            className={[
              "group w-full text-center text-sm py-3.5 px-4 block bg-transparent border-none cursor-pointer transition-colors duration-150",
              i < OPTIONS.filter(o => o.label !== "Deixar de seguir" || isFollowing).length - 1
                ? "border-b border-neutral-200 dark:border-neutral-700"
                : "",
              opt.danger
                ? "text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-950/30"
                : opt.bold
                ? "font-semibold text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                : "text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700",
            ].join(" ")}
          >
            <span className="group-hover:scale-[1.02] inline-block transition-transform duration-150">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}
