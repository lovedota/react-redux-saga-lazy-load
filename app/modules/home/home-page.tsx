import * as React from 'react';

import HomeActions from './home-actions';

import HomeItem from './components/home-item';

import { connect } from 'react-redux';

interface IHomePageProps {
    isLoading: boolean;
    items: any[];
}

class HomePage extends React.Component<IHomePageProps, any> {
    componentDidMount() {
        HomeActions.init();
    }

    renderItems() {
        const items = this.props.items.map((item, index) => {
            return (
                <HomeItem data={item} key={index} />
            );
        });

        return items;
    }

    renderEmpty() {
        return (
            <div className="text-center">
                No Items
            </div>
        );
    }

    renderLoading() {
        return (
            <div className="text-center">
                Loading...
            </div>
        );
    }

    render() {
        const { isLoading, items } = this.props;

        let content;

        if (isLoading) {
            content = this.renderLoading();
        } else {
            content = items.length ? this.renderItems() : this.renderEmpty();
        }

        return (
            <div>
                <div className="page-header">
                    <h1>Home Page</h1>
                </div>
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

export default connect(
    ({page}) => ({
        isLoading: page.isLoading,
        items: page.items
    })
)(HomePage);
