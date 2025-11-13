import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Torcheye Games",
  DESCRIPTION:
    "Indie studio crafting atmospheric experiences that blur the line between light and shadow.",
  EMAIL: "hello@torcheyegames.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Discover Chiaroscuro, a surreal puzzle-platformer where light and shadow shape reality.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Development insights, design breakdowns, and studio updates from Torcheye Games.",
};

export const PROJECTS: Metadata = {
  TITLE: "Works",
  DESCRIPTION:
    "Atmospheric games that explore contrast, narrative, and meaningful interaction.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Discord",
    HREF: "https://discord.gg/RHggGYAQjp",
    ICON: "/icons/discord.svg",
  },
  {
    NAME: "X",
    HREF: "https://x.com/torcheyegames",
    ICON: "/icons/x.svg",
  },
  {
    NAME: "Email",
    HREF: "mailto:hello@torcheyegames.com",
    ICON: "/icons/email.svg",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/company/torcheye-games",
    ICON: "/icons/linkedin.svg",
  },
  {
    NAME: "Bilibili",
    HREF: "https://space.bilibili.com/99004880",
    ICON: "/icons/bilibili.svg",
  },
  {
    NAME: "QQ",
    HREF: "https://qm.qq.com/q/ZYQZNCi1aw",
    ICON: "/icons/qq.svg",
  },
];
