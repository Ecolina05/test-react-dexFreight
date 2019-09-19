import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filtering from '../components/Filtering';
import Card from '../components/Card'
import Modal from '../components/Modal';
// import Paginator from '../components/Paginator';

function Countries() {
    //State
    const [countries, setCountries] = useState({
        countries: []
    });
    const [loading, setLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [numbersPage, setNumberPage] = useState(10);

    const getDataAll = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountries({
                    countries: res.data
                })
                setLoading(false);
            })
            .catch(error => {
                console.log(`Ha ocurrido un error ${error}`);
            });
    }

    const getDataFilter = (filter, value) => {
        axios
            .get(`https://restcountries.eu/rest/v2/${filter}/${value}`)
            .then(res => {
                setCountries({
                    countries: res.data
                })
            })
            .catch(error => {
                console.log('No results.');
            });
    }

    const handlerSearch = (search, filter) => {
        let f = parseInt(filter.filter);
        let s = search.search;

        if (s === '') {
            getDataAll();
        } else {
            switch (f) {
                case 1:
                    getDataFilter('name', s);
                    break;
                case 2:
                    getDataFilter('lang', s);
                    break;
                case 3:
                    getDataFilter('region', s);
                    break;
                case 4:
                    getDataFilter('capital', s);
                    break;
                case 5:
                    getDataFilter('callingcode', s);
                    break;
                default:
                    alert('Select an option to filter.');
            }
        }
    }
    useEffect(() => {
        getDataAll();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-4">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <h5 className="mt-2">Loading countries...</h5>
            </div>
        )
    } else {
        return (
            < div className="row" >
                <div className="col-sm-12">
                    <Filtering handlerSearch={handlerSearch} />
                    <ul className="list-group list-group-horizontal justify-content-center">
                        <div className="card-group">
                            {
                                countries.countries.map((data, index) => {
                                    return (
                                        <div>
                                            <li className="list-group-item mr-2 mt-2 rounded-sm" key={index}>
                                                <Card
                                                    id={index}
                                                    flag={data.flag}
                                                    name={data.name}
                                                    capital={data.capital}
                                                    languages={data.languages}
                                                    continent={data.region}
                                                    currencies={data.currencies}
                                                />
                                                <Modal
                                                    id={index}
                                                    flag={data.flag}
                                                    name={data.name}
                                                    topLevelDomain={data.topLevelDomain}
                                                    alpha3Code={data.alpha3Code}
                                                    subregion={data.subregion}
                                                    population={data.population}
                                                    borders={data.borders}
                                                    languages={data.languages}
                                                />
                                            </li>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </ul ><hr/>
                    {/* <Paginator /> */}
                </div>
            </div >
        );
    }
}

export default Countries;