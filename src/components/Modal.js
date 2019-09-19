import React from 'react';

class Modal extends React.Component {
    render() {
        //Props
        const { id, name, flag, topLevelDomain, alpha3Code, subregion, population, borders, languages } = this.props;
        
        //lists
        const listTopLvlDomain = topLevelDomain.map((tld, index) => {
            return (
                <span key={index}> ({tld}) </span>
            );
        })
        const listBorders = borders.map((border, index) => {
            return (
                <span key={index}> ({border}) </span>
            );
        })
        const listLanguages = languages.map((language, index) => {
            return (
                <span key={index}> ({language.iso639_2}) </span>
            );
        });

        return (
            <div className="modal fade" id={`mdl${id}`} tabIndex="-1" role="dialog" aria-hidden="true" key={id}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/* Header */}
                        <div className="modal-header">
                            {/* Name */}
                            <h5 className="modal-title font-weight-bold" id="exampleModalLabel">{name}</h5>
                            {/* Flag */}
                            <img src={flag} className="flag ml-2" alt="flag" width="30" height="30" />
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Top level domain */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Top level domain:</div>
                                <div className="col-sm-8">{listTopLvlDomain}</div>
                            </div>
                            {/* Alpha code */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Alpha code:</div>
                                <div className="col-sm-8">{alpha3Code}</div>
                            </div>
                            {/* Full name */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Full name:</div>
                                <div className="col-sm-8">{name}</div>
                            </div>
                            {/* Subregion */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Subregion:</div>
                                <div className="col-sm-8">{subregion}</div>
                            </div>
                            {/* Population */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Population:</div>
                                <div className="col-sm-8">{population}</div>
                            </div>
                            {/* Borders */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Borders:</div>
                                <div className="col-sm-8">{listBorders}</div>
                            </div>
                            {/* Languages */}
                            <div className="row my-1">
                                <div className="col-sm-4 font-weight-bold">Languages:</div>
                                <div className="col-sm-8">{listLanguages}</div>
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
