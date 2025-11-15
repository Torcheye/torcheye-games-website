export const en = {
  // Game title
  gameTitle: "Chiaroscuro",

  // Navigation
  nav: {
    home: "Chiaroscuro",
    studio: "Studio",
    blog: "Blog",
    search: "Search",
  },

  // Footer
  footer: {
    copyright: (year: number) => `© ${year} Torcheye Games. All rights reserved.`,
    builtWith: "Built with",
    themeToggle: "Toggle color theme",
  },

  // Homepage
  home: {
    hero: {
      title: "Chiaroscuro",
      subtitle: "A first-person puzzle game about lights and shadows",
      cta: "Wishlist on Steam",
    },
    features: {
      heading: "Gameplay Features",
      feature1: {
        title: "Embrace Shadows for Exploration",
        description: "",
      },
      feature2: {
        title: "Manipulate Light to Shape Reality",
        description: "",
      },
      feature3: {
        title: "Dive into Dreams...",
        description: "",
      },
    },
    latestPosts: "Latest posts",
    viewAll: "View all posts",
    emptyBlog: {
      title: "Dev blog launching soon",
      description: "We're preparing behind-the-scenes insights and development updates. Check back soon!",
    },
    connect: "Connect",
    connectDescription: "Follow our journey and join the community",
    screenshotAlt: (num: number) => `Gameplay screenshot ${num}`,
    previousSlide: "Previous screenshot",
    nextSlide: "Next screenshot",
  },

  // Studio page
  studio: {
    label: "Studio",
    heading: "About Torcheye Games",
    description: "Torcheye Games is an indie studio dedicated to crafting atmospheric, thought-provoking experiences. Our debut title, Chiaroscuro, explores the interplay of light and shadow in a surreal first-person puzzle game.",
    values: {
      innovation: {
        title: "Innovation at the foremost",
        description: "We push boundaries in game design, exploring unconventional mechanics and narrative structures.",
      },
      thoughtProvoking: {
        title: "Thought-provoking",
        description: "Our games challenge players intellectually and emotionally, leaving lasting impressions.",
      },
      aesthetic: {
        title: "Aesthetically groundbreaking",
        description: "We prioritize striking visual and audio design to create immersive, memorable worlds.",
      },
    },
    team: {
      heading: "The Team",
      kingzhou: {
        name: "King Zhou",
        role: "Founder & Developer",
        bio: "Passionate, curious, and creative. Devoted to crafting innovative, beautiful, and accessible interactive experiences. When not coding, King can be found exploring euro board games, culinary experiments, and nature.",
      },
      timmie: {
        name: "Timmie",
        role: "Chief Morale Officer",
        bio: "Professional keyboard warmer and bug finder. Specializes in QA by strolling across the keyboard at critical moments. Expert in nap optimization and providing emotional support during crunch time.",
      },
    },
    contact: {
      heading: "Get in touch",
      description: "Interested in our work or want to collaborate? We'd love to hear from you.",
      email: "Email us",
      twitter: "Twitter",
      discord: "Discord",
    },
  },

  // Blog
  blog: {
    label: "Dev Blog",
    heading: "Dev Blog",
    tags: "Tags",
    comingSoon: {
      title: "Coming soon",
      description: "We're preparing development insights and behind-the-scenes updates.",
    },
    backToBlog: "Back to blog",
    readingTime: (minutes: number) => `${minutes} min read`,
    tableOfContents: "Table of Contents",
  },

  // Tags
  tags: {
    allTags: "All Tags",
    postCount: (count: number) => `(${count})`,
    taggedWith: (tag: string) => `Posts tagged with "${tag}"`,
  },

  // Projects
  projects: {
    label: "Projects",
    heading: "Projects",
  },

  // 404
  notFound: {
    title: "404: Page not found",
    goHome: "Go to home page",
  },

  // Common
  common: {
    backToTop: "Back to top",
  },

  // Meta
  meta: {
    siteTitle: "Torcheye Games",
    siteDescription: "Indie studio crafting atmospheric experiences. Developing Chiaroscuro, a first-person puzzle game about lights and shadows.",
    homeTitle: "Home",
    homeDescription: "Discover Chiaroscuro and follow the development of our atmospheric puzzle game about light and shadow.",
    blogTitle: "Blog",
    blogDescription: "Development insights, design decisions, and behind-the-scenes updates from the Chiaroscuro team.",
    projectsTitle: "Works",
    projectsDescription: "Atmospheric games and interactive experiences from Torcheye Games.",
    tagsTitle: "Tags",
    tagsDescription: "Browse development posts grouped by topic.",
  },
};

export type Translation = typeof en;
