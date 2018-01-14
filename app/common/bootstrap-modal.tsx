import * as React from 'react';

interface Props {
    onConfirm?: () => void,
    onCancel?: () => void,
    onHidden?: () => void,
    confirm?: string,
    cancel?: string,
    title?: string;
}

class BootstrapModal extends React.Component<Props> {
    element: JQuery;

    componentDidMount() {
        this.element = $(this.refs.root);
        this.element.modal({ backdrop: 'static', keyboard: false, show: false });
        this.element.on('hidden.bs.modal', this.handleHidden.bind(this));
    }

    componentWillUnmount() {
        this.element.off('hidden.bs.modal', this.handleHidden.bind(this));
    }

    close() {
        this.element.modal('hide');
    }

    open() {
        this.element.modal('show');
    }

    render() {
        let confirmButton = null;
        let cancelButton = null;

        if (this.props.confirm) {
            confirmButton = (
                <button
                    onClick={this.handleConfirm.bind(this)}
                    className="btn btn-primary">
                    {this.props.confirm}
                </button>
            );
        }

        if (this.props.cancel) {
            cancelButton = (
                <button onClick={this.handleCancel.bind(this)} className="btn btn-default">
                    {this.props.cancel}
                </button>
            );
        }

        return (
            <div className="modal fade" ref="root">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                onClick={() => this.close()}
                            >
                                &times;
                            </button>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {cancelButton}
                            {confirmButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }

        this.close();
    }
    
    handleConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    }

    handleHidden() {
        if (this.props.onHidden) {
            this.props.onHidden();
        }
    }
}

export default BootstrapModal;