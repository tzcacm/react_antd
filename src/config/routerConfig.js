import React from 'react';
const HomePage = React.lazy(() => import('../pages/home'));
const ProductPage = React.lazy(() => import('../pages/product'));
const ChartLinePage = React.lazy(() => import('../pages/chartLine'));
const ChartCirclePage = React.lazy(() => import('../pages/chartCircle'));
const RichPage = React.lazy(() => import('../pages/rich'));
const PasswordPage = React.lazy(() => import('../pages/password'));
const ErrorPage = React.lazy(() => import('../pages/404'));

const routerConfig = [{
    path: '/',
    component: HomePage
},
{
    path: '/product',
    component: ProductPage
},
{
    path: '/chart/line',
    component: ChartLinePage
},
{
    path: '/chart/circle',
    component: ChartCirclePage
},
{
    path: '/rich',
    component: RichPage
},
{
    path: '/setting/password',
    component: PasswordPage
},
{
    component: ErrorPage
}
]



export default routerConfig;