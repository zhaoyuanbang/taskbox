// storybook的配置文件
const path = require('path')
module.exports = {
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: ['../src/components/**/*.stories.js'], // 路径 默认匹配 stories 目录下的文件
  addons: [
    // 设置链接
    "@storybook/addon-links", 
    /* 
      addon-essential 一个插件集合
      包括 {
        addon-actions 设置事件,
        addon-backgrounds 设置背景,
        addon-controls 图形化UI，可以动态与组件的参数进行交互,
        add-docs 配置文档,
        add-viewport Viewport工具栏用于调整iframe尺寸,
        add-toolbars 其他工具栏
      }
     */
    "@storybook/addon-essentials"
  ]
}