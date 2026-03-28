"use client";

import { useState, useCallback } from "react";

export function useCarousel(total: number) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((i) => Math.max(i - 1, 0));
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  return { current, next, prev, goTo, isFirst: current === 0, isLast: current === total - 1 };
}
