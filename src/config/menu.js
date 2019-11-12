export const menus = [{
        path: '/',
        title: '首页',
        icon: 'user'
    },
    {
        path: '/list',
        title: '商品',
        icon: 'user',
        isActive: true,
        children: [{
                path: '/list/one',
                title: '商品1'
            },
            {
                path: '/list/two',
                title: '商品2'
            },
        ],
    },
    {
        path: '/gg',
        title: 'hello',
        icon: 'user',
        isActive: true,
        children: [{
                path: '/gg/one',
                title: 'gg1'
            },
            {
                path: '/gg/two',
                title: 'gg2'
            },
        ],
    },
]