module.exports = {
    title: 'Gin-Vue-Admin',
    tagline: 'gin+vue极速开发的全栈后台管理系统',
    url: 'http://demo.henrongyi.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'flipped-aurora', // Usually your GitHub org/user name.
    projectName: 'gin-vue-admin', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Gin-Vue-Admin',
            logo: {
                alt: 'Gin-Vue-Admin',
                src: 'img/logo.png',
            },
            items: [{
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: '在线文档',
                    position: 'right',
                },
                {
                    href: 'https://www.yuque.com/flipped-aurora/',
                    label: '知识库',
                    position: 'right',
                },
                {
                    href: 'https://space.bilibili.com/322210472',
                    label: '教学视频',
                    position: 'right',
                },
                {
                    href: 'http://demo.gin-vue-admin.com/',
                    label: '在线体验',
                    position: 'right',
                },
                {
                    href: 'https://github.com/flipped-aurora/gin-vue-admin',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://www.aliyun.com/minisite/goods?userCode=xqe01uob',
                    label: '特惠服务器',
                    position: 'right',
                },
            ],

        },
        footer: {
            style: 'dark',
            links: [{
                    title: '团队项目',
                    items: [{
                            label: 'gf-vue-admin',
                            to: 'https://github.com/flipped-aurora/gf-vue-admin',
                        },
                        {
                            label: 'gin-vue-admin',
                            to: 'https://github.com/flipped-aurora/gin-vue-admin',
                        },
                        {
                            label: 'melody',
                            to: 'https://github.com/flipped-aurora/melody',
                        },

                    ],
                },
                {
                    title: '社区',
                    items: [{
                            label: '语雀博客',
                            href: 'https://www.yuque.com/flipped-aurora/gqbcfk',
                        },
                        {
                            label: '视频教程',
                            href: 'https://space.bilibili.com/322210472',
                        },
                        {
                            label: '问题反馈',
                            href: 'https://www.yuque.com/flipped-aurora/tdxq8z',
                        },
                    ],
                },
                {
                    title: '更多',
                    items: [{
                        label: '团队教程博客',
                        to: 'https://blog.henrongyi.top/',
                    }],
                },
            ],
            // logo: {
            //     alt: 'Facebook Open Source Logo',
            //     src: 'img/fa.png',
            //     href: 'https://github.com/flipped-aurora/',
            // },
            copyright: `Copyright © ${new Date().getFullYear()} flipped-aurora`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'introduce',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};