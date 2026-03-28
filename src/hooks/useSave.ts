"use client";

import { useState, useCallback } from "react";

export function useSave(initialSaved: boolean) {
  const [isSaved, setIsSaved] = useState(initialSaved);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = useCallback(() => {
    setIsAnimating(true);
    setIsSaved((prev) => !prev);
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  return { isSaved, isAnimating, toggle };
}
