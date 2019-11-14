export const menus = [{
        path: '/',
        title: '首页',
        icon: 'user'
    },
    {
        path: '/product',
        icon: 'user',
        title: '商品管理'
    }, {
        path: '/chart',
        title: '图表管理',
        icon: 'user',
        children: [{
                path: '/chart/line',
                title: '折线图'
            },
            {
                path: '/chart/circle',
                title: '圆柱图'
            },
        ],
    },
    {
        path: '/rich',
        title: '富文本',
        icon: 'user'
    },
    {
        path: '/setting',
        title: '设置',
        icon: 'user',
        children: [{
            path: '/setting/password',
            title: '修改密码'
        }],
    }
]