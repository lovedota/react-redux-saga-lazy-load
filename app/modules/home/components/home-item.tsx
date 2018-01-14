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
            <h2>{data.headline}</h2>
            <div className="home-item-content">
                <img
                    src={data.thumbnail}
                    alt="post img"
                    className="home-item-thumb img-responsive img-thumbnail"
                />
                <p className="home-item-description">
                    {data.description}
                </p>             
            </div>
            <div className="home-item-meta">
                {data.publishDate}
            </div>
        </article>
    );
};
