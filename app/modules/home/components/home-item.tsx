import '../styles/home-item.scss';

import React from 'react';
import HomeActions from '../home-actions';

export default (props) => {
    const { data } = props;

    return (
        <article
            className="home-item"
            onClick={() => HomeActions.viewArticle(data)}
        >
            <div className="home-item-content">
                <img
                    src={data.thumbnail}
                    alt="post img"
                    className="home-item-thumb img-responsive img-thumbnail"
                />
                <div className="home-item-description">
                    <p>
                        {data.description}
                    </p>
                    <p className="home-item-meta">
                        {data.publishDate}
                    </p>
                </div>

            </div>
        </article>
    );
};
