import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'
import Filtering from '../components/Filtering';
import Modal from '../components/Modal';

function Countries() {
    const [countries, setCountries] = useState({
        countries: []
    })

    const getData = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                console.log(res.data);
                setCountries({
                    countries: res.data
                })
            });
    }

    let handlerSearch = (search) => {
        console.log(search);
    }



    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="row">
            <div className="col-sm-12">
                <Filtering handlerSearch={handlerSearch} />
                <ul className="list-group list-group-horizontal justify-content-center">
                    <div className="card-group">
                        {
                            countries.countries.map((data, index) => {
                                return (
                                    <li className="list-group-item mr-2 mt-2 rounded-sm" key={index}>
                                        <Card
                                            flag={data.flag}
                                            name={data.name}
                                            capital={data.capital}
                                            languages={data.languages}
                                            continent={data.region}
                                            currencies={data.currencies}
                                        />
                                    </li>
                                );
                            })
                        }
                    </div>
                </ul >
                <Modal />
            </div>
        </div>
    );
}

export default Countries;