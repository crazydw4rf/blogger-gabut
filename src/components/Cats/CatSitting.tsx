import React, { useId } from "react";
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
  const bodyClipId = useId();

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
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 68 92 C 50 116 48 156 58 186 L 126 186 C 136 156 134 116 116 92 Z" />
        </clipPath>
      </defs>

      <g className={styles.animDrapeTail} style={{ transformOrigin: "124px 170px" }}>
        <path
          d="M 122 174 C 146 172 162 158 160 140 C 158 126 144 128 145 140 C 146 152 136 164 122 165 Z"
          className={styles.catBody}
        />
      </g>

      <path
        d="M 68 92 C 50 116 48 156 58 186 L 126 186 C 136 156 134 116 116 92 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 50 112 C 72 106 86 122 82 146 C 72 154 54 146 48 134 Z" className={styles.catPatchIris} />
        <path d="M 108 134 C 122 126 136 138 136 162 C 122 168 108 156 108 134 Z" className={styles.catPatchRose} />
      </g>

      <path
        d="M 68 92 C 50 116 48 156 58 186 L 126 186 C 136 156 134 116 116 92 Z"
        className={styles.catStrokeOnly}
      />

      <path d="M 56 152 C 62 142 72 144 74 158" className={styles.catLine} />
      <path d="M 128 152 C 122 142 112 144 110 158" className={styles.catLine} />

      <path d="M 78 124 L 74 176 C 72 184 78 188 86 188 C 91 188 92 184 92 178 L 92 128" className={styles.catBody} />
      <path d="M 106 124 L 110 176 C 112 184 106 188 98 188 C 93 188 92 184 92 178 L 92 128" className={styles.catBody} />
      <path d="M 79 182 L 79 187 M 84 182 L 84 187" className={styles.catLine} />
      <path d="M 100 182 L 100 187 M 105 182 L 105 187" className={styles.catLine} />
      <path d="M 84 100 Q 92 108 100 100" className={styles.catLine} />

      <g>
        <g className={styles.animEarTwitchL} style={{ transformOrigin: "70px 48px" }}>
          <path d="M 62 60 L 52 20 Q 72 24 82 46 Z" className={styles.catBody} />
          <path d="M 64 53 L 58 30 Q 71 32 77 46 Z" className={styles.catEarInner} />
        </g>
        <g className={styles.animEarTwitchR} style={{ transformOrigin: "114px 48px" }}>
          <path d="M 122 60 L 132 20 Q 112 24 102 46 Z" className={styles.catBody} />
          <path d="M 120 53 L 126 30 Q 113 32 107 46 Z" className={styles.catEarInner} />
        </g>

        <ellipse cx="92" cy="68" rx="34" ry="28" className={styles.catBody} />
        <ellipse cx="68" cy="76" rx="5.5" ry="3.2" className={styles.catBlush} />
        <ellipse cx="116" cy="76" rx="5.5" ry="3.2" className={styles.catBlush} />

        <g className={styles.animBlink}>
          <ellipse cx="78" cy="66" rx="5.8" ry="7" className={styles.catEye} />
          <circle cx="76.2" cy="63.8" r="2.1" fill="#ffffff" />
          <circle cx="79.8" cy="68" r="1" fill="#ffffff" />
          <ellipse cx="106" cy="66" rx="5.8" ry="7" className={styles.catEye} />
          <circle cx="104.2" cy="63.8" r="2.1" fill="#ffffff" />
          <circle cx="107.8" cy="68" r="1" fill="#ffffff" />
        </g>

        <polygon points="89,74 95,74 92,78" className={styles.catNose} />
        <path d="M 92 78 L 92 80 Q 88 84 84 82 M 92 80 Q 96 84 100 82" className={styles.catLine} />
        <path d="M 62 72 L 40 69 M 61 77 L 39 78 M 63 82 L 42 86" className={styles.catWhisker} />
        <path d="M 122 72 L 144 69 M 123 77 L 145 78 M 121 82 L 142 86" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
