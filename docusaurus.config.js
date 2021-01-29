var path = require("path");

module.exports = {
  title: "Paradise Bots Docs",
  tagline: "Official Documentation for Paradise Bot List and its Companion API.",
  url: "https://paradisebots.net",
  baseUrl: "/",
  favicon: "img/ParadiseBotsLogo.png",
  organizationName: "ParadiseBotList",
  projectName: "ParadiseDocs-v3",
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap",
    "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap",
  ],
  themeConfig: {
    algolia: {
      apiKey: "83fedff8cf4b3c8c307860d884c83b58",		       apiKey: "e446f4b89c6d2f86db157cc2906a1520",
      indexName: "paradiseapp",		
      searchParamaters: {
        appId: "160PZ84HU3",
      },
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        Paradise Bots v3 Update 🎉 🍾 Read the official <a href="/blog/1-0-0-release-candidate">blog post</a>.',
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    googleAnalytics: {
      trackingID: "UA-177630158-1",
    },
    image: "img/ParadiseBotsLogo.png",
    metadatas: [
      { name: "og:image", content: "img/ParadiseBotsLogo.png" },
      {
        name: "og:description",
        content: "Official Documentation for Paradise Bot List and its Companion API.",
      },
      { name: "og:type", content: "website" },
    ],
    navbar: {
      title: "PBL Docs",
      logo: {
        alt: "Paradise Logo",
        src: "img/ParadiseBotsLogo.png",
        srcDark: "img/ParadiseBotsLogo.png",
      },
      items: [
        {
          to: "docs/quick-start",
          activeBasePath: "docs/quick-start",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "about", label: "About", position: "right" },
        {
          href: "https://github.com/Paradise-Bots",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          to: "https://paradisebots.net",
          label: "Main Site",
          position: "left",
          rel: "noopener noreferrer nofollow",
        },
        {
          to: "https://beta.paradisebots.net",
          label: "Beta Site",
          position: "left",
          rel: "noopener noreferrer nofollow",
        },
      ],
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY || "no",
      appUrl: "https://a.paradisebots.net",
      enableInDevelopment: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ParadiseBotList",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ParadiseBotList",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paradise Bots LLC.`,
    },
    colorMode: {
      switchConfig: {
        darkIcon: "🦉",
        darkIconStyle: {},
        lightIcon: "🌞",
        lightIconStyle: {},
      },
    },
  },
  presets: [
    "docusaurus2-dotenv",
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/TheRealToxicDev/ParadiseDocs-v3/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 1.0,
          trailingSlash: true,
        },
      },
    ],
  ],
  plugins: [
    ["docusaurus2-dotenv", { systemvars: true }],
    [
      require.resolve("docusaurus-plugin-less"),
      {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-WN9GGTG", // GTM Container ID
      },
    ],
    path.resolve(__dirname, "netlify-forms"),
    path.resolve(__dirname, "stripe-js"),
    path.resolve(__dirname, "cookie-consent"),
    "posthog-docusaurus",
  ],
};
