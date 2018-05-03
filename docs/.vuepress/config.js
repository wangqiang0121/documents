let sidebar = require('./sidebar')
module.exports = {
  title: 'JinboMa',
  description: '技术文档分享',
  port: '8000',
  evergreen: true,
  themeConfig: {
    repo: 'JinboMa/documents',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在github上编辑本页',
    // 右上角搜索右边
    nav: [
      { text: '前端', link: '/front-end/' },
      { text: '后端', link: '/back-end/' },
      { text: '服务', link: '/server/' },
      { text: '数据', link: '/data-base/' },
      { text: '设计', link: '/design/' }
    ],
    sidebar
  }
}