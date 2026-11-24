import React from "react";
import type { CSSProperties } from "react";

interface PawPrintProps {
  className?: string;
  style?: CSSProperties;
  size?: number;
  rotation?: number;
  opacity?: number;
}

export default function PawPrint({
  className,
  style,
  size = 28,
  rotation = 0,
  opacity = 0.24,
}: PawPrintProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width={size}
      height={size}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity,
        display: "inline-block",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        ...style,
      }}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 18 16 C 13 16 10 20 12 25 C 13.5 28.5 16 30 18 30 C 20 30 22.5 28.5 24 25 C 26 20 23 16 18 16 Z"
        fill="currentColor"
      />
      <ellipse cx="9" cy="14" rx="3.1" ry="4.1" transform="rotate(-20 9 14)" fill="currentColor" />
      <ellipse cx="14.5" cy="8.5" rx="3.1" ry="4.4" transform="rotate(-6 14.5 8.5)" fill="currentColor" />
      <ellipse cx="21.5" cy="8.5" rx="3.1" ry="4.4" transform="rotate(6 21.5 8.5)" fill="currentColor" />
      <ellipse cx="27" cy="14" rx="3.1" ry="4.1" transform="rotate(20 27 14)" fill="currentColor" />
    </svg>
  );
}
