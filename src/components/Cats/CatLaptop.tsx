import React, { useId } from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatLaptop({
  className,
  outline,
  style,
  width = 220,
  height = 165,
}: CatProps): JSX.Element {
  const bodyClipId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 165"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 52 94 C 42 112 42 138 52 152 L 132 152 C 142 136 140 110 126 94 Z" />
        </clipPath>
      </defs>

      <g className={styles.animDrapeTail} style={{ transformOrigin: "48px 136px" }}>
        <path
          d="M 48 142 C 26 140 14 122 20 104 C 24 92 36 96 34 106 C 32 116 38 130 50 132"
          className={styles.catBody}
        />
      </g>

      <path d="M 52 94 C 42 112 42 138 52 152 L 132 152 C 142 136 140 110 126 94 Z" className={styles.catBody} />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 46 106 C 68 102 82 116 78 138 C 64 142 48 134 44 120 Z" className={styles.catPatchPine} />
      </g>

      <path d="M 52 94 C 42 112 42 138 52 152 L 132 152 C 142 136 140 110 126 94 Z" className={styles.catStrokeOnly} />

      <g>
        <g className={styles.animEarTwitchL} style={{ transformOrigin: "70px 48px" }}>
          <path d="M 64 60 L 54 24 Q 72 28 80 46 Z" className={styles.catBody} />
          <path d="M 65 53 L 59 33 Q 71 36 76 47 Z" className={styles.catEarInner} />
        </g>
        <g className={styles.animEarTwitchR} style={{ transformOrigin: "110px 48px" }}>
          <path d="M 116 60 L 126 24 Q 108 28 100 46 Z" className={styles.catBody} />
          <path d="M 115 53 L 121 33 Q 109 36 104 47 Z" className={styles.catEarInner} />
        </g>

        <ellipse cx="90" cy="68" rx="30" ry="25" className={styles.catBody} />
        <ellipse cx="69" cy="75" rx="4.5" ry="2.6" className={styles.catBlush} />
        <ellipse cx="111" cy="75" rx="4.5" ry="2.6" className={styles.catBlush} />

        <g className={styles.animBlink}>
          <ellipse cx="80" cy="66" rx="5.2" ry="6.2" className={styles.catEye} />
          <circle cx="81.8" cy="64" r="1.9" fill="#ffffff" />
          <ellipse cx="104" cy="66" rx="5.2" ry="6.2" className={styles.catEye} />
          <circle cx="105.8" cy="64" r="1.9" fill="#ffffff" />
        </g>

        <circle cx="79" cy="66" r="9.5" className={styles.catLine} />
        <circle cx="103" cy="66" r="9.5" className={styles.catLine} />
        <path d="M 88.5 66 L 93.5 66" className={styles.catLine} />

        <polygon points="88.5,74 93.5,74 91,77.5" className={styles.catNose} />
        <path d="M 91 77.5 Q 87 81 83 79 M 91 77.5 Q 95 81 99 79" className={styles.catLine} />
        <path d="M 62 72 L 42 70 M 62 77 L 44 79" className={styles.catWhisker} />
        <path d="M 118 72 L 138 70 M 118 77 L 136 79" className={styles.catWhisker} />
      </g>

      <g className={styles.animTypePawL}>
        <ellipse cx="82" cy="136" rx="10" ry="6.5" className={styles.catBody} />
      </g>
      <g className={styles.animTypePawR}>
        <ellipse cx="108" cy="136" rx="10" ry="6.5" className={styles.catBody} />
      </g>

      <path d="M 74 142 L 146 142 L 154 152 L 66 152 Z" className={styles.catLaptopBase} />
      <path
        d="M 142 142 L 156 88 C 157 84 161 82 165 82 L 198 82 C 202 82 204 86 203 90 L 188 148 C 187 151 184 152 180 152 L 146 152 Z"
        className={styles.catLaptopLid}
      />
      <path d="M 166 112 L 174 118 L 166 124 M 177 124 L 185 124" className={styles.catTerminalGlyph} />
    </svg>
  );
}
