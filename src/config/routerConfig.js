import HomePage from '../pages/home';
import ProductPage from '../pages/product';
import ChartLinePage from '../pages/chartLine';
import ChartCirclePage from '../pages/chartCircle';
import RichPage from '../pages/rich';
import PasswordPage from '../pages/password';
import ErrorPage from '../pages/404';

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