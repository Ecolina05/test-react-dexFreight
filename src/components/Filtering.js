import React from 'react';

class Filtering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        let handleChange = (e) => {
            this.setState({
                search: e.target.value
            })
        }

        const { handlerSearch } = this.props;
        const { search } = this.state;

        return (
            <div className="row my-2">
                {/* Search by name */}
                <div className="col-sm-8 my-1">
                    <label className="font-weight-bold">Search by name</label>
                    <div className="input-group">
                        <input id="search" className="form-control" placeholder="For example: united" type="search" aria-label="Search" autoComplete="off" onChange={handleChange} value={search} />
                        <button className="btn btn-success" onClick={() => handlerSearch(search)}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                {/* Filtering */}
                <div className="col-sm-4 my-1">
                    <label className="font-weight-bold">Filtering:</label>
                    <select className="form-control">
                        <option value="">---</option>
                        <option value="">Laguange</option>
                        <option value="">Continent</option>
                        <option value="">Capital City</option>
                        <option value="">Calling code</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filtering;