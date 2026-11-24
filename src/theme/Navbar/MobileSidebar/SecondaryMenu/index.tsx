import React, { type ReactNode } from "react";
import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal";

export default function NavbarMobileSidebarSecondaryMenu(): ReactNode {
  const secondaryMenu = useNavbarSecondaryMenu();

  if (!secondaryMenu.content) {
    return null;
  }

  return (
    <div className="navbar-sidebar__secondary-menu">
      <div className="navbar-sidebar__divider" />
      {secondaryMenu.content}
    </div>
  );
}
