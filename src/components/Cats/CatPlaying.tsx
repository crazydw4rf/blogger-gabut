import React, { useId } from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatPlaying({
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
          <path d="M 64 110 C 52 134 52 166 64 186 L 136 186 C 148 164 142 130 124 110 C 110 98 78 98 64 110 Z" />
        </clipPath>
      </defs>

      <g className={styles.animFlutter}>
        <path
          d="M 140 34 C 130 20 116 26 128 36 C 118 44 132 50 140 38 C 148 50 162 44 152 36 C 164 26 150 20 140 34 Z"
          className={styles.catPatchGold}
        />
        <circle cx="140" cy="35" r="2.2" className={styles.catNose} />
      </g>

      <g className={styles.animTailSwish} style={{ transformOrigin: "136px 164px" }}>
        <path
          d="M 134 168 C 158 166 170 144 164 122 C 160 108 146 112 148 124 C 150 136 144 156 132 160"
          className={styles.catBody}
        />
      </g>

      <path
        d="M 64 110 C 52 134 52 166 64 186 L 136 186 C 148 164 142 130 124 110 C 110 98 78 98 64 110 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 104 114 C 128 118 142 142 136 168 C 118 164 104 142 104 114 Z" className={styles.catPatchPine} />
      </g>

      <path
        d="M 64 110 C 52 134 52 166 64 186 L 136 186 C 148 164 142 130 124 110 C 110 98 78 98 64 110 Z"
        className={styles.catStrokeOnly}
      />

      <path d="M 74 134 L 72 178 C 71 184 78 188 86 186 C 90 184 90 178 88 172 L 88 134" className={styles.catBody} />
      <path d="M 78 181 L 78 186 M 83 181 L 83 186" className={styles.catLine} />

      <path d="M 114 186 C 114 176 132 176 134 186 Z" className={styles.catBody} />
      <path d="M 122 181 L 122 186 M 127 181 L 127 186" className={styles.catLine} />

      <g transform="translate(84, 84) rotate(-10)">
        <path d="M -22 -10 L -26 -38 Q -8 -34 -3 -16 Z" className={styles.catBody} />
        <path d="M -19 -14 L -22 -30 Q -10 -27 -6 -16 Z" className={styles.catEarInner} />
        <path d="M 22 -10 L 26 -38 Q 8 -34 3 -16 Z" className={styles.catBody} />
        <path d="M 19 -14 L 22 -30 Q 10 -27 6 -16 Z" className={styles.catEarInner} />

        <ellipse cx="0" cy="0" rx="26" ry="22" className={styles.catBody} />
        <ellipse cx="-16" cy="5" rx="4.2" ry="2.5" className={styles.catBlush} />
        <ellipse cx="16" cy="5" rx="4.2" ry="2.5" className={styles.catBlush} />

        <g className={styles.animBlink}>
          <ellipse cx="-10" cy="-3" rx="5.5" ry="6.5" className={styles.catEyeLove} />
          <circle cx="-8.5" cy="-5.5" r="2.2" fill="#ffffff" />
          <circle cx="-11.5" cy="-1" r="1" fill="#ffffff" />
          <ellipse cx="10" cy="-3" rx="5.5" ry="6.5" className={styles.catEyeLove} />
          <circle cx="11.5" cy="-5.5" r="2.2" fill="#ffffff" />
          <circle cx="8.5" cy="-1" r="1" fill="#ffffff" />
        </g>

        <polygon points="-2.5,4 2.5,4 0,7.5" className={styles.catNose} />
        <path d="M 0 7.5 Q -4 11 -8 9 M 0 7.5 Q 4 11 8 9" className={styles.catLine} />
        <path d="M -20 2 L -38 0 M -20 7 L -36 9" className={styles.catWhisker} />
        <path d="M 20 2 L 38 0 M 20 7 L 36 9" className={styles.catWhisker} />
      </g>

      <g className={styles.animBatPaw} style={{ transformOrigin: "116px 122px" }}>
        <path
          d="M 110 122 C 122 104 134 86 138 68 C 140 60 150 62 148 72 C 144 92 132 112 122 128 Z"
          className={styles.catBody}
        />
        <circle cx="143" cy="65" r="7" className={styles.catBody} />
        <path d="M 140 61 L 142 65 M 146 62 L 146 66" className={styles.catLine} />
      </g>
    </svg>
  );
}
