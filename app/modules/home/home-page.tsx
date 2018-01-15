import React from 'react';
import BootstrapModal from 'app/common/bootstrap-modal';
import HomeActions from './home-actions';
import HomeList from './components/home-list';

import { connect } from 'react-redux';

interface Props {
    isLoaded: boolean;
    items: any[];
    total: number;
    selectedItem: any;
}

class HomePage extends React.Component<Props, any> {
    modal: any;

    componentDidMount() {
        if (!this.props.isLoaded) {
            HomeActions.init();
        }
    }

    componentWillUpdate(nextProps: Props) {
        if (nextProps.selectedItem !== this.props.selectedItem) {
            this.modal.open();
        }
    }

    render() {
        const { items, isLoaded, total, selectedItem } = this.props;

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
    ({home}) => ({
        isLoaded: home.isLoaded,
        items: home.items,
        total: home.total,
        selectedItem: home.selectedItem
    })
)(HomePage);
