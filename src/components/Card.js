import React from 'react';

class Card extends React.Component {
    render() {
        //Props
        const { name, flag, capital, languages, continent, currencies } = this.props;
        //Languages
        const listLang = languages.map(language => {
            return <span> ({language.iso639_2}) </span>
        });
        //Currencies
        const listCurrencies = currencies.map(currencie => {
            return <span> ({currencie.code}) </span>
        })
        return (
            <div className="card">
                <div className="card-body">
                    {/* Name and flag */}
                    <h5 className="card-title">
                        <span>{name}</span>
                        <img src={flag} className="flag mt-n2 float-right" alt="flag" />
                    </h5><hr />
                    {/* Capital */}
                    <div className="row my-1">
                        <div className="col-sm-5 font-weight-bold">Capital city:</div>
                        <div className="col-sm-7">{capital}</div>
                    </div>
                    {/* Language */}
                    <div className="row my-1">
                        <div className="col-sm-5 font-weight-bold">Languages:</div>
                        <div className="col-sm-7">{listLang}</div>
                    </div>
                    {/* Continent */}
                    <div className="row my-1">
                        <div className="col-sm-5 font-weight-bold">Continent:</div>
                        <div className="col-sm-7">{continent}</div>
                    </div>
                    {/* Currencies */}
                    <div className="row my-1">
                        <div className="col-sm-5 font-weight-bold">Currencies:</div>
                        <div className="col-sm-7">{listCurrencies}</div>
                    </div>
                    {/* Detail */}
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <button className="btn btn-primary w-100" data-toggle="modal" data-target="#mdlDetails">
                                Details <i className="far fa-eye ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;