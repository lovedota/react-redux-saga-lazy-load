import * as React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

export default ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? 'active' : ''}>
                <Link to={to}>
                    {label}
                </Link>
            </li>
        )}
    />
);
