"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Feed } from "@/components/instagram/Feed";
import { Sidebar } from "@/components/instagram/Sidebar";
import { Stories } from "@/components/instagram/Stories";
import { RightPanel } from "@/components/instagram/RightPanel";
import { MobileNav } from "@/components/instagram/MobileNav";
import { FeedFilterModal, type FeedMode } from "@/components/instagram/FeedFilterModal";
import { DarkModeToggle } from "@/components/instagram/DarkModeToggle";
import { INITIAL_POSTS, STORIES, SUGGESTIONS, ME } from "@/data/mock";

const MODE_LABELS: Record<FeedMode, string> = {
  all: "Misto",
  friends: "Só amigos",
  recommended: "Só recomendados",
};

export default function Home() {
  const [feedMode, setFeedMode] = useState<FeedMode>("all");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black font-sans">
      <Sidebar />

      <div className="flex flex-1 min-w-0 justify-center">
        <div className="flex items-start gap-8 w-full max-w-[880px]">
          <div className="flex-1 min-w-0 max-w-[550px]">
            <header className="md:hidden flex items-center justify-between px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black sticky top-0 z-40">
              <span className="font-['Billabong',cursive] text-3xl tracking-tight leading-none pt-1">Instagram</span>
              <div className="flex items-center gap-3">
                <button className="bg-transparent border-none cursor-pointer p-0.5" aria-label="Pesquisar">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth={1.8}><circle cx="10.5" cy="10.5" r="7.5" /><line x1="16.5" y1="16.5" x2="22" y2="22" /></svg>
                </button>
                <div className="relative">
                  <button className="bg-transparent border-none cursor-pointer p-0.5" aria-label="Notificações">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth={1.8}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </button>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full min-w-4 h-4 flex items-center justify-center px-0.5 leading-none">1</span>
                </div>
                <DarkModeToggle />
              </div>
            </header>
            <Stories stories={STORIES} />

            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                {MODE_LABELS[feedMode]}
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3 py-1.5 rounded-full transition-colors border-none cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Feed
              </button>
            </div>

            <div className="pb-20 md:pb-6">
              <Feed posts={INITIAL_POSTS} mode={feedMode} />
            </div>
          </div>
          <RightPanel currentUser={ME} suggestions={SUGGESTIONS} />
        </div>
      </div>

      <MobileNav />

      <FeedFilterModal
        open={modalOpen}
        current={feedMode}
        onChange={setFeedMode}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
