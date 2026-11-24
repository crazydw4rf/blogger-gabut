import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/Navbar/MobileSidebar/Layout";

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): ReactNode {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        "navbar-sidebar"
      )}
    >
      {header}
      <div className="navbar-sidebar__items">
        <div className="navbar-sidebar__item menu">
          {primaryMenu}
          {secondaryMenu}
        </div>
      </div>
    </div>
  );
}
