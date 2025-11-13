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
    NAME: "Twitter",
    HREF: "https://twitter.com/torcheyegames",
  },
  {
    NAME: "Discord",
    HREF: "https://discord.gg/RHggGYAQjp",
  },
  {
    NAME: "Steam",
    HREF: "https://store.steampowered.com/app/2831270",
  },
];
