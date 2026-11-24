import React, { useId } from "react";
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
  const bodyClipId = useId();

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
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 62 118 C 86 138 148 138 168 118 C 180 106 176 86 154 82 C 130 78 98 86 72 96 C 60 100 56 110 62 118 Z" />
        </clipPath>
      </defs>

      <g className={styles.animTailSwish} style={{ transformOrigin: "166px 110px" }}>
        <path
          d="M 164 114 C 186 116 202 102 196 86 C 192 76 180 80 182 90 C 184 98 176 106 164 106"
          className={styles.catBody}
        />
      </g>

      <path d="M 146 86 C 150 70 162 68 162 80 C 162 88 156 92 152 96" className={styles.catBodyMuted} />
      <path d="M 88 94 C 82 76 94 70 100 80 C 103 86 100 94 96 98" className={styles.catBodyMuted} />

      <path
        d="M 62 118 C 86 138 148 138 168 118 C 180 106 176 86 154 82 C 130 78 98 86 72 96 C 60 100 56 110 62 118 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 122 80 C 144 78 164 86 166 102 C 148 104 130 96 122 80 Z" className={styles.catPatchGold} />
        <path d="M 84 128 C 100 116 124 116 138 132 C 118 138 96 136 84 128 Z" className={styles.catPatchIris} />
      </g>

      <path
        d="M 62 118 C 86 138 148 138 168 118 C 180 106 176 86 154 82 C 130 78 98 86 72 96 C 60 100 56 110 62 118 Z"
        className={styles.catStrokeOnly}
      />

      <path d="M 108 102 Q 116 96 124 102" className={styles.catLine} />

      <g className={styles.animPawWiggle} style={{ transformOrigin: "102px 98px" }}>
        <path d="M 98 98 C 94 78 106 72 112 82 C 115 88 110 98 106 104" className={styles.catBody} />
        <path d="M 103 78 L 105 83" className={styles.catLine} />
      </g>
      <g className={styles.animPawWiggleAlt} style={{ transformOrigin: "140px 98px" }}>
        <path d="M 136 96 C 136 76 150 74 152 86 C 152 94 146 100 142 104" className={styles.catBody} />
        <path d="M 143 80 L 144 85" className={styles.catLine} />
      </g>

      <g transform="translate(56, 102) rotate(-18)">
        <path d="M -20 -8 L -24 -34 Q -8 -30 -4 -14 Z" className={styles.catBody} />
        <path d="M -18 -11 L -20 -27 Q -10 -24 -7 -14 Z" className={styles.catEarInner} />
        <path d="M 20 -8 L 24 -34 Q 8 -30 4 -14 Z" className={styles.catBody} />
        <path d="M 18 -11 L 20 -27 Q 10 -24 7 -14 Z" className={styles.catEarInner} />

        <ellipse cx="0" cy="0" rx="24" ry="21" className={styles.catBody} />
        <ellipse cx="-14" cy="5" rx="4" ry="2.4" className={styles.catBlush} />
        <ellipse cx="14" cy="5" rx="4" ry="2.4" className={styles.catBlush} />

        <path d="M -13 -1 Q -8 -6 -3 -1" className={styles.catLine} />
        <path d="M 3 -1 Q 8 -6 13 -1" className={styles.catLine} />
        <polygon points="-2.5,4 2.5,4 0,7.5" className={styles.catNose} />
        <path d="M 0 7.5 Q -4 11 -8 9 M 0 7.5 Q 4 11 8 9" className={styles.catLine} />

        <path d="M -18 2 L -34 0 M -18 7 L -32 9" className={styles.catWhisker} />
        <path d="M 18 2 L 34 0 M 18 7 L 32 9" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
