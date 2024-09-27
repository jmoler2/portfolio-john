import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "John's 6.104 Static Website",
  description: "6.1040 Fall 2024",
  base: "/portfolio-john/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "Social Media Interviews", link: "/interviews"},
      { text: "Design", link: "/design"},
      { text: "Assignment3", link: "/assignment3"}

    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      { text: "Interviews", link: "/interviews"}
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
