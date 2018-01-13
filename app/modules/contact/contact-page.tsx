import * as React from "react";
//import LazyList from "../../common/lazy-list-component";
import * as ContactWorker from "worker-loader!./contact-worker.ts";

const worker = new ContactWorker();

import { connect } from "react-redux";

worker.postMessage({a: 1});

class ContactPage extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            items: [],
            color: "blue"
        };
    }
    componentDidMount() {
        worker.addEventListener("message", (event) => {
            const { isLoading, items } = event.data;

            this.setState({
                isLoading,
                items
            });
        });

        worker.postMessage({type: "contact/init"});
    }

    renderItems() {
        const items = this.state.items.map((i, index) => {
            return (
                <a className="list-group-item" key={index}>
                    <input value={i.fullName} onChange={this.updateItem.bind(this, i)} />
                    {i.fullName} {i.dateOfBirth}
                </a>
            );
        });

        return items;
    }

    render() {
        const { items, isLoading, color } = this.state;

        let content;

        if (isLoading) {
            content = (
                <p className="text-center">Loading...</p>
            );
        } else if (items.length) {
            // content = (
            //     <LazyList maxHeight={452} className="list-group">
            //         {this.renderItems()}
            //     </LazyList>
            // );
        }

        return (
            <div>
                <div className="page-header">
                    <h1 style={{color}}>Contact Page</h1>
                    <button onClick={this.onToggle.bind(this)}>Toggle</button>
                </div>
                {content}
            </div>
        );
    }

    private onToggle() {
        function getRandomColor() {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }


        this.setState({
           color: getRandomColor()
        });
    }

    private updateItem(item, e: React.ChangeEvent<HTMLInputElement>) {
        const newItem = {
            ...item,
            fullName: e.target.value
        };

        worker.postMessage({type: "contact/update", item: newItem});
    }
}

export default connect(
    ({page}) => ({
        isLoading: page.isLoading,
        items: page.displayItems
    })
)(ContactPage);
