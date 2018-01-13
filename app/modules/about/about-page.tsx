import * as React from "react";
import LazyList from "../../common/lazy-list-component";

import AboutActions from "./about-actions";

import { connect } from "react-redux";

type AboutPageProps = {
    isLoading: boolean;
    items: any[];
    color: string;
};

class AboutPage extends React.Component<AboutPageProps, any> {
    componentDidMount() {
        AboutActions.init();
    }

    renderItems() {
        const items = this.props.items.map((i, index) => {
            return (
                <a className="list-group-item" key={index}>
                    <input value={i.fullName} onChange={this.updateItem.bind(this, i)}/> {i.fullName} {i.dateOfBirth}
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
        const { isLoading, items, color } = this.props;

        let content;

        if (isLoading) {
            content = this.renderLoading();
        } else {
            // content = items.length ?
            // (
            //     <LazyList maxHeight={452} className="list-group">
            //         {this.renderItems()}
            //     </LazyList>
            // )
            // : this.renderEmpty();
        }

        return (
            <div>
                <div className="page-header">
                    <h1 style={{color}}>About Page</h1>
                    <button onClick={this.onToggle.bind(this)}>Toggle</button>
                </div>
                {content}
            </div>
        );
    }

    private onToggle() {
        AboutActions.changeColor();
    }

    private updateItem(item, e: React.ChangeEvent<HTMLInputElement>) {
        const newItem = {
            ...item,
            name: e.target.value
        };

        AboutActions.update(newItem);
    }
}

export default connect(
    ({page}) => ({
        isLoading: page.isLoading,
        items: page.items,
        color: page.color
    })
)(AboutPage);
