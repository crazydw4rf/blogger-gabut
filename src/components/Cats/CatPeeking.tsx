import React, { useId } from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatPeeking({
  className,
  outline,
  style,
  width = 160,
  height = 160,
}: CatProps): JSX.Element {
  const headClipId = useId();
  const bodyClipId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={headClipId}>
          <path d="M -40 4 C -42 -22 -24 -32 0 -32 C 24 -32 42 -22 40 4 C 38 24 22 33 0 33 C -22 33 -38 24 -40 4 Z" />
        </clipPath>
        <clipPath id={bodyClipId}>
          <path d="M -34 22 C -46 56 -56 92 -60 132 L 60 132 C 56 92 46 56 34 22 Z" />
        </clipPath>
      </defs>

      <g className={styles.animCornerPeek}>
        <g transform="translate(54, 126) rotate(45)">
          <path
            d="M -34 22 C -46 56 -56 92 -60 132 L 60 132 C 56 92 46 56 34 22 Z"
            className={styles.catBody}
          />
          <g clipPath={`url(#${bodyClipId})`}>
            <path d="M 10 34 C 34 38 50 58 46 84 C 28 84 12 66 10 34 Z" className={styles.catPatchRose} />
          </g>
          <path
            d="M -34 22 C -46 56 -56 92 -60 132 L 60 132 C 56 92 46 56 34 22 Z"
            className={styles.catStrokeOnly}
          />

          <g className={styles.animEarTwitchL} style={{ transformOrigin: "-22px -20px" }}>
            <path d="M -33 -10 L -39 -58 Q -18 -50 -11 -27 Z" className={styles.catBody} />
            <path d="M -30 -15 L -34 -46 Q -20 -41 -15 -26 Z" className={styles.catEarInner} />
          </g>

          <g className={styles.animEarTwitchR} style={{ transformOrigin: "22px -20px" }}>
            <path d="M 33 -10 L 39 -58 Q 18 -50 11 -27 Z" className={styles.catBody} />
            <path d="M 30 -15 L 34 -46 Q 20 -41 15 -26 Z" className={styles.catEarInner} />
          </g>

          <path
            d="M -40 4 C -42 -22 -24 -32 0 -32 C 24 -32 42 -22 40 4 C 38 24 22 33 0 33 C -22 33 -38 24 -40 4 Z"
            className={styles.catBody}
          />

          <g clipPath={`url(#${headClipId})`}>
            <path d="M -44 -34 C -18 -36 -4 -20 -10 -2 C -16 12 -34 14 -44 6 Z" className={styles.catPatchGold} />
            <path d="M -5 -32 L -4 -22 M 0 -33 L 0 -20 M 5 -32 L 4 -22" className={styles.catLine} />
          </g>

          <path
            d="M -40 4 C -42 -22 -24 -32 0 -32 C 24 -32 42 -22 40 4 C 38 24 22 33 0 33 C -22 33 -38 24 -40 4 Z"
            className={styles.catStrokeOnly}
          />

          <ellipse cx="-27" cy="11" rx="6" ry="3.4" className={styles.catBlush} />
          <ellipse cx="27" cy="11" rx="6" ry="3.4" className={styles.catBlush} />

          <path d="M -24 -16 Q -17 -20 -11 -16" className={styles.catLine} />
          <path d="M 11 -16 Q 17 -20 24 -16" className={styles.catLine} />

          <g className={styles.animBlink}>
            <ellipse cx="-17" cy="-4" rx="7.2" ry="8.4" className={styles.catEye} />
            <circle cx="-17" cy="-4.5" r="3.4" className={styles.catPupil} />
            <circle cx="-19.2" cy="-7.2" r="2.5" fill="#ffffff" />
            <circle cx="-14.2" cy="-1.6" r="1.2" fill="#ffffff" />

            <ellipse cx="17" cy="-4" rx="7.2" ry="8.4" className={styles.catEye} />
            <circle cx="17" cy="-4.5" r="3.4" className={styles.catPupil} />
            <circle cx="14.8" cy="-7.2" r="2.5" fill="#ffffff" />
            <circle cx="19.8" cy="-1.6" r="1.2" fill="#ffffff" />
          </g>

          <polygon points="-3.8,6 3.8,6 0,10.5" className={styles.catNose} />
          <path d="M 0 10.5 L 0 13 Q -4.5 17 -9 14.5 M 0 13 Q 4.5 17 9 14.5" className={styles.catLine} />

          <path d="M -34 1 L -56 -2 M -35 6 L -57 7 M -33 11 L -54 15" className={styles.catWhisker} />
          <path d="M 34 1 L 56 -2 M 35 6 L 57 7 M 33 11 L 54 15" className={styles.catWhisker} />

          <g>
            <ellipse cx="-25" cy="34" rx="13" ry="10.5" className={styles.catBody} />
            <path d="M -29 28 L -29 36 M -21 28 L -21 36" className={styles.catLine} />
          </g>
          <g>
            <ellipse cx="25" cy="34" rx="13" ry="10.5" className={styles.catBody} />
            <path d="M 21 28 L 21 36 M 29 28 L 29 36" className={styles.catLine} />
          </g>
        </g>
      </g>
    </svg>
  );
}
