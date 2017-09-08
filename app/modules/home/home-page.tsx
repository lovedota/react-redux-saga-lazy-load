import * as React from "react";

import HomeActions from "./home-actions";

import { connect } from "react-redux";

interface IHomePageProps {
    isLoading: boolean;
    items: any[];
}

class HomePage extends React.Component<IHomePageProps, any> {
    componentDidMount() {
        HomeActions.init();
    }

    renderItems() {
        const items = this.props.items.map((i, index) => {
            return (
                <tr key={index}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.quantity}</td>
                </tr>
            );
        });

        return items;
    }

    renderEmpty() {
        return (
            <tr>
                <td colSpan={3} className="text-center">No Items</td>
            </tr>
        );
    }

    renderLoading() {
        return (
            <tr>
                <td colSpan={3} className="text-center">Loading...</td>
            </tr>
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
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
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
