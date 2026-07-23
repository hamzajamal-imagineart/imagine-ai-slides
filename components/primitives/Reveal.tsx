"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "down";

const DIR_CLASS: Record<Direction, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  down: "reveal-down",
};

/**
 * Blur-up entrance. Content is revealed shortly after mount so it is always
 * visible regardless of scroll position, deep links, or engine quirks; the
 * `delay` prop staggers items so a group cascades in. Honors reduced motion.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // useEffect runs after the initial (hidden) paint, so flipping to visible
    // here still triggers the CSS transition — while guaranteeing the content
    // is shown regardless of scroll position or deep links.
    setVisible(true);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${DIR_CLASS[direction]} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
