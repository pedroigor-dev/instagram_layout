"use client";

import { useState, useCallback } from "react";

export function useFollow(initialFollowing: boolean) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);

  const toggle = useCallback(() => {
    setIsFollowing((prev) => !prev);
  }, []);

  return { isFollowing, toggle };
}
