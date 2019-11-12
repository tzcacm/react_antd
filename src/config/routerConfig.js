import HomePage from '../pages/home';
import DetailsPage from '../pages/details';
import HelloPage from '../pages/hello';

const routerConfig = [{
        path: '/',
        component: HomePage
    },
    {
        path: '/list',
        component: DetailsPage
    },
    {
        path: '/list/one',
        component: HelloPage
    },
    {
        path: '/list/two',
        component: HelloPage
    }
]



export default routerConfig;