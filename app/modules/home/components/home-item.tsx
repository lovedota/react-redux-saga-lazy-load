import * as React from 'react';

export default (props) => {
    const { data } = props;

    return (
        <div className="col-md-10 blogShort">
            <h1>{data.headline}</h1>
            <img
                src={data.thumbnail}
                alt="post img"
                className="pull-left img-responsive thumb margin10 img-thumbnail"
            />

            <article>
                <p>
                    {data.description}
                </p>
            </article>
            <a className="btn btn-blog pull-right marginBottom10">READ MORE</a>
        </div>
    );
};
