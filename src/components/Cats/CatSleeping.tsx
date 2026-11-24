import React, { useId } from "react";
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
  const bodyClipId = useId();

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
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 56 72 C 92 44 166 56 178 102 C 184 128 156 148 112 148 C 66 148 36 134 36 108 C 36 88 44 80 56 72 Z" />
        </clipPath>
      </defs>

      <text x="48" y="46" fontSize="13" className={styles.animZzz}>
        z
      </text>
      <text x="60" y="32" fontSize="16" className={styles.animZzz} style={{ animationDelay: "1s" }}>
        Z
      </text>
      <text x="74" y="18" fontSize="20" className={styles.animZzz} style={{ animationDelay: "2s" }}>
        Z
      </text>

      <g className={styles.animSleepBreathe} style={{ transformOrigin: "110px 146px" }}>
        <path
          d="M 56 72 C 92 44 166 56 178 102 C 184 128 156 148 112 148 C 66 148 36 134 36 108 C 36 88 44 80 56 72 Z"
          className={styles.catBody}
        />

        <g clipPath={`url(#${bodyClipId})`}>
          <path d="M 96 52 C 134 48 164 64 172 90 C 154 94 120 78 96 52 Z" className={styles.catPatchRose} />
          <path d="M 122 148 C 148 142 168 124 172 104 C 154 118 136 134 122 148 Z" className={styles.catPatchGold} />
        </g>

        <path
          d="M 56 72 C 92 44 166 56 178 102 C 184 128 156 148 112 148 C 66 148 36 134 36 108 C 36 88 44 80 56 72 Z"
          className={styles.catStrokeOnly}
        />

        <path
          d="M 164 116 C 174 134 146 148 106 148 C 80 148 64 140 66 132 C 68 126 78 128 96 134 C 126 140 152 130 152 116"
          className={styles.catBody}
        />

        <g>
          <path d="M 52 80 L 44 50 Q 62 54 68 72 Z" className={styles.catBody} />
          <path d="M 54 75 L 49 58 Q 61 61 65 72 Z" className={styles.catEarInner} />
          <path d="M 96 80 L 104 50 Q 86 54 80 72 Z" className={styles.catBody} />
          <path d="M 94 75 L 99 58 Q 87 61 83 72 Z" className={styles.catEarInner} />

          <ellipse cx="74" cy="94" rx="28" ry="24" className={styles.catBody} />
          <ellipse cx="56" cy="100" rx="4.5" ry="2.6" className={styles.catBlush} />
          <ellipse cx="92" cy="100" rx="4.5" ry="2.6" className={styles.catBlush} />

          <path d="M 58 93 Q 64 98 70 93" className={styles.catLine} />
          <path d="M 78 93 Q 84 98 90 93" className={styles.catLine} />
          <polygon points="72,100 76,100 74,103" className={styles.catNose} />
          <path d="M 74 103 Q 70 106 66 105 M 74 103 Q 78 106 82 105" className={styles.catLine} />

          <path d="M 50 97 L 30 95 M 49 102 L 31 104" className={styles.catWhisker} />
          <path d="M 98 97 L 118 95 M 99 102 L 117 104" className={styles.catWhisker} />

          <ellipse cx="64" cy="118" rx="12" ry="7.5" className={styles.catBody} />
          <path d="M 60 114 L 60 122 M 66 114 L 66 122" className={styles.catLine} />
        </g>
      </g>
    </svg>
  );
}
