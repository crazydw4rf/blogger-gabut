import React, { useId } from "react";
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
  const bodyClipId = useId();

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
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 48 84 C 66 72 114 70 150 78 C 166 82 172 94 168 106 C 162 118 144 120 112 118 C 78 116 54 116 44 104 C 38 96 41 88 48 84 Z" />
        </clipPath>
      </defs>

      <g className={styles.animWalkTail} style={{ transformOrigin: "48px 86px" }}>
        <path
          d="M 48 88 C 30 78 18 52 26 28 C 32 12 48 14 48 26 C 48 34 38 36 37 28 C 36 22 30 28 32 46 C 34 62 44 76 54 84"
          className={styles.catBody}
        />
      </g>

      <g className={styles.animWalkStepB} style={{ transformOrigin: "68px 106px" }}>
        <path
          d="M 62 104 L 74 138 C 76 144 84 145 86 141 C 88 138 83 134 80 132 L 72 104 Z"
          className={styles.catBodyMuted}
        />
      </g>
      <g className={styles.animWalkStepA} style={{ transformOrigin: "152px 106px" }}>
        <path
          d="M 146 106 L 158 138 C 160 144 168 145 170 141 C 172 138 167 134 164 132 L 156 104 Z"
          className={styles.catBodyMuted}
        />
      </g>

      <path
        d="M 48 84 C 66 72 114 70 150 78 C 166 82 172 94 168 106 C 162 118 144 120 112 118 C 78 116 54 116 44 104 C 38 96 41 88 48 84 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 84 70 C 106 68 128 74 132 92 C 112 94 94 86 84 70 Z" className={styles.catPatchRose} />
        <path d="M 52 80 C 68 74 78 82 74 96 C 62 96 54 88 52 80 Z" className={styles.catPatchGold} />
      </g>

      <path
        d="M 48 84 C 66 72 114 70 150 78 C 166 82 172 94 168 106 C 162 118 144 120 112 118 C 78 116 54 116 44 104 C 38 96 41 88 48 84 Z"
        className={styles.catStrokeOnly}
      />

      <g className={styles.animWalkStepA} style={{ transformOrigin: "56px 104px" }}>
        <path
          d="M 50 98 C 46 112 46 126 42 138 C 40 144 48 146 53 144 C 56 142 54 136 56 126 L 64 106"
          className={styles.catBody}
        />
      </g>
      <g className={styles.animWalkStepB} style={{ transformOrigin: "142px 106px" }}>
        <path
          d="M 136 106 L 130 138 C 129 144 137 146 142 144 C 145 142 143 136 144 128 L 148 108"
          className={styles.catBody}
        />
      </g>

      <g>
        <path d="M 176 54 L 188 30 Q 196 42 190 58 Z" className={styles.catBody} />
        <path d="M 179 53 L 187 37 Q 192 44 188 55 Z" className={styles.catEarInner} />

        <g className={styles.animEarTwitchL} style={{ transformOrigin: "163px 56px" }}>
          <path d="M 154 62 L 154 28 Q 170 36 172 56 Z" className={styles.catBody} />
          <path d="M 157 57 L 157 37 Q 167 42 168 54 Z" className={styles.catEarInner} />
        </g>

        <ellipse cx="174" cy="72" rx="24" ry="21" className={styles.catBody} />
        <ellipse cx="182" cy="78" rx="4" ry="2.5" className={styles.catBlush} />

        <g className={styles.animBlink}>
          <ellipse cx="182" cy="68" rx="4.5" ry="5.8" className={styles.catEye} />
          <circle cx="183.5" cy="66" r="1.8" fill="#ffffff" />
        </g>

        <polygon points="193,74 198,74 196,77.5" className={styles.catNose} />
        <path d="M 196 77.5 Q 192 82 187 80" className={styles.catLine} />
        <path d="M 192 77 L 212 74 M 192 81 L 210 84" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
