"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function useTypingEffect(words: string[], speed = 90, deleteSpeed = 50, pause = 1600) {
  const reducedMotion = usePrefersReducedMotion();
  const [text, setText] = useState(words[0] ?? "");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || words.length === 0) {
      setText(words[0] ?? "");
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          const nextLength = text.length + (isDeleting ? -1 : 1);
          setText(current.slice(0, nextLength));
        },
        isDeleting ? deleteSpeed : speed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause, reducedMotion]);

  return text;
}
