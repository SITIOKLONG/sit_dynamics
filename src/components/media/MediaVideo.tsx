"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface MediaVideoProps {
  src: string;
  poster?: string;
  alt: string;
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

export function MediaVideo({ src, poster, alt }: MediaVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.3);
      },
      { threshold: [0, 0.3, 0.6, 1] },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion || !inView) {
      video.pause();
      return;
    }

    // Keep the video muted so browser autoplay policies allow playback.
    video.muted = true;
    const playback = video.play();
    if (playback) {
      playback.catch(() => {
        // Autoplay can still be blocked (for example, low-power mode).
        // In that case the poster remains visible.
      });
    }
  }, [inView, reduceMotion]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else if (inView && !reduceMotion) {
        const playback = video.play();
        if (playback) playback.catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [inView, reduceMotion]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 size-full object-cover"
      controls={Boolean(reduceMotion)}
      muted={!reduceMotion}
      loop={!reduceMotion}
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
