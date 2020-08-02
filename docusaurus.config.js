module.exports = {
  title: '后浪修炼手册',
  tagline: '分享中国大学生的自我修炼秘籍',
  url: 'https://houlang.training',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'houlang-guidance', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '后浪修炼手册',
      logo: {
        alt: '武林秘籍',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/freshman/introduction',
          activeBasePath: 'docs/freshman',
          label: '新生手册',
        },
        {
          to: 'docs/digital-life/introduction',
          activeBasePath: 'docs/digital-life/',
          label: '数字化生活',
        },
        {
          to: 'docs/teach-yourself-cs/introduction',
          activeBasePath: 'docs/teach-yourself-cs',
          label: '计算机专业公益课',
        },
        { to: 'changelog', label: '更新内容', position: 'right' },
        {
          to: 'docs/contribution/introduction',
          activeBasePath: 'docs/contribution',
          label: '贡献指南',
          position: 'right',
        },
        {
          to: 'tools',
          label: '百宝箱',
          position: 'right',
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: 'changelog',
          routeBasePath: 'changelog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
