"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";

export function SiteSoundtrack({
  src,
  title,
  artist,
}: {
  src: string;
  title: string;
  artist: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.32;

    const start = () => {
      if (startedRef.current || !audio.paused) return;
      startedRef.current = true;
      void audio.play().catch(() => {
        startedRef.current = false;
      });
    };

    const onFirstInteraction = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-soundtrack]")) {
        return;
      }
      start();
    };

    void audio
      .play()
      .then(() => {
        startedRef.current = true;
      })
      .catch(() => setPlaying(false));

    window.addEventListener("pointerdown", onFirstInteraction, {
      passive: true,
    });
    window.addEventListener("keydown", onFirstInteraction);
    window.addEventListener("wheel", onFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("wheel", onFirstInteraction);
    };
  }, []);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    startedRef.current = true;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setPlaying(false);
      }
      return;
    }

    audio.pause();
  }

  return (
    <div
      data-soundtrack
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 border border-line bg-surface/90 p-1.5 shadow-lg backdrop-blur-md"
    >
      <audio
        ref={audioRef}
        src={src}
        loop
        autoPlay
        playsInline
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "暫停背景音樂" : "播放背景音樂"}
        title={`${title} — ${artist}`}
        className="flex size-10 shrink-0 items-center justify-center border border-line bg-signal text-paper transition-colors hover:bg-signal-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        {playing ? (
          <Pause className="size-4" aria-hidden="true" />
        ) : (
          <Play className="size-4 translate-x-px" aria-hidden="true" />
        )}
      </button>
      <div className="hidden pr-2 sm:block">
        <p className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-technical text-muted/80">
          <Music2 className="size-3" aria-hidden="true" />
          Westworld
        </p>
        <p className="mt-0.5 font-display text-xs font-semibold tracking-[-0.01em] text-fg">
          Main Title Theme
        </p>
      </div>
    </div>
  );
}
