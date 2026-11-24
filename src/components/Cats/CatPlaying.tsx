import React from "react";
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
      <g className={styles.animFlutter}>
        <path
          d="M 120 30 C 112 18 100 24 110 32 C 100 38 112 44 120 34 C 128 44 140 38 130 32 C 140 24 128 18 120 30 Z"
          className={styles.catPatchGold}
        />
        <circle cx="120" cy="32" r="2" className={styles.catNose} />
      </g>

      <path
        d="M 135 170 C 160 168 175 145 168 120 C 162 100 145 105 148 120"
        className={clsx(styles.catBody, styles.animTailSwish)}
      />

      <path
        d="M 72 110 C 65 135 60 165 65 190 L 88 190 C 92 175 100 160 120 165 C 135 168 140 185 142 192 L 160 190 C 158 165 148 140 135 125 C 125 110 115 100 95 105 Z"
        className={styles.catBody}
      />
      <path d="M 70 190 L 70 182 M 78 190 L 78 182" className={styles.catLine} strokeWidth="2" />
      <path d="M 148 190 L 148 182 M 154 190 L 154 182" className={styles.catLine} strokeWidth="2" />

      <path
        d="M 115 115 C 132 125 138 148 130 162 C 118 155 112 135 115 115 Z"
        className={styles.catPatchPine}
      />

      <path d="M 75 125 C 68 132 58 138 52 135 C 46 132 50 120 62 115 Z" className={styles.catBody} />

      <g>
        <path d="M 70 65 L 68 35 Q 85 45 92 62 Z" className={styles.catBody} />
        <path d="M 72 60 L 71 44 Q 82 50 86 60 Z" className={styles.catEarInner} />
        <path d="M 104 68 L 126 44 Q 125 64 114 76 Z" className={styles.catBody} />
        <path d="M 108 68 L 120 52 Q 120 64 114 72 Z" className={styles.catEarInner} />

        <circle cx="92" cy="80" r="24" className={styles.catBody} />
        <ellipse cx="84" cy="74" rx="6.5" ry="7.5" className={styles.catEyeLove} />
        <circle cx="86" cy="71" r="2.5" fill="#ffffff" />
        <circle cx="82" cy="76" r="1.2" fill="#ffffff" />
        <ellipse cx="104" cy="76" rx="6.5" ry="7.5" className={styles.catEyeLove} />
        <circle cx="106" cy="73" r="2.5" fill="#ffffff" />
        <circle cx="102" cy="78" r="1.2" fill="#ffffff" />

        <polygon points="93,84 97,84 95,87" className={styles.catNose} />
        <path d="M 95 87 Q 92 92 88 90 M 95 87 Q 98 92 102 90" className={styles.catLine} strokeWidth="1.8" />
        <path d="M 76 82 L 56 78 M 76 87 L 58 88" className={styles.catWhisker} />
        <path d="M 112 85 L 132 84 M 111 90 L 130 92" className={styles.catWhisker} />
      </g>

      <g className={styles.animBatPaw}>
        <path d="M 95 105 C 92 90 98 70 108 55 C 112 48 122 52 118 62 C 112 75 106 95 105 108 Z" className={styles.catBody} />
        <circle cx="114" cy="55" r="6" className={styles.catBody} />
        <path d="M 112 50 L 115 54 M 117 52 L 119 56" className={styles.catLine} strokeWidth="1.5" />
      </g>
    </svg>
  );
}
