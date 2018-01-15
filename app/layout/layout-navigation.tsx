import './styles/layout-navigation.scss';

import * as React from "react";
import { NavLink } from 'react-router-dom';
import Routes from '../routes';

export default () => {
    return (
        <div className="layout-navigation navbar navbar-default navbar-fixed-top">
            <div className="container">
            {
                Routes.map((route, index) => (
                    <NavLink to={route.to} key={index} activeClassName="active" exact={true}>
                        {route.label}
                    </NavLink>
                ))
            }
            </div>
        </div>
    );
};