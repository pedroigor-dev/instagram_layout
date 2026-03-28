"use client";

import { SunMedium, MoonStar } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function DarkModeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-0 bg-transparent border-none cursor-pointer text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
    >
      {isDark ? <SunMedium className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
    </button>
  );
}
