"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background:
          "radial-gradient(500px circle at var(--cursor-x, -500px) var(--cursor-y, -500px), rgba(139, 92, 246, 0.12), rgba(139, 92, 246, 0.04) 40%, transparent 70%)",
      }}
    />
  );
}
