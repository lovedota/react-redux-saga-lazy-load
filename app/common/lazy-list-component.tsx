import * as React from "react";
import * as cloneWithProps from "react-clonewithprops";

import * as elementSize from "element-size";

type LazyListProps = {
    maxHeight?: number;
    itemPadding?: number;
    children?: any;
    className?: string;
};

type LazyListState = {
    childrenTop?: number;
    childrenBottom?: number;
    childrenToRender?: number;
    scrollTop?: number;
    height?: number;
    childHeight?: number;
};

class LazyListComponent extends React.Component<LazyListProps, LazyListState> {
    static defaultProps = {
        itemPadding: 3
    };

    refs: {
        [key: string]: (Element);
        container: (HTMLInputElement);
    };

    constructor(props) {
        super(props);

        this.state = {
            childrenTop: 0,
            childrenBottom: 0,
            childrenToRender: 10,
            scrollTop: 0,
            height: this.props.maxHeight,
            childHeight: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        const childrenTop = Math.floor(this.state.scrollTop / this.state.childHeight);
        let childrenBottom = (nextProps.children.length - childrenTop - this.state.childrenToRender);

        if (childrenBottom < 0) {
            childrenBottom = 0;
        }

        const height = this.getHeight(
            nextProps.children.length,
            this.state.childHeight,
            nextProps.maxHeight
        );

        let numberOfItems = Math.ceil(height / this.state.childHeight);

        if (height === this.props.maxHeight) {
            numberOfItems += this.props.itemPadding;
        }

        this.setState({
            childrenTop,
            childrenBottom,
            childrenToRender: numberOfItems,
            height
        });
    }

    componentDidMount() {
        const childHeight = this.getChildHeight();

        const height = this.getHeight(
            this.props.children.length,
            childHeight,
            this.props.maxHeight
        );

        let numberOfItems = Math.ceil(height / childHeight);

        if (height === this.props.maxHeight) {
            numberOfItems += this.props.itemPadding;
        }

        this.setState({
            childHeight,
            childrenToRender: numberOfItems,
            childrenTop: 0,
            childrenBottom: this.props.children.length - numberOfItems,
            height
        });
    }

    componentDidUpdate() {
        if (this.state.childHeight !== this.getChildHeight()) {
            this.setState({ childHeight: this.getChildHeight() });
        }
    }

    render() {
        const start = this.state.childrenTop;
        const end = this.state.childrenTop + this.state.childrenToRender;

        const childrenToRender = this.props.children.slice(start, end);
        const children = childrenToRender.map((child, index) => {
            if (index === 0) {
                return cloneWithProps(child, { ref: "child-" + index, key: index });
            }
            return child;
        });

        children.unshift(
            <div style={{ height: this.state.childrenTop * this.state.childHeight }} key="top"/>
        );

        children.push(
            <div style={{ height: this.state.childrenBottom * this.state.childHeight }} key="bottom"/>
        );

        return (
            <div style={{ height: this.state.height, overflowY: "auto" }}
                className={this.props.className}
                ref="container"
                onScroll={this.onScroll.bind(this)}>
                {children}
            </div>
        );
    }

    private onScroll() {
        const container = this.refs["container"];
        const scrollTop = container.scrollTop;

        const childrenTop = Math.floor(scrollTop / this.state.childHeight);
        let childrenBottom = (this.props.children.length - childrenTop -
            this.state.childrenToRender);

        if (childrenBottom < 0) {
            childrenBottom = 0;
        }

        this.setState({
            childrenTop: childrenTop,
            childrenBottom: childrenBottom,
            scrollTop: scrollTop
        });
    }

    private getHeight(numChildren, childHeight, maxHeight) {
        const fullHeight = numChildren * childHeight;
        if (fullHeight < maxHeight) {
            return fullHeight;
        } else {
            return maxHeight;
        }
    }

    private getElementHeight(element) {
        const marginTop = parseInt(window.getComputedStyle(element).marginTop, 10);
        return elementSize(element)[1] - marginTop;
    }

    private getChildHeight() {
        const firstChild = this.refs["child-0"];
        const el = firstChild;

        return this.getElementHeight(el);
    }
}

export default LazyListComponent;
