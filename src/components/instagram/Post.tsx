"use client";

import { Music2, MoreHorizontal } from "lucide-react";
import { Avatar } from "./Avatar";
import { PostImage } from "./PostImage";
import { PostActions } from "./PostActions";
import { useFollow } from "@/hooks/useFollow";
import type { Post } from "@/types/instagram";

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  const { isFollowing, toggle: toggleFollow } = useFollow(post.author.isFollowing);

  return (
    <article className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-none md:rounded-sm mb-6 last:mb-0">
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <Avatar
            user={post.author}
            size="md"
            showRing
            className="shrink-0"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-sm font-semibold truncate">{post.author.username}</span>
              {post.author.isVerified && (
                <svg className="w-3.5 h-3.5 fill-blue-500 shrink-0" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )}
              {!isFollowing && (
                <>
                  <span className="text-neutral-400 text-sm">•</span>
                  <button
                    onClick={toggleFollow}
                    className="text-sm font-semibold text-blue-500 hover:text-blue-700 bg-transparent border-none cursor-pointer"
                  >
                    Seguir
                  </button>
                </>
              )}
            </div>
            {post.music && (
              <div className="flex items-center gap-1 text-xs text-neutral-500">
                <Music2 className="w-3 h-3" />
                <span className="truncate">{post.music.artist} · {post.music.song}</span>
              </div>
            )}
          </div>
        </div>
        <button className="p-1 bg-transparent border-none cursor-pointer shrink-0">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      <PostImage post={post} />

      <PostActions
        postId={post.id}
        initialLiked={post.isLiked}
        initialSaved={post.isSaved}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
        shareCount={post.shareCount}
        sendCount={post.sendCount}
        likedByUsername={post.likedByUsername}
      />

      <div className="px-3 pb-1">
        <p className="text-sm">
          <span className="font-semibold mr-1">{post.author.username}</span>
          {post.caption}
        </p>
      </div>

      <div className="px-3 pb-3">
        <p className="text-xs text-neutral-400 uppercase tracking-wide">Há {post.timestamp}</p>
      </div>
    </article>
  );
}
