import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/Navbar/MobileSidebar/Layout";

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        "navbar-sidebar",
        {
          "navbar-sidebar--show": mobileSidebar.shown,
        }
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
