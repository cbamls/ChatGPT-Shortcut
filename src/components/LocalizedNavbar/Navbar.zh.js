const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT提示词助手",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo-d.png",
  },
  items: [
    {
      to: "https://newzone.top/posts/2023-02-27-chatgpt_shortcuts.html",
      label: "ChatGPT Shortcut 原理说明",
      position: "left",
    },
    {
      to: "https://xq7pd3qu17.feishu.cn/share/base/form/shrcnK7oaSPaAcj1YAHfy4jo0Jh",
      label: "反馈/添加提示词",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/rockbenben/ChatGPT-Shortcut",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://discord.gg/PZTQfJ4GjX",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
