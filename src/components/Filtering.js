import React, { useState } from 'react';

function Filtering(props) {

    const [search, setSearch] = useState({
        search: ''
    });

    const [filter, setFilter] = useState({
        filter: ''
    })

    const handleEnterSearch = e => {
        props.handlerSearch(search, filter)
    }

    const handleChangeSearch = e => {
        setSearch({
            search: e.target.value
        })
    }

    const handleChangeFilter = e => {
        setFilter({
            filter: e.target.value
        })
    }

    return (
        <div className="row my-2">
            {/* Search by name */}
            <div className="col-sm-8 my-1">
                <label className="font-weight-bold">Search</label>
                <div className="input-group">
                    {/* Input Search */}
                    <input id="search"
                        className="form-control"
                        placeholder="For example: united"
                        type="search" aria-label="Search"
                        autoComplete="off"
                        onChange={handleChangeSearch}
                        onKeyUp={handleEnterSearch}
                    />
                    {/* Button */}
                    <button
                        className="btn btn-success"
                        onClick={() => props.handlerSearch(search, filter)}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            {/* Filtering */}
            <div className="col-sm-4 my-1">
                <label className="font-weight-bold">Filtering:</label>
                <select className="form-control" onChange={handleChangeFilter} multiple="">
                    <option value="0">---</option>
                    <option value="1">Name</option>
                    <option value="2">Laguange</option>
                    <option value="3">Continent</option>
                    <option value="4">Capital City</option>
                    <option value="5">Calling code</option>
                </select>
            </div>
        </div>
    );
}

export default Filtering;