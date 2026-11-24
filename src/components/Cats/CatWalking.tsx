import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatWalking({
  className,
  outline,
  style,
  width = 220,
  height = 160,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 160"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <path
        d="M 42 90 C 22 75 12 45 28 22 C 40 8 56 16 48 34 C 40 48 44 72 55 88"
        className={clsx(styles.catBody, styles.animWalkTail)}
      />

      <path d="M 74 110 L 68 148 L 78 148 L 88 120" className={styles.catBody} />
      <path d="M 160 110 L 172 144 L 182 144 L 176 112" className={styles.catBody} />

      <path
        d="M 45 86 C 60 72 110 68 150 76 C 172 80 182 92 184 102 C 180 115 168 122 148 122 C 110 122 72 120 48 110 C 38 102 38 94 45 86 Z"
        className={styles.catBody}
      />
      <path
        d="M 85 72 C 105 68 130 72 135 88 C 115 88 98 82 85 72 Z"
        className={styles.catPatchRose}
      />
      <path
        d="M 60 82 C 72 78 80 82 78 95 C 68 94 62 88 60 82 Z"
        className={styles.catPatchGold}
      />

      <path d="M 54 102 L 45 142 L 56 142 L 68 112" className={styles.catBody} />
      <path d="M 142 108 L 134 146 L 145 146 L 155 110" className={styles.catBody} />

      <g>
        <path d="M 168 62 L 175 32 Q 190 40 192 60 Z" className={styles.catBody} />
        <path d="M 172 58 L 178 40 Q 188 46 188 58 Z" className={styles.catEarInner} />
        <path d="M 196 62 L 214 38 Q 218 56 208 70 Z" className={styles.catBody} />
        <path d="M 198 62 L 210 46 Q 214 58 206 66 Z" className={styles.catEarInner} />

        <circle cx="188" cy="75" r="24" className={styles.catBody} />
        <ellipse cx="194" cy="70" rx="5.5" ry="7" className={styles.catEye} />
        <circle cx="196" cy="68" r="2" fill="#ffffff" />

        <polygon points="208,78 212,78 210,81" className={styles.catNose} />
        <path d="M 210 81 Q 206 85 201 83" className={styles.catLine} strokeWidth="1.8" />
        <path d="M 204 78 L 222 75 M 204 83 L 220 86" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
