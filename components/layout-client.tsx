'use client'

import { useEffect, useState } from "react";

const LOADING_MS = 1000;
const FADE_MS = 500;

type Phase = "loading" | "exiting" | "ready";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exiting"), LOADING_MS);
    const t2 = setTimeout(() => setPhase("ready"), LOADING_MS + FADE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const showOverlay = phase === "loading" || phase === "exiting";

  return (
    <>
      <div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#0a0a0a] transition-opacity duration-500 ease-out"
        style={{
          opacity: showOverlay ? 1 : 0,
          pointerEvents: showOverlay ? "auto" : "none",
        }}
        aria-hidden={!showOverlay}
      >
        <div
          className="rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900 animate-spin-slow-down"
        />
        <p className="text-gray-400 text-sm">Carregando...</p>
      </div>

      <div
        className="min-h-screen transition-opacity duration-500 ease-out"
        style={{
          opacity: phase === "ready" ? 1 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
}
