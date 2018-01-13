import '../styles/home-submenu.scss';

import * as React from "react";

export default () => {
    return (
        <div className="sub-menu">
            <a href="#" className="select-posts active">Posts</a>
            <a href="#" className="select-categories">Categories</a>
        </div>
    );
};