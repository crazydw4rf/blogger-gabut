import React from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatRolling({
  className,
  outline,
  style,
  width = 210,
  height = 150,
}: CatProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 150"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <path
        d="M 165 118 C 188 122 205 112 198 92 C 190 80 180 92 172 105"
        className={styles.catBody}
      />

      <path
        d="M 65 125 C 95 140 155 138 172 115 C 182 98 168 78 145 78 C 118 78 88 95 65 105 Z"
        className={styles.catBody}
      />
      <path
        d="M 125 78 C 140 76 155 84 152 98 C 138 98 128 88 125 78 Z"
        className={styles.catPatchGold}
      />

      <g className={styles.animPawWiggle}>
        <path d="M 90 98 C 86 78 98 72 103 82 C 106 90 102 100 98 105" className={styles.catBody} />
        <path d="M 115 95 C 112 75 124 68 128 80 C 130 88 126 96 122 102" className={styles.catBody} />
        <path d="M 144 88 C 146 70 158 72 156 84 C 154 92 148 96 146 102" className={styles.catBody} />
      </g>

      <g>
        <path d="M 42 102 L 20 115 Q 28 128 46 120 Z" className={styles.catBody} />
        <path d="M 38 106 L 25 116 Q 30 124 42 118 Z" className={styles.catEarInner} />
        <path d="M 56 88 L 38 72 Q 30 88 44 98 Z" className={styles.catBody} />
        <path d="M 51 88 L 40 78 Q 34 88 43 94 Z" className={styles.catEarInner} />

        <circle cx="55" cy="110" r="24" className={styles.catBody} />
        <path d="M 40 105 Q 46 95 56 100 Q 50 112 40 105 Z" className={styles.catPatchGold} />

        <path d="M 44 108 Q 50 114 56 108" className={styles.catLine} strokeWidth="2.2" />
        <path d="M 60 108 Q 66 114 72 108" className={styles.catLine} strokeWidth="2.2" />
        <polygon points="57,117 61,117 59,114" className={styles.catNose} />
        <path d="M 59 114 Q 55 110 51 113 M 59 114 Q 63 110 67 113" className={styles.catLine} strokeWidth="1.8" />

        <path d="M 40 112 L 22 110 M 40 117 L 24 119" className={styles.catWhisker} />
        <path d="M 74 112 L 92 110 M 74 117 L 90 119" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
