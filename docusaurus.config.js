module.exports = {
    title: 'Gin-Vue-Admin',
    tagline: '使用gin+vue进行极速开发的全栈开发基础平台',
    url: 'http://demo.henrongyi.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'flipped-aurora', // Usually your GitHub org/user name.
    projectName: 'gin-vue-admin', // Usually your repo name.
    themeConfig: {
        colorMode: {
            disableSwitch: true,
        },
        navbar: {
            title: 'Gin-Vue-Admin',
            logo: {
                alt: 'Gin-Vue-Admin',
                src: 'img/logo.png',
            },
            items: [{
                    href: 'http://demo.gin-vue-admin.com/',
                    label: '在线体验',
                    position: 'right',
                },

                {
                    to: 'about/',
                    label: '关于我们',
                    position: 'right',
                },
                {
                    to: 'docs/coffee',
                    label: '捐赠入口',
                    position: 'right',
                },
                {
                    label: '官方社区',
                    position: 'right',
                    items: [{
                            href: 'https://space.bilibili.com/322210472',
                            label: '教学视频',
                            position: 'right',
                        },
                        {
                            href: 'https://support.qq.com/products/371961',
                            label: '在线交流',
                            position: 'right',
                        },
                        {
                            href: 'https://www.yuque.com/flipped-aurora/',
                            label: '知识库',
                            position: 'right',
                        },
                    ]
                },
                {
                    label: "下载地址",
                    position: "right",
                    items: [{
                            href: 'https://github.com/flipped-aurora/gin-vue-admin',
                            label: 'GitHub',
                            position: 'right',
                        },
                        {
                            href: 'https://gitee.com/pixelmax/gin-vue-admin',
                            label: 'Gitee',
                            position: 'right',
                        },
                    ]
                },
                {
                    label: '特惠服务器',
                    position: 'right',
                    items: [{
                        href: 'https://www.aliyun.com/minisite/goods?userCode=xqe01uob',
                        label: '阿里服务器',
                        position: 'right',
                    }, {
                        href: 'https://cloud.tencent.com/act/new?fromSource=gwzcw.4325959.4325959.4325959&utm_medium=cps&utm_id=gwzcw.4325959.4325959.4325959&cps_key=962a7fdaa930cda1c06e36a7608e95cc',
                        label: '腾讯服务器',
                        position: 'right',
                    }]
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
                            href: 'https://github.com/flipped-aurora/gin-vue-admin/issues',
                        },
                    ],
                },
                {
                    title: '友情链接',
                    items: [
                        {
                            label:'H5-Dooring ｜ H5页面制作神器',
                            to:'http://h5.dooring.cn',
                        },
                        {
                            label: '秒点远控,让距离不再有距离',
                            to: 'https://www.geelevel.com/',
                        } ,{
                        label: 'golang 开发工具包，json、sql 转 struct',
                        to: 'http://www.golangs.cn/',
                    }, {
                        label: 'gin-vue-devops 基于Gin-Vue-Admin开发的DevOps平台',
                        to: 'https://github.com/openstack-test/gin-vue-devops',
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
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};