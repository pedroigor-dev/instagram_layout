"use client";

import { useState, useCallback } from "react";

export function useLike(initialLiked: boolean, initialCount: number) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = useCallback(() => {
    setIsAnimating(true);
    setIsLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
    setTimeout(() => setIsAnimating(false), 400);
  }, []);

  return { isLiked, likeCount, isAnimating, toggle };
}
