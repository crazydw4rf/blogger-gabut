import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatPeeking({
  className,
  outline,
  style,
  width = 160,
  height = 120,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 120"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <g className={styles.animEarTwitchL}>
        <path d="M 32 46 L 16 10 Q 36 14 50 36 Z" className={styles.catBody} />
        <path d="M 31 40 L 22 20 Q 36 22 43 36 Z" className={styles.catEarInner} />
      </g>
      <g className={styles.animEarTwitchR}>
        <path d="M 128 46 L 144 10 Q 124 14 110 36 Z" className={styles.catBody} />
        <path d="M 129 40 L 138 20 Q 124 22 117 36 Z" className={styles.catEarInner} />
      </g>
      <path
        d="M 30 46 C 18 70 30 98 55 106 C 70 110 90 110 105 106 C 130 98 142 70 130 46 C 105 38 55 38 30 46 Z"
        className={styles.catBody}
      />
      <path
        d="M 35 48 C 30 65 38 82 50 82 C 64 82 66 52 52 42 Z"
        className={styles.catPatchGold}
      />
      <g className={styles.animBlink}>
        <ellipse cx="54" cy="70" rx="7" ry="8.5" className={styles.catEye} />
        <circle cx="52" cy="67.5" r="2.5" fill="#ffffff" />
        <circle cx="56.5" cy="72" r="1.2" fill="#ffffff" />
        <ellipse cx="106" cy="70" rx="7" ry="8.5" className={styles.catEye} />
        <circle cx="104" cy="67.5" r="2.5" fill="#ffffff" />
        <circle cx="108.5" cy="72" r="1.2" fill="#ffffff" />
      </g>
      <polygon points="77,78 83,78 80,82" className={styles.catNose} />
      <path d="M 80 82 L 80 86 Q 75 90 69 88 M 80 86 Q 85 90 91 88" className={styles.catLine} />
      <path d="M 40 76 L 12 72 M 38 82 L 10 84 M 40 88 L 14 96" className={styles.catWhisker} />
      <path d="M 120 76 L 148 72 M 122 82 L 150 84 M 120 88 L 146 96" className={styles.catWhisker} />
      <g>
        <path d="M 35 120 C 35 102 57 102 57 120 Z" className={styles.catBody} />
        <path d="M 42 110 L 42 120 M 50 110 L 50 120" className={styles.catLine} strokeWidth="2" />
      </g>
      <g>
        <path d="M 103 120 C 103 102 125 102 125 120 Z" className={styles.catBody} />
        <path d="M 110 110 L 110 120 M 118 110 L 118 120" className={styles.catLine} strokeWidth="2" />
      </g>
    </svg>
  );
}
