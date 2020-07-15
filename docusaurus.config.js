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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/houlang-guidance/houlang.training',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: '关于我们',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/houlang-guidance',
            },
          ],
        },
      ],
      copyright: `后浪知识分享小组。Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
