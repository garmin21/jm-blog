export default {
  link: '/learn-build/',
  dir: '构建工具',
  sidebar: [
    {
      dir: 'Gulp',
      collapsed: false,
      text: 'Gulp',
      items: ['Gulp入门'],
    },
    {
      dir: 'Webpack',
      collapsed: false,
      text: 'Webpack',
      items: [
        'webpack原理',
        'webpack快速入门教程',
        'require',
        'umd模块',
        'webpack-hmr',
        'webpack性能优化',
        'webpack优化',
      ],
    },
    {
      dir: 'VueCil',
      text: 'VueCil',
      collapsed: false,
      items: ['搭建vue2项目环境'],
    },
    {
      dir: 'Vite',
      text: 'Vite',
      collapsed: false,
      items: [
        '搭建vue3项目环境',
        'import.meta.glob',
        'vite插件推荐',
        'tsup',
        'unbuild',
      ],
    },
  ],
};
