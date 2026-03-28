"use client";

import { ChevronLeft, ChevronRight, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCarousel } from "@/hooks/useCarousel";
import { FloatingLikers } from "./FloatingLikers";
import type { Post } from "@/types/instagram";

interface PostImageProps {
  post: Pick<Post, "images" | "friendLikers">;
  className?: string;
}

export function PostImage({ post, className }: PostImageProps) {
  const { images, friendLikers } = post;
  const { current, next, prev, goTo, isFirst, isLast } = useCarousel(images.length);
  const isMulti = images.length > 1;

  return (
    <div className={cn("relative select-none bg-black overflow-hidden", className)}>
      <div
        className="flex transition-transform duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Post image ${i + 1}`}
            className="w-full shrink-0 object-cover max-h-[600px] min-h-[300px]"
            draggable={false}
          />
        ))}
      </div>

      {isMulti && !isFirst && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-1 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      )}
      {isMulti && !isLast && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-1 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      )}

      {isMulti && (
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
          {current + 1}/{images.length}
        </div>
      )}

      {isMulti && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                i === current ? "bg-blue-400" : "bg-white/60"
              )}
            />
          ))}
        </div>
      )}

      {friendLikers.length > 0 && (
        <div className="absolute bottom-4 left-3">
          <FloatingLikers likers={friendLikers} />
        </div>
      )}

      <button className="absolute bottom-4 right-3 bg-black/40 rounded-full p-1.5 backdrop-blur-sm">
        <VolumeX className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}


      {isMulti && !isFirst && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-1 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      )}
      {isMulti && !isLast && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-1 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      )}

      {isMulti && (
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
          {current + 1}/{images.length}
        </div>
      )}

      {isMulti && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                i === current ? "bg-blue-400" : "bg-white/60"
              )}
            />
          ))}
        </div>
      )}

      {friendLikers.length > 0 && (
        <div className="absolute bottom-4 left-3">
          <FloatingLikers likers={friendLikers} />
        </div>
      )}

      <button className="absolute bottom-4 right-3 bg-black/40 rounded-full p-1.5 backdrop-blur-sm">
        <VolumeX className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
