import * as React from "react";
import { connect } from "react-redux";

class ContactPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Contact Page</h1>
                </div>
            </div>
        );
    }
}

export default connect(
    ({page}) => ({
        isLoading: page.isLoading,
        items: page.displayItems
    })
)(ContactPage);
