import type { CSSProperties } from "react";

export interface CatProps {
  className?: string;
  outline?: boolean;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
}
