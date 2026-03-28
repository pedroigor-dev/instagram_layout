"use client";

import { useRef, useState, useCallback } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar } from "./Avatar";
import type { Story } from "@/types/instagram";

interface StoriesProps {
  stories: Story[];
}

export function Stories({ stories }: StoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 8);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center border border-neutral-200 dark:border-neutral-700 cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex items-center gap-3 overflow-x-auto py-5 px-1 scrollbar-hide"
      >
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-2 shrink-0 bg-transparent border-none cursor-pointer"
          >
            {story.isOwn ? (
              <div className="relative">
                <Avatar user={story.user} size="2xl" />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-black">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              </div>
            ) : (
              <Avatar
                user={story.user}
                size="2xl"
                showRing={story.hasUnread}
                ringColor="gradient"
              />
            )}
            <span className="text-xs truncate w-20 text-center">
              {story.isOwn ? "Seu story" : story.user.username}
            </span>
          </button>
        ))}
      </div>

      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center border border-neutral-200 dark:border-neutral-700 cursor-pointer"
          aria-label="Próximo"
        >
          <ChevronRight className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
        </button>
      )}
    </div>
  );
}
