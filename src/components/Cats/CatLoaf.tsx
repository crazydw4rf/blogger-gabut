import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatLoaf({
  className,
  outline,
  style,
  width = 180,
  height = 140,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 140"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <path
        d="M 155 110 C 168 112 172 125 158 132 C 140 135 120 135 105 135"
        className={clsx(styles.catBody, styles.animLoafTail)}
        strokeWidth="4"
      />

      <path
        d="M 55 75 C 65 60 115 58 145 70 C 168 80 172 105 165 124 C 158 135 130 136 85 136 C 45 136 32 130 35 112 C 38 95 45 85 55 75 Z"
        className={styles.catBody}
      />
      <path
        d="M 105 60 C 128 58 148 68 152 88 C 135 88 118 78 105 60 Z"
        className={styles.catPatchRose}
      />
      <path
        d="M 75 136 C 60 120 62 105 78 98 C 88 115 90 128 75 136 Z"
        className={styles.catPatchGold}
      />

      <g>
        <g className={styles.animEarTwitchL}>
          <path d="M 42 45 L 30 15 Q 50 18 60 38 Z" className={styles.catBody} />
          <path d="M 42 40 L 35 24 Q 48 26 53 38 Z" className={styles.catEarInner} />
        </g>
        <path d="M 78 40 L 92 16 Q 100 32 94 48 Z" className={styles.catBody} />
        <path d="M 82 40 L 91 24 Q 96 34 91 44 Z" className={styles.catEarInner} />

        <circle cx="66" cy="65" r="26" className={styles.catBody} />
        <path d="M 40 68 Q 32 75 42 82" className={styles.catBody} />
        <path d="M 92 68 Q 100 75 90 82" className={styles.catBody} />
        <circle cx="66" cy="65" r="26" className={styles.catBody} />

        <path d="M 52 63 Q 58 68 64 63" className={styles.catLine} strokeWidth="2.2" />
        <circle cx="58" cy="61" r="1.8" className={styles.catEye} />
        <path d="M 69 63 Q 75 68 81 63" className={styles.catLine} strokeWidth="2.2" />
        <circle cx="75" cy="61" r="1.8" className={styles.catEye} />

        <polygon points="65,71 68,71 66.5,74" className={styles.catNose} />
        <path d="M 66.5 74 Q 63 77 59 75 M 66.5 74 Q 70 77 74 75" className={styles.catLine} strokeWidth="1.8" />

        <path d="M 48 72 L 26 70 M 47 77 L 28 80" className={styles.catWhisker} />
        <path d="M 85 72 L 106 70 M 86 77 L 105 80" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
