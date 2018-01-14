import FacebookLoader from '../styles/images/facebook-loader.gif';

import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import HomeItem from './home-item';
import HomeActions from '../home-actions';

interface Props {
    items: any[],
    total: number
}

export default (props: Props) => {
    const { items, total } = props;

    let content = items.map((item, index) => {
        return (
            <HomeItem data={item} key={index} />
        );
    });

    return (
        <div className="home-list">
            <InfiniteScroll
                pageStart={0}
                loadMore={() => HomeActions.loadMore()}
                hasMore={items.length < total}
                loader={<div className="text-center"><img src={FacebookLoader} /></div>}
            >
                 {content}
            </InfiniteScroll>
        </div>
    );
};