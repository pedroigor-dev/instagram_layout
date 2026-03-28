"use client";

import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { SunMedium, MoonStar } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const SPARK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export function DarkModeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const [bursting, setBursting] = useState(false);
  const [overlay, setOverlay] = useState<"dark" | "light" | null>(null);

  const handleClick = useCallback(() => {
    setBursting(true);
    setTimeout(() => setBursting(false), 420);

    const next = isDark ? "light" : "dark";
    setOverlay(next);
    setTimeout(() => setOverlay(null), 1400);

    toggle();
  }, [isDark, toggle]);

  return (
    <>
      {overlay && createPortal(
        <div
          className="fixed inset-0 pointer-events-none flex items-center justify-center"
          style={{
            zIndex: 99999,
            backgroundColor: overlay === "dark" ? "#000" : "#fff",
            animation: "theme-overlay-fade 1.4s ease-in-out forwards",
          }}
        >
          {overlay === "dark" ? (
            [0, 0.5, 1, 1.5].map((delay, i) => (
              <span
                key={i}
                className="absolute text-4xl font-bold select-none"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  top: "50%",
                  left: "50%",
                  marginTop: "-1rem",
                  marginLeft: "-0.75rem",
                  animation: `swayUpToRight 2s ease-out ${delay}s forwards`,
                }}
              >
                Z
              </span>
            ))
          ) : (
            <div className="theme-sun">
              <div className="sun-center" />
              <div className="sun-ray r-1" />
              <div className="sun-ray r-2" />
              <div className="sun-ray r-3" />
              <div className="sun-ray r-4" />
              <div className="sun-ray r-5" />
              <div className="sun-ray r-6" />
              <div className="sun-ray r-7" />
              <div className="sun-ray r-8" />
            </div>
          )}
        </div>,
        document.body
      )}

      <div className="relative flex items-center justify-center">
        {bursting && SPARK_ANGLES.map((angle) => (
          <span
            key={angle}
            className="absolute w-1 h-1 rounded-full pointer-events-none"
            style={{
              backgroundColor: isDark ? "#facc15" : "#a78bfa",
              ["--r" as string]: `${angle}deg`,
              animation: "spark-fly 0.38s ease-out forwards",
            }}
          />
        ))}
        <button
          onClick={handleClick}
          aria-label="Toggle dark mode"
          className="p-0 bg-transparent border-none cursor-pointer text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          {isDark ? <SunMedium className="w-5 h-5" /> : <MoonStar className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
}
