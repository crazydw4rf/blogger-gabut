import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatStretching({
  className,
  outline,
  style,
  width = 240,
  height = 140,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 140"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <g className={styles.animStretchTail}>
        <path
          d="M 195 75 C 215 50 225 20 205 10 C 190 2 180 20 188 45 C 192 58 185 70 178 78"
          className={styles.catBody}
        />
      </g>
      <path
        d="M 165 125 C 175 115 190 95 185 75 C 175 55 145 68 125 85 C 95 105 60 115 35 118 L 18 128 C 45 132 80 128 105 115 C 125 105 145 120 165 125 Z"
        className={styles.catBody}
      />
      <path d="M 190 122 C 195 105 195 85 180 75" className={styles.catLine} />
      <path
        d="M 145 68 C 165 60 180 65 182 82 C 165 82 152 75 145 68 Z"
        className={styles.catPatchGold}
      />

      <path d="M 75 115 L 20 125 C 12 126 12 135 22 135 L 70 130" className={styles.catBody} />
      <path d="M 18 128 L 28 128" className={styles.catLine} strokeWidth="1.8" />

      <g>
        <path d="M 65 92 L 68 70 Q 78 76 80 90 Z" className={styles.catBody} />
        <path d="M 68 88 L 70 75 Q 76 80 77 88 Z" className={styles.catEarInner} />
        <path d="M 82 88 L 96 72 Q 98 86 90 98 Z" className={styles.catBody} />
        <path d="M 85 88 L 93 78 Q 94 86 89 93 Z" className={styles.catEarInner} />

        <circle cx="72" cy="104" r="20" className={styles.catBody} />
        <path d="M 62 90 Q 72 98 82 90 Q 72 86 62 90 Z" className={styles.catPatchGold} />

        <path d="M 60 102 Q 65 97 70 102" className={styles.catLine} strokeWidth="2" />
        <path d="M 76 102 Q 81 97 86 102" className={styles.catLine} strokeWidth="2" />
        <polygon points="71,108 75,108 73,111" className={styles.catNose} />
        <path d="M 73 111 Q 70 114 67 113 M 73 111 Q 76 114 79 113" className={styles.catLine} strokeWidth="1.6" />
        <path d="M 58 108 L 38 106 M 58 112 L 40 115" className={styles.catWhisker} />
        <path d="M 85 108 L 102 106 M 84 112 L 100 115" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
