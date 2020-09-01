module.exports = {
  title: '后浪修炼手册',
  tagline: '分享中国大学生的自我修炼秘籍',
  url: 'https://houlang.training',
  baseUrl: '/',
  favicon: 'img/icons/favicon.ico',
  organizationName: 'houlang-guidance', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '后浪修炼手册',
      logo: {
        alt: '武林秘籍',
        src: 'img/icons/navbar.png',
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
      links: [
        {
          title: '版权声明',
          items: [
            {
              html: `<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。`,
            },
          ],
        },
      ],
      copyright: `后浪知识分享小组。Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-176824317-1',
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          /* {
            tagName: 'link',
            rel: 'icon',
            href: '/img/icons/navbar.png',
          }, */
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
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
};
