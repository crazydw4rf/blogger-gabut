import React, { useId } from "react";
import clsx from "clsx";
import type { CatProps } from "./types";
import styles from "./cats.module.css";

export default function CatYarn({
  className,
  outline,
  style,
  width = 220,
  height = 155,
}: CatProps): JSX.Element {
  const bodyClipId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 155"
      width={width}
      height={height}
      style={style}
      className={clsx(styles.catVector, outline && styles.catOutline, className)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={bodyClipId}>
          <path d="M 48 88 C 66 68 106 72 132 94 C 142 104 144 120 134 132 L 54 132 C 40 124 38 100 48 88 Z" />
        </clipPath>
      </defs>

      <g className={styles.animWalkTail} style={{ transformOrigin: "48px 92px" }}>
        <path
          d="M 48 96 C 28 84 18 60 28 42 C 34 32 46 38 42 48 C 38 58 42 78 54 88"
          className={styles.catBody}
        />
      </g>

      <path
        d="M 48 88 C 66 68 106 72 132 94 C 142 104 144 120 134 132 L 54 132 C 40 124 38 100 48 88 Z"
        className={styles.catBody}
      />

      <g clipPath={`url(#${bodyClipId})`}>
        <path d="M 54 78 C 76 72 98 82 100 100 C 82 104 62 94 54 78 Z" className={styles.catPatchIris} />
      </g>

      <path
        d="M 48 88 C 66 68 106 72 132 94 C 142 104 144 120 134 132 L 54 132 C 40 124 38 100 48 88 Z"
        className={styles.catStrokeOnly}
      />

      <path d="M 46 136 C 46 124 68 124 70 136 Z" className={styles.catBody} />
      <path d="M 55 130 L 55 135 M 61 130 L 61 135" className={styles.catLine} />
      <path d="M 106 136 C 106 124 126 124 128 136 Z" className={styles.catBodyMuted} />

      <g>
        <g className={styles.animEarTwitchL} style={{ transformOrigin: "114px 70px" }}>
          <path d="M 108 78 L 102 48 Q 118 52 124 68 Z" className={styles.catBody} />
          <path d="M 110 73 L 106 56 Q 117 59 120 69 Z" className={styles.catEarInner} />
        </g>
        <g className={styles.animEarTwitchR} style={{ transformOrigin: "142px 70px" }}>
          <path d="M 148 78 L 154 48 Q 138 52 132 68 Z" className={styles.catBody} />
          <path d="M 146 73 L 150 56 Q 139 59 136 69 Z" className={styles.catEarInner} />
        </g>

        <ellipse cx="128" cy="88" rx="24" ry="21" className={styles.catBody} />
        <ellipse cx="114" cy="94" rx="4" ry="2.4" className={styles.catBlush} />
        <ellipse cx="142" cy="94" rx="4" ry="2.4" className={styles.catBlush} />

        <g className={styles.animBlink}>
          <ellipse cx="122" cy="87" rx="4.8" ry="5.8" className={styles.catEyeLove} />
          <circle cx="123.8" cy="85.2" r="1.8" fill="#ffffff" />
          <ellipse cx="139" cy="87" rx="4.8" ry="5.8" className={styles.catEyeLove} />
          <circle cx="140.8" cy="85.2" r="1.8" fill="#ffffff" />
        </g>

        <polygon points="129,93 134,93 131.5,96" className={styles.catNose} />
        <path d="M 131.5 96 Q 128 99 125 98 M 131.5 96 Q 135 99 138 98" className={styles.catLine} />
        <path d="M 106 91 L 88 89 M 106 95 L 90 97" className={styles.catWhisker} />
        <path d="M 150 91 L 166 89 M 150 95 L 164 97" className={styles.catWhisker} />
      </g>

      <g className={styles.animTapYarnPaw} style={{ transformOrigin: "126px 126px" }}>
        <path d="M 124 122 L 156 116 C 164 115 166 125 158 128 L 126 132 Z" className={styles.catBody} />
      </g>

      <path d="M 186 136 C 198 144 210 132 214 138" className={styles.catLine} />

      <g className={styles.animYarnRoll}>
        <circle cx="182" cy="120" r="17" className={styles.catYarnBall} />
        <path
          d="M 168 114 Q 182 106 196 116 M 166 122 Q 182 118 197 126 M 172 132 Q 184 122 192 107"
          className={styles.catLine}
        />
      </g>
    </svg>
  );
}
