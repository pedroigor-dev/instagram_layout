"use client";

import { useRef } from "react";
import { Plus } from "lucide-react";
import { Avatar } from "./Avatar";
import type { Story } from "@/types/instagram";

interface StoriesProps {
  stories: Story[];
}

export function Stories({ stories }: StoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-4 overflow-x-auto py-4 px-4 scrollbar-hide border-b border-neutral-200 dark:border-neutral-800"
    >
      {stories.map((story) => (
        <button
          key={story.id}
          className="flex flex-col items-center gap-1.5 shrink-0 bg-transparent border-none cursor-pointer"
        >
          {story.isOwn ? (
            <div className="relative">
              <Avatar user={story.user} size="lg" />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-black">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
          ) : (
            <Avatar
              user={story.user}
              size="lg"
              showRing={story.hasUnread}
              ringColor="gradient"
            />
          )}
          <span className="text-xs truncate w-14 text-center">
            {story.isOwn ? "Seu story" : story.user.username}
          </span>
        </button>
      ))}
    </div>
  );
}
