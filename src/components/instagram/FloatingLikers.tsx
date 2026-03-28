"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { User } from "@/types/instagram";

const FIXED_POSITIONS = [
  { x: 22, y: 67 },
  { x: 10, y: 80 },
  { x: 34, y: 80 },
];

interface DraggableLikerProps {
  user: User;
  initialX: number;
  initialY: number;
  delay: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function DraggableLiker({ user, initialX, initialY, delay, containerRef }: DraggableLikerProps) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef<{
    startClientX: number;
    startClientY: number;
    startPosX: number;
    startPosY: number;
  } | null>(null);

  const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));

  const updatePos = (clientX: number, clientY: number) => {
    if (!dragState.current || !containerRef.current) return;
    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    const dx = ((clientX - dragState.current.startClientX) / width) * 100;
    const dy = ((clientY - dragState.current.startClientY) / height) * 100;
    setPos({
      x: clamp(dragState.current.startPosX + dx, 5, 90),
      y: clamp(dragState.current.startPosY + dy, 5, 90),
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragState.current = {
      startClientX: e.clientX,
      startClientY: e.clientY,
      startPosX: pos.x,
      startPosY: pos.y,
    };
    setIsDragging(true);

    const onMove = (ev: MouseEvent) => updatePos(ev.clientX, ev.clientY);
    const onUp = () => {
      setIsDragging(false);
      dragState.current = null;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    const touch = e.touches[0];
    dragState.current = {
      startClientX: touch.clientX,
      startClientY: touch.clientY,
      startPosX: pos.x,
      startPosY: pos.y,
    };
    setIsDragging(true);

    const onMove = (ev: TouchEvent) => {
      ev.preventDefault();
      updatePos(ev.touches[0].clientX, ev.touches[0].clientY);
    };
    const onEnd = () => {
      setIsDragging(false);
      dragState.current = null;
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
  };

  return (
    <div
      className="absolute pointer-events-auto select-none"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: "translate(-50%, -50%)",
        transition: isDragging ? "none" : "left 0.3s ease-out, top 0.3s ease-out",
        zIndex: isDragging ? 50 : 10,
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className={cn("relative", !isDragging && "animate-float")}
        style={{
          animationDelay: `${delay}s`,
          transform: isDragging ? "scale(1.15)" : undefined,
          transition: isDragging ? "none" : "transform 0.2s ease",
        }}
      >
        <img
          src={user.avatar}
          alt={user.username}
          className="w-12 h-12 rounded-full object-cover drop-shadow-lg"
          draggable={false}
        />
        <span className="absolute -bottom-1 -right-1 text-base leading-none select-none drop-shadow-md">
          🩷
        </span>
      </div>
    </div>
  );
}

interface FloatingLikersProps {
  likers: User[];
  className?: string;
}

export function FloatingLikers({ likers, className }: FloatingLikersProps) {
  if (!likers.length) return null;

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
    >
      {likers.slice(0, 3).map((user, i) => (
        <DraggableLiker
          key={user.id}
          user={user}
          initialX={FIXED_POSITIONS[i].x}
          initialY={FIXED_POSITIONS[i].y}
          delay={i * 0.22}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}
