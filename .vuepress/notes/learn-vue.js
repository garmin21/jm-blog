import { definePlumeNotesItemConfig } from 'vuepress-theme-plume'

export default definePlumeNotesItemConfig({
  link: '/learn-vue/',
  dir: 'vue学习简记',
  sidebar: [
    '',
    // {
    //   dir: '环境准备',
    //   collapsed: false,
    //   items: ['安装', '编辑器扩展', 'Cargo'],
    // },
    {
      dir: '基础入门',
      collapsed: false,
      items: [
        '$attrs-$listeners',
        '响应式系统',
        'vue核心概念',
        '路由',
        'vueRouter原理',
        'render函数',
        '插槽',
        '辅助函数',
        'Vue.utils',
        'vuex原理'
      ],
    },
    {
      dir: '源码学习',
      collapsed: false,
      items: [
        'Vue.extend',
      ],
    },
  ],
})
