import React from 'react';

class Toast extends React.Component {
    render() {
        return (
            <div id="toastContent">
                <div id="toast" className="toast toast-right-bottom" role="alert" aria-live="assertive" aria-atomic="true" data-delay="20000" data-autohide="true">
                    {/* Toast header */}
                    <div className="toast-header">
                        <i className="far fa-hand-peace mr-2"></i>
                        <strong className="mr-auto">Welcome to my test</strong>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* Toast body */}
                    <div className="toast-body">
                        Hello, I'm <strong>Ernesto Colina</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default Toast;