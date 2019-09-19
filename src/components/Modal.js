import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="mdlDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Details Countrie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Top level domain */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Top level domain:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>
                            {/* Alpha code */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Alpha code:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>
                            {/* Full name */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Full name:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>
                            {/* Subregion */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Subregion:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>
                            {/* Population */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Population:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>
                            {/* Borders */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Borders:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>
                            {/* Languages */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Languages:</div>
                                <div className="col-sm-8">Lorem imsup dolor</div>
                            </div>

                        </div>
                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
