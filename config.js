import { viteBundler } from '@vuepress/bundler-vite';
import { getDirname, path } from 'vuepress/utils';
import theme from './.vuepress/theme';
import { defineUserConfig } from 'vuepress';
// import {createHtmlPlugin} from 'vite-plugin-html'
const __dirname = getDirname(import.meta.url)
function googleAnalyticsPlugin() {
  return {
    name: 'googleAnalyticsPlugin',
    clientConfigFile: path.resolve(__dirname, './gtag.js')
  }
}

const resolve = (...dirs) => path.resolve(__dirname, ...dirs);

export default defineUserConfig({
  // port: 9527, // 指定端口号为 8080
  bundler: viteBundler(),
  theme,
  base: '/jm-blog/',
  // plugins: [googleAnalyticsPlugin({ id: 'G-TMXNCJR2K7' })],
  lang: 'zh-CN',
  locales: {
    '/': { lang: 'zh-CN', title: 'Garming', description: '热爱生活' },
  },
  dest: 'dist',
  public: resolve('public'),
  temp: resolve('.vuepress/.temp'),
  cache: resolve('.vuepress/.cache'),
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/jpg',
        sizes: '32x32',
        href: '/jm.jpg',
      },
    ],
    [('meta', { name: 'keywords', content: '李嘉明,前端,front-end' })],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'meta',
      { name: 'msvalidate.01', content: 'F93FF013B8AA2553779A91388C14A0F7' },
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'X5YSaTDn-pKqQBUKD_05_dQcxVItzEq7Rlbg2ZEU7AM',
      },
    ],
    // [
    //   'script',
    //   {
    //     src: 'https://www.googletagmanager.com/gtag/js?id=G-LYDB5TTVMB',
    //     async: true
    //   }
    // ],
    [
      'script',
      {},
      `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF83PPKC"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
`
    ],
    [
      'script',
      {},
      `
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'G-LYDB5TTVMB');

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MF83PPKC');</script>
    <!-- End Google Tag Manager -->
      `
    ]
  ],
  // title: '你好， VuePress ！',
  // description: '这是我的第一个 VuePress 站点',
});
