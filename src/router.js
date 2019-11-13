import React, { Component } from 'react';
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
                        <Switch>
                            <Route path="/login" component={LoginPage}></Route>
                            <Route path="/" render={() =>
                                <IndexPage>
                                    <Switch>
                                        {
                                            config.map((item, key) => {
                                                return <Route path={item['path']} exact component={item['component']} key={key}></Route>
                                            })
                                        }
                                    </Switch>
                                </IndexPage>
                            }></Route>
                            <Route component={ErrorPage}></Route>
                        </Switch>
                    </App>
                </HashRouter >
            </Provider>
        )

    }
}
