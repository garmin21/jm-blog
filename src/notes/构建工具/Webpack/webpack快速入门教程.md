---
title: webpack快速入门教程
author: 李嘉明
createTime: 2024/04/12 03:40:46
permalink: /learn-build/webpack-start/
---

## 1、了解Webpack

* 什么是webpack
  * Webpack是一个模块打包器(bundler)。
  * 在Webpack看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理
  * 它将根据模块的依赖关系进行静态分析，生成对应的静态资源
* 五个核心概念
  * **Entry**：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
  * **Output**：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
  * **Loader**：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript）。
  * **Plugins**：插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
  * **Mode**：模式，有生产模式<u>production</u>和开发模式<u>development</u>
* 理解Loader
  * Webpack 本身<u>只能加载JS/JSON模块</u>，如果要加载其他类型的文件(模块)，就需要使用对应的loader 进行转换/加载
  * Loader 本身也是运行在 node.js 环境中的 JavaScript 模块
  * 它本身是一个函数，接受源文件作为参数，返回转换的结果
  * loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。
* 理解Plugins
  * 插件可以完成一些loader不能完成的功能。
  * 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。
* 配置文件(默认)
  * webpack.config.js : 是一个node模块，返回一个 json 格式的配置信息对象
	
## 2、开启项目
* 初始化项目：
  
  * `npm init -y`生成package.json文件
  
* 安装webpack

  ```npm
  npm install webpack webpack-cli -g  //全局安装
  npm install webpack webpack-cli -D  //本地安装
  ```
  
  
## 3、webpack编译打包
* 运行指令
  * 开发配置指令：`webpack src/js/app.js -o dist/js/app.js --mode=development`
    * 功能: webpack能够编译打包js和json文件，并且能将es6的模块化语法转换成浏览器能识别的语法
  * 生产配置指令：`webpack src/js/app.js -o dist/js/app.js --mode=production`
    * 功能: 在开发配置功能上加上一个压缩代码
* 结论：
  * webpack能够编译打包js和json文件
  * 能将es6的模块化语法转换成浏览器能识别的语法
  * 能压缩代码
* 缺点：
  * 不能编译打包css、img等文件
  * 不能将js的es6基本语法转化为es5以下语法
* 改善：使用webpack配置文件`webpack.config.js`解决，自定义功能

## 4、使用webpack配置文件

* 目的：在项目根目录定义配置文件，通过自定义配置文件，还原以上功能
* 文件名称：`webpack.config.js`
* 文件内容：
    ```js
    const {resolve} = require('path'); //node内置核心模块，用来设置路径。
    module.exports = {
      entry: './src/js/app.js',   // 入口文件
      output: {                     // 输出配置
        filename: './js/bundle.js',      // 输出文件名
        path: resolve(__dirname, 'dist')   //输出文件路径配置
      },
      mode: 'development'   //开发环境(二选一)
      mode: 'production'   //生产环境(二选一)
    };
    ```
* 运行指令： `webpack`

## 5、js语法检查

* 安装loader
  * `yarn add eslint-loader eslint  -D`
  * `yarn add eslint-config-airbnb-base  eslint-plugin-import -D ` 使用国际化的eslint标准
  
* 配置loader
    ```js
    module: {
      rules: [
        {
          test: /\.js$/,  //只检测js文件
          exclude: /node_modules/,  //排除node_modules文件夹
          enforce: "pre",  //提前加载使用
            loader: "eslint-loader" //使用eslint-loader解析
        }        
      ]
    }
    ```
    
    ```js
    配置 .eslintrc 文件
    {
        "extends": "airbnb-base",
        "rules":{ // 检查规则
            "no-console" : 0
        }
    }
    ```



## 7、打包less资源

* 安装loader
  * `npm install css-loader style-loader less-loader less --save-dev `
  
* 配置loader
    ```js
    oneOf: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
    // 匹配css资源自需要将 less-loader删除即可
    ```

## 8、打包样式文件中的图片资源

* 安装loader
  * `yarn add file-loader url-loader --save-dev `
  * 补充：url-loader是对象 file-loader的上层封装，使用时需配合file-loader使用。
* 配置loader
    ```js
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            outputPath: 'images',   //在output基础上，修改输出图片文件的位置
            limit: 8 * 1024,  // 8kb大小以下的图片文件都用base64处理
            name: '[hash:8].[ext]',  // hash值为7位，ext自动补全文件扩展名
            esModule: false
          }
        }
      ]
    }
    ```


## 9、打包html文件

* 安装插件Plugins
	* `npm install html-webpack-plugin --save-dev `
* 在webpack.config.js中引入插件（插件都需要手动引入，而loader会自动加载）
	
	* `const HtmlWebpackPlugin = require('html-webpack-plugin')`
* 配置插件Plugins
    ```js
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
    ]
    ```
* 运行指令：webpack

## 10、打包html中图片资源

* 安装loader
	
	* `npm install html-loader --save-dev `
* 配置loader
    ```js
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    }
    ```

### 11、打包其他资源
* 处理字体文件
  * src/media/iconfont.ttf
  
* 修改样式
    ```css
    @font-face {
      font-family: 'iconfont';
      src: url('../media/iconfont.eot');
      src: url('../media/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../media/iconfont.woff2') format('woff2'),
      url('../media/iconfont.woff') format('woff'),
      url('../media/iconfont.ttf') format('truetype'),
      url('../media/iconfont.svg#iconfont') format('svg');
    }
    ```
* 配置loader
    ```js
    {
        test: /\.(eot|svg|ttf|woff|mp3)$/,
        loader: 'url-loader',
        options: {
            outputPath: 'fonts',
            name: '[hash:10].[ext]'
        }
    },
    ```
* 运行指令：webpack

## 12、自动编译打包运行
* 安装loader
	* `npm install webpack-dev-server --save-dev `
* 修改webpack配置对象（注意不是loader中）
    ```js
    devtool: 'source-map',  // 将编译后的代码映射回原始源代码，更容易地追踪错误和警告
    devServer: {
        contentBase: resolve(__dirname, 'dist'), // 项目根目录
        compress: true, // 启动gzip压缩
        port: 3000,
        open: true, // 自动打开浏览器
        hot: true // 开启HMR功能
      }
    ```
* 修改package.json中scripts指令
  * "start": "webpack-dev-server",
* 运行指令：npm start 

> 以上就是webpack开发环境的配置，可以在内存中自动打包所有类型文件并有自动编译运行、热更新等功能。

## 13、准备生产环境

* 创建文件夹config，将 webpack.config.js复制两份
  * webpack.dev.js
  * webpack.prod.js
* 修改webpack.prod.js配置，删除webpack-dev-server配置
  ```js
  module.exports = {
   output: {
      // 文件名称 -- 入口文件的输出名称
      filename: 'js/[name].[contenthash:10].js',
      // 文件路径 -- 所有资源的输出路径（输出到本地哪个目录）
      path: resolve(__dirname, '../build'),
      // 所有资源的引入路径 （资源link、url引入的路径）
      publicPath: '/'
    },
    mode: 'production',  //修改为生产环境
  }
  ```
* 修改package.json的指令
  * "start": "webpack-dev-server --config ./config/webpack.dev.js"
  * "build": "webpack --config ./config/webpack.prod.js"
* 开发环境指令
  * npm start
  * npm run build
* 生产环境指令
  * npm run build
  * 注意: 生产环境代码需要部署到服务器上才能运行
    * npm i serve -g  `serve -s dist`
  
## 14、清除打包文件目录

* 安装插件
	
	* `yarn add clean-webpack-plugin -S`
* 引入插件
  * const {CleanWebpackPlugin} = require('clean-webpack-plugin');

* 配置插件
  `new CleanWebpackPlugin()`
* 运行指令：npm run build

## 15、提取css成单独文件

* 安装插件
	* `yarn add mini-css-extract-plugin -S`
* 引入插件
  * const MiniCssExtractPlugin = require("mini-css-extract-plugin");	
* 配置loader
  ```js
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'less-loader',
    ]
  }
  ```
* 配置插件
  ```js
  new MiniCssExtractPlugin({
    // 提取ccs成单独文件
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[id].[contenthash:10].css'
  })
  ```

## 16、添加css兼容

* 安装loader
	* `yarn add postcss-loader postcss-import postcss-preset-env cssnano -S  ` 
* 配置loader
  ```js
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
       	{
               loader: 'postcss-loader',
               options: {
               ident: 'postcss',
               plugins: (loader) => [
               require('postcss-import')({ root: loader.resourcePath }),
               require('postcss-preset-env')(),
               require('cssnano')()
       		]
       	}
       },
      'less-loader',
    ]
  }
  ```
* `package.json`添加配置信息
  
  ```js
  "browserslist": [
      "> 0.5%",
      "ie >= 8",
      "ff >= 30",
      "chrome >= 34",
      "safari >= 8",
      "opera >= 23"
    ],
  // 有兴趣可以上 github 搜索 browserslist
  ```
* 运行指令：
  * npm run build
  * serve -s dist

## 17、压缩css
* 安装插件
	* `yarn add optimize-css-assets-webpack-plugin -S`
* 引入插件
  * const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');	
* 配置插件
  ```js
  new OptimizeCssAssetsPlugin()
  ```
* 运行指令：
  * npm run build
  * serve -s dist


### 18、图片压缩
* 安装loader
	
* `yarn add img-loader imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo imagemin -S` 
	
* 配置loader
  ```js
  {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,  // 8kb大小以下的图片文件都用base64处理
          name: 'images/[name].[hash:8].[ext]'
        }
      },
      {
        loader: 'img-loader',
        options: {
          plugins: [
            require('imagemin-gifsicle')({
              interlaced: false
            }),
            require('imagemin-mozjpeg')({
              progressive: true,
              arithmetic: false
            }),
            require('imagemin-pngquant')({
              floyd: 0.5,
              speed: 2
            }),
            require('imagemin-svgo')({
              plugins: [
                { removeTitle: true },
                { convertPathData: false }
              ]
            })
          ]
        }
      }
    ]
  }
  ```
  
* 运行指令：
  * npm run build
  * serve -s dist  
  
## 19、压缩html
* 修改插件配置
  ```js
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
        // 压缩html
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeRedundantAttributes: true, // 当值匹配默认值时删除属性。
        removeScriptTypeAttributes: true, // type="text/javascript"从script标签中删除。
        removeStyleLinkTypeAttributes: true, // type="text/css"从style和link标签中删除。
        useShortDoctype: true // 使用HTML5 doctype
    }
  })
  ```
* 运行指令：
  * npm run build
  * serve -s dist 

## 20 bebel 处理es6高级语法兼容

* 安装loader
  * `yarn add babel-loader @babel/core @babel/preset-env `
  * `yarn add @babel/polyfill `
  * `yarn add core-js`
  
* 配置loader
  ```js
      module: {
        rules: [
          {
            oneOf: [  //数组中的配置只有一个能够生效, 后面的配置都会放在当前数组中
             {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [
                'thread-loader', // 开启多线程
                {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          // polyfill 按需加载
                          targets: {
                            edge: '17',
                            firefox: '60',
                            chrome: '67',
                            safari: '11.1',
                            ie: '9'
                          },
                          useBuiltIns: 'usage',
                          corejs: {
                            version: 3
                          }
                        }
                      ]
                    ],
                    // 开启babel缓存
                    // webpack构建打包速度(第二次)更快
                    cacheDirectory: true
                  }
                }
              ]
            }
            ]
          }
        ]
      }
  ```
  

> 以上就是webpack生产环境的配置，可以生成打包后的文件。


