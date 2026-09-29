import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PluginOptions as SearchLocalPluginOptions } from "@easyops-cn/docusaurus-search-local";
import { type PrismTheme } from "prism-react-renderer";
import type { ThemeConfig as MermaidThemeConfig } from "@docusaurus/theme-mermaid";

const rosePineDawnPrismTheme: PrismTheme = {
  plain: {
    color: "#575279",
    backgroundColor: "#fffaf3",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#9893a5", fontStyle: "italic" },
    },
    {
      types: ["string", "attr-value"],
      style: { color: "#ea9d34" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: "#797593" },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: { color: "#286983" },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#286983" },
    },
    {
      types: ["function", "deleted", "tag"],
      style: { color: "#b4637a" },
    },
    {
      types: ["function-variable"],
      style: { color: "#907aa9" },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: { color: "#d7827e" },
    },
    {
      types: ["class-name", "maybe-class-name"],
      style: { color: "#56949f" },
    },
  ],
};

const rosePineDarkPrismTheme: PrismTheme = {
  plain: {
    color: "#e0def4",
    backgroundColor: "#1f1d2e",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#6e6a86", fontStyle: "italic" },
    },
    {
      types: ["string", "attr-value"],
      style: { color: "#f6c177" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: "#908caa" },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: { color: "#31748f" },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#31748f" },
    },
    {
      types: ["function", "deleted", "tag"],
      style: { color: "#eb6f92" },
    },
    {
      types: ["function-variable"],
      style: { color: "#c4a7e7" },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: { color: "#ebbcba" },
    },
    {
      types: ["class-name", "maybe-class-name"],
      style: { color: "#9ccfd8" },
    },
  ],
};

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
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    footer: {
      style: "dark",
    },
    prism: {
      theme: rosePineDawnPrismTheme,
      darkTheme: rosePineDarkPrismTheme,
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
        light: "neutral",
      },
    } satisfies MermaidThemeConfig["mermaid"],
  } satisfies Preset.ThemeConfig,
};

export default config;
