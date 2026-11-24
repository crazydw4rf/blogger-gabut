import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatSitting({
  className,
  outline,
  style,
  width = 180,
  height = 200,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 200"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <path
        d="M 125 174 C 152 176 168 186 156 193 C 140 198 100 192 72 192 C 50 192 38 185 45 178 C 50 173 68 182 95 184 C 115 186 125 178 125 174 Z"
        className={clsx(styles.catBody, styles.animDrapeTail)}
      />

      <path
        d="M 72 82 C 60 102 52 145 62 186 L 132 186 C 145 158 140 115 120 86 C 108 72 88 70 72 82 Z"
        className={styles.catBody}
      />
      <path d="M 112 140 C 130 152 134 172 128 186" className={styles.catLine} strokeWidth="2.5" />
      <path d="M 65 186 C 62 170 66 150 78 140" className={styles.catLine} strokeWidth="2.5" />
      <path
        d="M 75 115 C 92 108 105 122 100 145 C 85 148 76 132 75 115 Z"
        className={styles.catPatchIris}
      />

      <g>
        <path d="M 68 46 L 52 16 Q 74 22 84 42 Z" className={styles.catBody} />
        <path d="M 68 42 L 58 26 Q 72 28 78 39 Z" className={styles.catEarInner} />
        <path d="M 106 42 L 128 18 Q 128 38 118 52 Z" className={styles.catBody} />
        <path d="M 108 42 L 120 28 Q 122 38 116 46 Z" className={styles.catEarInner} />

        <path
          d="M 66 58 C 55 68 55 82 70 86 C 85 90 105 90 120 86 C 135 82 135 68 124 58 C 115 48 75 48 66 58 Z"
          className={styles.catBody}
        />

        <g className={styles.animBlink}>
          <ellipse cx="80" cy="66" rx="7" ry="8.5" className={styles.catEye} />
          <circle cx="78" cy="63" r="2.6" fill="#ffffff" />
          <circle cx="82.5" cy="68" r="1.2" fill="#ffffff" />
          <ellipse cx="108" cy="66" rx="7" ry="8.5" className={styles.catEye} />
          <circle cx="106" cy="63" r="2.6" fill="#ffffff" />
          <circle cx="110.5" cy="68" r="1.2" fill="#ffffff" />
        </g>

        <polygon points="92,75 96,75 94,78" className={styles.catNose} />
        <path d="M 94 78 Q 90 82 85 80 M 94 78 Q 98 82 103 80" className={styles.catLine} strokeWidth="1.8" />
        <path d="M 70 73 L 45 70 M 69 79 L 43 81 M 70 84 L 48 88" className={styles.catWhisker} />
        <path d="M 118 73 L 143 70 M 119 79 L 145 81 M 118 84 L 140 88" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
