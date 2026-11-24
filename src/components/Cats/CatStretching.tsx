import React, { useId } from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatStretching({
  className,
  outline,
  style,
  width = 240,
  height = 145,
}: CatProps): JSX.Element {
  const bodyClipId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 145"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 188 66 C 172 54 146 66 122 86 C 102 102 84 106 70 108 L 70 124 C 94 124 118 118 142 104 C 154 96 164 102 168 114 L 188 114 C 194 98 196 74 188 66 Z" />
        </clipPath>
      </defs>

      <g className={styles.animStretchTail} style={{ transformOrigin: "184px 64px" }}>
        <path
          d="M 184 66 C 204 52 216 26 202 14 C 192 6 180 14 184 26 C 187 34 194 28 194 22 C 199 26 196 48 178 62"
          className={styles.catBody}
        />
      </g>

      <path
        d="M 180 96 L 190 124 C 191 129 184 132 178 131 C 174 130 175 124 179 122 L 172 96 Z"
        className={styles.catBodyMuted}
      />

      <path
        d="M 188 66 C 172 54 146 66 122 86 C 102 102 84 106 70 108 L 70 124 C 94 124 118 118 142 104 C 154 96 164 102 168 114 L 188 114 C 194 98 196 74 188 66 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 142 62 C 164 56 184 62 188 82 C 170 86 152 78 142 62 Z" className={styles.catPatchGold} />
        <path d="M 102 92 C 118 82 132 88 130 104 C 116 108 104 102 102 92 Z" className={styles.catPatchRose} />
      </g>

      <path
        d="M 188 66 C 172 54 146 66 122 86 C 102 102 84 106 70 108 L 70 124 C 94 124 118 118 142 104 C 154 96 164 102 168 114 L 188 114 C 194 98 196 74 188 66 Z"
        className={styles.catStrokeOnly}
      />

      <path
        d="M 178 96 C 180 110 178 122 174 130 C 172 134 159 134 158 129 C 157 125 162 123 166 122 L 166 98"
        className={styles.catBody}
      />

      <path d="M 68 112 L 26 118 C 18 119 18 127 26 127 L 68 123" className={styles.catBodyMuted} />
      <path d="M 74 118 L 22 124 C 14 125 14 134 24 134 L 76 130" className={styles.catBody} />
      <path d="M 20 129 L 26 129" className={styles.catLine} />

      <g>
        <path d="M 54 90 L 48 64 Q 62 68 68 82 Z" className={styles.catBody} />
        <path d="M 56 85 L 52 71 Q 60 74 64 82 Z" className={styles.catEarInner} />
        <path d="M 90 90 L 96 64 Q 82 68 76 82 Z" className={styles.catBody} />
        <path d="M 88 85 L 92 71 Q 84 74 80 82 Z" className={styles.catEarInner} />

        <ellipse cx="72" cy="98" rx="22" ry="19" className={styles.catBody} />
        <ellipse cx="57" cy="103" rx="3.8" ry="2.2" className={styles.catBlush} />
        <ellipse cx="87" cy="103" rx="3.8" ry="2.2" className={styles.catBlush} />

        <path d="M 59 97 Q 64 93 69 97" className={styles.catLine} />
        <path d="M 75 97 Q 80 93 85 97" className={styles.catLine} />
        <polygon points="70,102 74,102 72,105" className={styles.catNose} />
        <path d="M 72 105 Q 69 108 66 107 M 72 105 Q 75 108 78 107" className={styles.catLine} />
        <path d="M 52 101 L 34 99 M 52 105 L 36 107" className={styles.catWhisker} />
        <path d="M 92 101 L 110 99 M 92 105 L 108 107" className={styles.catWhisker} />
      </g>
    </svg>
  );
}
