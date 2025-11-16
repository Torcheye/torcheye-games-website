import type { Translation } from "./en";

export const zh: Translation = {
  // 游戏名称
  gameTitle: "光影迷踪",

  // 导航
  nav: {
    home: "光影迷踪",
    studio: "工作室",
    blog: "文章",
    search: "搜索",
  },

  // 页脚
  footer: {
    copyright: (year: number) => `© ${year} Torcheye Games版权所有`,
    builtWith: "Built with",
    themeToggle: "切换明暗主题",
  },

  // 主页
  home: {
    hero: {
      title: "光影迷踪",
      subtitle: "黑白闪烁模糊了现实的边界，在光与影交错的世界中探索未知",
      cta: "加入Steam愿望单",
    },
    features: {
      heading: "游戏特色",
      feature1: {
        title: "接纳阴影，探索未知",
        description: "",
      },
      feature2: {
        title: "操纵光明，塑造现实",
        description: "",
      },
      feature3: {
        title: "潜入诡谲的梦境...",
        description: "",
      },
    },
    latestPosts: "最新文章",
    viewAll: "查看全部",
    emptyBlog: {
      title: "开发日志即将推出",
      description: "我们正在准备幕后见解和开发更新。敬请期待！",
    },
    connect: "联系我们",
    connectDescription: "关注我们的旅程，加入社区",
    screenshotAlt: (num: number) => `游戏截图 ${num}`,
    previousSlide: "上一张",
    nextSlide: "下一张",
  },

  // 工作室页面
  studio: {
    label: "工作室",
    heading: "关于炬目游戏",
    description: "炬目游戏是一家独立游戏工作室，致力于打造富有氛围感、发人深省的游戏体验。在我们的首款作品光影迷踪中，探索体验光与影的魔术变换。",
    values: {
      innovation: {
        title: "创新至上",
        description: "我们突破游戏设计的界限，探索非传统的机制和叙事结构。",
      },
      thoughtProvoking: {
        title: "发人深省",
        description: "我们的游戏在智力和情感上挑战玩家，留下持久的印象。",
      },
      aesthetic: {
        title: "美学突破",
        description: "我们优先考虑引人注目的感官设计，创造、令人惊艳难忘的世界。",
      },
    },
    team: {
      heading: "团队成员",
      kingzhou: {
        name: "飞行农民",
        role: "创始人兼开发者",
        bio: "拥有永不枯竭的激情、好奇心和创造力。不写代码的时候喜欢烹饪、玩桌游和欣赏这个美丽的世界。",
      },
      timmie: {
        name: "提米",
        role: "首席情感保障官",
        bio: "职责包括：在最关键的开发时刻踩键盘协助测试、用呼噜声为成员缓解崩溃情绪、以及在大家加班时强制发放“摸猫休息时间”。擅长用一觉到天亮的午睡示范什么叫真正的效率管理。没有它，项目可能还能继续做；但没有它，谁还想开心地做项目呢。 🐱✨",
      },
    },
    contact: {
      heading: "联系我们",
      description: "对我们的工作感兴趣或想要合作？我们很乐意听到您的声音。",
      email: "发送邮件",
      twitter: "Twitter",
      discord: "Discord",
    },
  },

  // 博客
  blog: {
    label: "开发日志",
    heading: "开发日志",
    tags: "标签",
    comingSoon: {
      title: "即将推出",
      description: "我们正在准备开发见解和幕后更新。",
    },
    backToBlog: "返回日志",
    readingTime: (minutes: number) => `${minutes} 分钟阅读`,
    tableOfContents: "目录",
  },

  // 标签
  tags: {
    allTags: "所有标签",
    postCount: (count: number) => `(${count})`,
    taggedWith: (tag: string) => `包含「${tag}」标签的文章`,
  },

  // 项目
  projects: {
    label: "项目",
    heading: "项目",
  },

  // 404
  notFound: {
    title: "404: 页面未找到",
    goHome: "返回主页",
  },

  // 通用
  common: {
    backToTop: "返回顶部",
  },

  // 元数据
  meta: {
    siteTitle: "炬目游戏",
    siteDescription: "独立游戏工作室，打造独特而美丽的交互体验。正在开发光影迷踪，一款关于光与影的第一人称解谜游戏。",
    homeTitle: "主页",
    homeDescription: "发现光影迷踪，关注我们关于光与影的氛围解谜游戏的开发。",
    blogTitle: "文章",
    blogDescription: "来自光影迷踪团队的开发见解、设计决策和幕后更新。",
    projectsTitle: "作品",
    projectsDescription: "来自炬目游戏的氛围游戏和互动体验。",
    tagsTitle: "标签",
    tagsDescription: "按主题浏览我们的开发日志。",
  },
};
