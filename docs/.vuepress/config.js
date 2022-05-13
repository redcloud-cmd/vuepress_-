// 配置网站的标题和描述，方便SEO

module.exports = {
    // title:'操作手册',
    description:'Typescript 操作手册',
    base:"/qc",
    themeConfig: {
      navbar: false,
        sidebar: [
            {
                title: '前言',
                link: '/preface/introduction',
                collapsable: false, // 不折叠
                children: [
                    { title: "系统介绍", path: "/preface/introduction/" },
                    { title: "应用场景", path: "/preface/scene/" },
                    { title: "使用前配置", path: "/preface/config/" ,}
                ]
            },
            {
              title: '安装部署',
              link: '/install/windows',
              collapsable: false, // 不折叠
              children: [
                  { title: "Windows下安装", path: "/install/windows/" },
                  { title: "Linux下安装", path: "/install/linux/" },
              ]
          },
          ]
    }
    
}