// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const remarkExternalUrlRef = require("./src/plugins/remark-externalUrlRef");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TritonAI",
  tagline: "Official Documentation for TritonAI @ UCSD",
  url: "https://triton-ai.github.io",
  baseUrl: "/docs/",
  //onBrokenLinks: "throw", // Remove or add comments if needed
  onBrokenMarkdownLinks: "warn",
  //onBrokenAnchors: "throw", // Remove or add comments if needed
  onDuplicateRoutes: "warn",
  favicon: "img/tritonai_favicon.ico",
  organizationName: "triton-ai", // Usually your GitHub org/user name.
  projectName: "docs",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkExternalUrlRef],
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "",
        logo: undefined,
        items: [
          {
            type: "html",
            position: "left",
            className: " navbar__logo navbar__item_logo_container",
            value: `
            <a href="/docs" target="_blank">
              <img src="https://triton-ai.github.io/docs/img/tritonai_favicon.ico" alt="TritonAI" width="100%" height="100%">
            </a>
            <svg width="2" height="60%" viewBox="0 0 2 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 33V0H2V33H0Z" fill="white"/>
            </svg>
            <a href="/docs">
              <svg width="50" height="100%" viewBox="0 0 114 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.03687 26C16.7929 26 21.2789 21.19 21.2789 13.2354C21.2789 5.31819 16.7929 0.545487 9.29788 0.545487H0.796875V26H9.03687ZM4.63687 22.6442V3.90129H9.06189C14.6299 3.90129 17.5009 7.23219 17.5009 13.2354C17.5009 19.2635 14.6299 22.6442 8.82587 22.6442H4.63687ZM53.7659 13.2727C53.7659 5.13169 48.8939 0.197388 42.3069 0.197388C35.6949 0.197388 30.8349 5.13169 30.8349 13.2727C30.8349 21.4013 35.6949 26.348 42.3069 26.348C48.8939 26.348 53.7659 21.4137 53.7659 13.2727ZM49.9629 13.2727C49.9629 19.4748 46.6819 22.843 42.3069 22.843C37.9199 22.843 34.6509 19.4748 34.6509 13.2727C34.6509 7.07069 37.9199 3.70239 42.3069 3.70239C46.6819 3.70239 49.9629 7.07069 49.9629 13.2727ZM85.2959 8.82319C84.4259 3.37929 80.1629 0.197388 74.7819 0.197388C68.1939 0.197388 63.3339 5.13169 63.3339 13.2727C63.3339 21.4137 68.1689 26.348 74.7819 26.348C80.3749 26.348 84.4639 22.843 85.2959 17.8093L81.4189 17.7969C80.7599 21.0533 78.0249 22.843 74.8059 22.843C70.4439 22.843 67.1499 19.4996 67.1499 13.2727C67.1499 7.09549 70.4309 3.70239 74.8189 3.70239C78.0629 3.70239 80.7849 5.52949 81.4189 8.82319H85.2959ZM109.375 7.23219H113.079C112.967 3.15549 109.363 0.197388 104.192 0.197388C99.0839 0.197388 95.1689 3.11829 95.1689 7.50569C95.1689 11.0479 97.7039 13.1236 101.794 14.2298L104.801 15.0501C107.523 15.771 109.624 16.6658 109.624 18.9279C109.624 21.4137 107.25 23.0543 103.981 23.0543C101.023 23.0543 98.5619 21.7369 98.3379 18.9652H94.4849C94.7339 23.5763 98.3009 26.4226 104.006 26.4226C109.984 26.4226 113.427 23.2781 113.427 18.9652C113.427 14.3789 109.338 12.6016 106.106 11.8061L103.621 11.1598C101.632 10.6502 98.9849 9.71799 98.9969 7.28199C98.9969 5.11929 100.973 3.51599 104.105 3.51599C107.026 3.51599 109.102 4.88319 109.375 7.23219Z" fill="white"/>
              </svg>
            </a>
            `,
          },
          {
            to: "/release-notes",
            position: "left",
            label: "Release Notes",
          },
          {
            href: "https://discord.gg/ZzfBGvG3FF ",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          src: "img/tritonai_favicon.ico",
          alt: "TritonAI Logo",
          href: "https://appcircle.io",

        },
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, TritonAI @ UCSD`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "ruby",
          "groovy",
          "java",
          "csharp",
          "kotlin",
          "bash",
          "diff",
          "json",
          "markdown",
          "shell-session",
          "yaml",
        ],
      },
      algolia: {
        apiKey: "b56a5dc4e52ec9e97ad93981cc668c4a",
        indexName: "appcircle",
        appId: "4U9FKQJ034",
        contextualSearch: true,
      },
      zooming: {
        selector: ".markdown img",
        delay: 500,
        background: {
          light: "rgb(255, 255, 255)",
          dark: "#1b1b1d",
        },
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-40954643-12",
        anonymizeIP: true,
      },
    ],
    "docusaurus-plugin-sass",
    "docusaurus-plugin-zooming",
  ],
};

module.exports = config;
