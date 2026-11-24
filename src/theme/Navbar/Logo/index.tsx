import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function NavbarLogo(): ReactNode {
  return (
    <Link to="/" className={styles.brandLink}>
      <span className={styles.promptSymbol}>~/</span>
      <span className={styles.statusDot} title="Online" />
      <span className={styles.brandText}>blogger_gabut</span>
    </Link>
  );
}
