module.exports = {
  title: '后浪修炼手册',
  tagline: '分享中国大学生的自我修炼秘籍',
  url: 'https://houlang.training',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'houlang-guidance', // Usually your GitHub org/user name.
  projectName: 'houlang.training', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '后浪修炼手册',
      logo: {
        alt: '武林秘籍',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/freshman-manual/introduction',
          activeBasePath: '新生手册',
          label: '新生手册',
          position: 'left',
        },
        {
          to: 'docs/digital-life/introduction',
          activeBasePath: '数字化生活',
          label: '数字化生活',
          position: 'left',
        },
        {
          to: 'docs/cs-guidance/introduction',
          activeBasePath: '计算机专业公益课',
          label: '计算机专业公益课',
          position: 'left',
        },
        { to: 'changelog', label: '更新内容' },
        {
          to: 'docs/contribution/introduction',
          label: '贡献指南',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `后浪知识分享小组。Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: 'changelog',
          routeBasePath: 'changelog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
