import 'babel-polyfill';
import 'jquery';
import 'bootstrap-sass';
import './main.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import { withAsync } from './common/async-component';

import Routes from './routes';
import RootStore from './root/root-store';

import Navigation from './layout/layout-navigation';

const Container = (
    <>
        <Navigation />
        <Provider store={RootStore}>
            <div className="container">
                {
                    Routes.map((route, index) => (
                        <Route
                            exact={true}
                            path={route.to}
                            component={withAsync(route.path)}
                            key={index}
                        />
                    ))
                }
            </div>
        </Provider>
    </>
);

const App = () => {
    return (
        <Router history={createHistory()}>
            <div>
                {Container}
            </div>
        </Router>
    );
};

render(
    <App />,
    document.getElementById('container')
);
