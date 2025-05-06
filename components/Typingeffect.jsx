"use client";

import { useEffect, useState } from "react";

function TypingEffect({
  text = " Welcome to our website! Here you will find an overview of various car brands.",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text || text.length === 0) return;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);

      setIndex((prev) => {
        if (prev < text.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, [text, index]);

  return <h1>{displayedText}</h1>;
}

export default TypingEffect;
