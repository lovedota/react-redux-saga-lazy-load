import 'babel-polyfill';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import { withAsync } from './common/async-component';
import BootstrapMenuLink from './common/bootstrap-menu-link';

import Routes from './routes';
import RootStore from './root/root-store';

const NavigationBar = (
    <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
                <ul className='nav navbar-nav'>
                    {
                        Routes.map((route, index) => (
                            <BootstrapMenuLink
                                label={route.label}
                                to={route.to}
                                activeOnlyWhenExact={route.activeOnlyWhenExact}
                                key={index}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
);

const Container = (
    <div className='container page-container'>
        <Provider store={RootStore}>
            <div>
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
    </div>
);

const Footer = (
    <footer className='footer'>
        <div className='container'>
            <p className='text-muted'>2017 Redux Saga Lazy Load.</p>
        </div>
    </footer>
);

const App = () => {
    return (
        <Router history={createHistory()}>
            <div>
                {NavigationBar}
                {Container}
                {Footer}
            </div>
        </Router>
    );
};

render(
    <App />,
    document.getElementById('container')
);
