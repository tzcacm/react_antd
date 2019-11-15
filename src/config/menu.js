export const menus = [{
        path: '/',
        title: '首页',
        icon: 'home'
    },
    {
        path: '/product',
        icon: 'database',
        title: '商品管理'
    }, {
        path: '/chart',
        title: '图表管理',
        icon: 'area-chart',
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
        icon: 'scan'
    },
    {
        path: '/setting',
        title: '设置',
        icon: 'setting',
        children: [{
            path: '/setting/password',
            title: '修改密码'
        }],
    }
]