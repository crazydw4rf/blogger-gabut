import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatSleeping({
  className,
  outline,
  style,
  width = 200,
  height = 160,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 160"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <text x="50" y="42" fontSize="14" className={styles.animZzz}>
        z
      </text>
      <text
        x="62"
        y="28"
        fontSize="18"
        className={styles.animZzz}
        style={{ animationDelay: "1s" }}
      >
        Z
      </text>
      <text
        x="78"
        y="15"
        fontSize="22"
        className={styles.animZzz}
        style={{ animationDelay: "2s" }}
      >
        Z
      </text>

      <g className={styles.animSleepBreathe}>
        <path
          d="M 65 65 C 105 35 175 55 185 105 C 190 135 155 155 110 155 C 65 155 35 140 35 115 C 35 90 45 78 65 65 Z"
          className={styles.catBody}
        />
        <path
          d="M 100 52 C 135 48 165 62 172 88 C 158 92 125 78 100 52 Z"
          className={styles.catPatchRose}
        />
        <path
          d="M 125 152 C 150 145 168 128 170 108 C 155 125 138 140 125 152 Z"
          className={styles.catPatchGold}
        />

        <path
          d="M 165 118 C 185 135 145 152 105 152 C 70 152 45 140 45 125 C 45 115 52 110 60 115 C 68 120 58 135 95 138 C 130 140 155 128 148 115 Z"
          className={clsx(styles.catBody, styles.animTailSwish)}
        />

        <g>
          <path d="M 62 68 L 50 42 Q 68 48 76 62 Z" className={styles.catBody} />
          <path d="M 60 63 L 53 48 Q 66 52 70 60 Z" className={styles.catEarInner} />
          <path d="M 82 62 L 95 40 Q 102 54 94 68 Z" className={styles.catBody} />
          <path d="M 85 62 L 94 48 Q 98 56 93 64 Z" className={styles.catEarInner} />

          <circle cx="75" cy="85" r="28" className={styles.catBody} />
          <path d="M 65 60 Q 75 72 85 60 Q 75 56 65 60 Z" className={styles.catPatchRose} />

          <path d="M 62 84 Q 68 89 74 84" className={styles.catLine} strokeWidth="2.2" />
          <path d="M 84 84 Q 90 89 96 84" className={styles.catLine} strokeWidth="2.2" />
          <polygon points="78,92 82,92 80,95" className={styles.catNose} />
          <path d="M 80 95 Q 77 98 73 97 M 80 95 Q 83 98 87 97" className={styles.catLine} strokeWidth="1.8" />

          <path d="M 58 90 L 36 88 M 57 95 L 38 98" className={styles.catWhisker} />
          <path d="M 98 90 L 118 88 M 99 95 L 116 98" className={styles.catWhisker} />

          <ellipse cx="85" cy="112" rx="11" ry="7" className={styles.catBody} />
          <path d="M 82 107 L 82 115 M 88 107 L 88 115" className={styles.catLine} strokeWidth="1.8" />
        </g>
      </g>
    </svg>
  );
}
