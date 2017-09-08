import * as React from "react";
import LazyList from "../../common/lazy-list-component";

import AboutActions from "./about-actions";

import { connect } from "react-redux";

interface IHomePageProps {
    isLoading: boolean;
    items: any[];
}

class HomePage extends React.Component<IHomePageProps, any> {
    componentDidMount() {
        AboutActions.init();
    }

    renderItems() {
        const items = this.props.items.map((i, index) => {
            return (
                <a className="list-group-item" key={index}>
                    {i.name}
                </a>
            );
        });

        return items;
    }

    renderEmpty() {
        return (
            <p className="text-center">
                No Items
            </p>
        );
    }

    renderLoading() {
        return (
            <p className="text-center">
                Loading...
            </p>
        );
    }

    render() {
        const { isLoading, items } = this.props;

        let content;

        if (isLoading) {
            content = this.renderLoading();
        } else {
            content = items.length ?
            (
                <LazyList maxHeight={452} className="list-group">
                    {this.renderItems()}
                </LazyList>
            )
            : this.renderEmpty();
        }

        return (
            <div>
                <div className="page-header">
                    <h1>About Page</h1>
                </div>
                {content}
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
