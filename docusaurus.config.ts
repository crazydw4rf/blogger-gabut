import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PluginOptions as SearchLocalPluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";
import type { ThemeConfig as MermaidThemeConfig } from "@docusaurus/theme-mermaid";

const config: Config = {
  title: "Blogger Gabut",
  tagline: "Cuman Situs Web kecil yang membagikan tutorial seputar IT",
  url: "https://blog.crazydw4rf.tech",
  baseUrl: process.env.GITHUB_ACTIONS == "true" ? "/blogger-gabut" : "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    },
  ],
  organizationName: "crazydw4rf",
  projectName: "blogger-gabut",
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  },
  markdown: {
    mermaid: true,
  },
  staticDirectories: ["static", "public"],
  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/tutorial",
        docsDir: "./tutorial",
      } satisfies SearchLocalPluginOptions,
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/tutorial",
          showLastUpdateTime: true,
          path: "./tutorial",
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: false,
      title: "Blogger Gabut",
      items: [
        { to: "/", label: "Portfolio", position: "left", exact: true },
        { to: "/tutorial", label: "Tutorials", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/crazydw4rf/blogger-gabut",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "yaml", "nginx", "apacheconf", "dns-zone-file"],
      magicComments: [
        {
          className: "code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "Ini error",
          block: { start: "ini-error-mulai", end: "ini-error-selesai" },
        },
        {
          className: "diff-code-new-highlight",
          line: "diff-code-new",
          block: { start: "diff-code-new-start", end: "diff-code-new-end" },
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    mermaid: {
      options: {
        look: "handDrawn",
      },
      theme: {
        dark: "dark",
        light: "forest",
      },
    } satisfies MermaidThemeConfig["mermaid"],
  } satisfies Preset.ThemeConfig,
};

export default config;
