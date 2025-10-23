import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chen's Docs",
  description: "Chen's Project Docs",
 //base: "/doc1/",
  footer: {
    copyright: "版权所有@ 2025 CSM",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider:"local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '技术手册', link: '/Docs' },
      { text: '备份镜像站', link: 'https://docbak.csmei.sbs/' },
    ],

    sidebar: [
      {
        text: '技术手册 ',
        items: [
          { text: 'Bmi270-技术手册', link: '/Docs' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
    copyright: "版权所有@ 2025 CSM",
  },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
  
})

