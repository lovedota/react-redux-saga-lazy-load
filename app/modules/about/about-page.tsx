import * as React from "react";

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

    render() {
        const { isLoading, items, color } = this.props;
        
        return (
            <div>
                <div className="page-header">
                    <h1 style={{color}}>About Page</h1>
                    <button onClick={this.onToggle.bind(this)}>Toggle</button>
                </div>
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
