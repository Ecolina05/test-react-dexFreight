import React from 'react';

class Card extends React.Component {
    render() {
        //Props
        const { id, name, flag, capital, languages, continent, currencies } = this.props;

        //List
        const listLang = languages.map((language, index) => {
            return <span key={index}> ({language.iso639_2}) </span>
        });
        const listCurrencies = currencies.map((currencie, index) => {
            return <span key={index}> ({currencie.code}) </span>
        })

        return (
            <div className="card">
                <div className="card-body">
                    {/* Name and flag */}
                    <h5 className="card-title">
                        <span>{name}</span>
                        <img src={flag} className="flag mt-n2 rounded-circle float-right" alt="flag" />
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

                </div>
                <div className="card-footer">
                    {/* Detail */}
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="!#" className="card-link w-100 text-center stretched-link" data-toggle="modal" data-target={`#mdl${id}`}>
                                Details <i className="far fa-eye ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;