import { createLucideIcon, type LucideIcon } from "lucide-react";

export const GithubIcon: LucideIcon = createLucideIcon("github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "gh-1",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "gh-2" }],
]);

export const LinkedInIcon: LucideIcon = createLucideIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "li-1",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "li-2" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "li-3" }],
]);

export const DiscordIcon: LucideIcon = createLucideIcon("discord", [
  [
    "path",
    {
      d: "M18 6a14.5 14.5 0 0 0-4-1.5c-.2.5-.4 1-.5 1.5a13.8 13.8 0 0 0-3 0c-.1-.5-.3-1-.5-1.5A14.5 14.5 0 0 0 6 6c-2.5 4-3 8-2.5 12a14.8 14.8 0 0 0 4.5 2.5c.3-.6.7-1.2 1-1.7a9.5 9.5 0 0 1-1.6-.8l.4-.3c3.1 1.5 6.5 1.5 9.6 0l.4.3a9.5 9.5 0 0 1-1.6.8c.3.5.7 1.1 1 1.7a14.8 14.8 0 0 0 4.5-2.5c.6-4.5 0-8.5-2.5-12",
      key: "dc-1",
    },
  ],
  ["circle", { cx: "9.5", cy: "13", r: "1", key: "dc-2" }],
  ["circle", { cx: "14.5", cy: "13", r: "1", key: "dc-3" }],
]);
