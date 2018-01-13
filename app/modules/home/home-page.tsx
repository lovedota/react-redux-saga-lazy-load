import * as React from 'react';

import HomeActions from './home-actions';
import HomeList from './components/home-list';

import { connect } from 'react-redux';

interface IHomePageProps {
    isLoaded: boolean;
    items: any[];
    total: number;
}

class HomePage extends React.Component<IHomePageProps, any> {
    componentDidMount() {
        HomeActions.init();
    }

    render() {
        const { items, isLoaded, total } = this.props;

        let content;

        if (!isLoaded) {
            content = (
                <div className="loader-wrapper">
                    <div className="loader" />
                </div>
            );
        } else if (total > 0) {
            content = (
                <HomeList 
                    items={items} 
                    total={total} 
                />
            );
        } else {
            content = (
                <div className="text-center">No Items</div>
            );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default connect(
    ({page}) => ({
        isLoaded: page.isLoaded,
        items: page.items,
        total: page.total
    })
)(HomePage);
