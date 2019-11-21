import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routerConfig from './config/routerConfig';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import LoginPage from './pages/login';
import ErrorPage from './pages/404';
import IndexPage from './pages/index';

export default class Router extends Component {
    render() {
        const config = routerConfig;
        return (
            <Provider store={store} >
                <HashRouter>
                    <App>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path="/login" component={LoginPage}></Route>
                                <Route path="/" render={() =>
                                    <IndexPage>
                                        {/* 子路由懒加载 */}
                                        <Suspense fallback={<div>正在加载...</div>}>
                                            <Switch>
                                                {
                                                    config.map((item, key) => {
                                                        if (item['path']) {
                                                            return <Route path={item['path']} exact component={item['component']} key={key}></Route>
                                                        } else {
                                                            return <Route component={item['component']} key={key}></Route>
                                                        }
                                                    })
                                                }
                                            </Switch>
                                        </Suspense>
                                    </IndexPage>
                                }></Route>
                                <Route component={ErrorPage}></Route>
                            </Switch>
                        </Suspense>
                    </App>
                </HashRouter >
            </Provider>
        )

    }
}
