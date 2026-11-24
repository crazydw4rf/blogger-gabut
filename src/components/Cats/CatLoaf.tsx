import React, { useId } from "react";
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
  const bodyClipId = useId();

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
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 40 124 C 34 100 46 66 86 60 C 128 54 160 72 162 106 C 163 120 154 126 140 126 L 54 126 C 45 126 41 126 40 124 Z" />
        </clipPath>
      </defs>

      <path
        d="M 40 124 C 34 100 46 66 86 60 C 128 54 160 72 162 106 C 163 120 154 126 140 126 L 54 126 C 45 126 41 126 40 124 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 96 56 C 124 54 150 66 154 88 C 134 90 112 80 96 56 Z" className={styles.catPatchRose} />
        <path d="M 86 126 C 84 106 102 98 118 106 C 124 114 120 126 112 126 Z" className={styles.catPatchGold} />
      </g>

      <path
        d="M 40 124 C 34 100 46 66 86 60 C 128 54 160 72 162 106 C 163 120 154 126 140 126 L 54 126 C 45 126 41 126 40 124 Z"
        className={styles.catStrokeOnly}
      />

      <g className={styles.animLoafTail} style={{ transformOrigin: "156px 118px" }}>
        <path
          d="M 156 112 C 170 112 172 126 156 128 L 128 128 C 120 128 120 118 128 118 L 152 118"
          className={styles.catBody}
        />
      </g>

      <path d="M 44 126 C 44 114 62 114 64 126 Z" className={styles.catBody} />
      <path d="M 62 126 C 64 114 82 114 82 126 Z" className={styles.catBody} />
      <path d="M 52 120 L 52 125 M 73 120 L 73 125" className={styles.catLine} />

      <g>
        <g className={styles.animEarTwitchL} style={{ transformOrigin: "48px 56px" }}>
          <path d="M 38 66 L 32 30 Q 50 34 58 52 Z" className={styles.catBody} />
          <path d="M 40 60 L 37 39 Q 49 42 54 53 Z" className={styles.catEarInner} />
        </g>
        <path d="M 86 66 L 92 30 Q 74 34 66 52 Z" className={styles.catBody} />
        <path d="M 84 60 L 87 39 Q 75 42 70 53 Z" className={styles.catEarInner} />

        <ellipse cx="62" cy="74" rx="28" ry="24" className={styles.catBody} />
        <ellipse cx="44" cy="80" rx="4.5" ry="2.8" className={styles.catBlush} />
        <ellipse cx="80" cy="80" rx="4.5" ry="2.8" className={styles.catBlush} />

        <path d="M 47 73 Q 53 68 59 73" className={styles.catLine} />
        <path d="M 65 73 Q 71 68 77 73" className={styles.catLine} />

        <polygon points="60,79 64,79 62,82.5" className={styles.catNose} />
        <path d="M 62 82.5 Q 58 86 54 84 M 62 82.5 Q 66 86 70 84" className={styles.catLine} />

        <path d="M 38 77 L 18 75 M 37 82 L 19 84" className={styles.catWhisker} />
        <path d="M 86 77 L 106 75 M 87 82 L 105 84" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
