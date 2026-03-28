"use client";

import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLike } from "@/hooks/useLike";
import { useSave } from "@/hooks/useSave";

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".", ",")} mi`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)} mil`;
  return n.toString();
}

interface PostActionsProps {
  postId: string;
  initialLiked: boolean;
  initialSaved: boolean;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  sendCount: number;
  likedByUsername?: string;
}

export function PostActions({
  postId: _postId,
  initialLiked,
  initialSaved,
  likeCount,
  commentCount,
  shareCount,
  sendCount,
  likedByUsername,
}: PostActionsProps) {
  const { isLiked, likeCount: currentLikes, isAnimating: likeAnim, toggle: toggleLike } = useLike(initialLiked, likeCount);
  const { isSaved, isAnimating: saveAnim, toggle: toggleSave } = useSave(initialSaved);

  return (
    <div className="px-3 pb-3 space-y-2">
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLike}
            aria-label={isLiked ? "Unlike" : "Like"}
            className="p-0 bg-transparent border-none cursor-pointer"
          >
            <Heart
              className={cn(
                "w-7 h-7 transition-transform",
                likeAnim && "scale-125",
                isLiked ? "fill-red-500 stroke-red-500" : "stroke-current fill-none"
              )}
            />
          </button>
          <button aria-label="Comment" className="p-0 bg-transparent border-none cursor-pointer">
            <MessageCircle className="w-7 h-7 -scale-x-100" />
          </button>
          <button aria-label="Share" className="p-0 bg-transparent border-none cursor-pointer">
            <Send className="w-6 h-6 -rotate-12" />
          </button>
        </div>
        <button
          onClick={toggleSave}
          aria-label={isSaved ? "Unsave" : "Save"}
          className="p-0 bg-transparent border-none cursor-pointer"
        >
          <Bookmark
            className={cn(
              "w-7 h-7 transition-transform",
              saveAnim && "scale-125",
              isSaved ? "fill-current" : "fill-none"
            )}
          />
        </button>
      </div>

      <p className="text-sm font-semibold">
        {formatCount(currentLikes)} curtidas
      </p>

      <div className="flex items-center gap-4 text-sm text-neutral-400">
        <span>{formatCount(commentCount)} comentários</span>
        <span>{formatCount(shareCount)} compartilhamentos</span>
        <span>{formatCount(sendCount)} envios</span>
      </div>

      {likedByUsername && (
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          Curtido por <span className="font-semibold">{likedByUsername}</span> e outras pessoas
        </p>
      )}
    </div>
  );
}
