import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light px-4 pull-sm-left">
                    <div className="navbar-brand">
                        <i className="fas fa-globe-americas text-success"></i>
                        <span className="font-weight-bold ml-2 nav-logo">Countries</span>
                    </div>
                    {/* <div className="mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <input id="search" className="form-control search" type="search" placeholder="&#xf002;   Search by name" aria-label="Search" autoComplete="off" onChange={}/>
                            </li>
                        </ul>
                    </div> */}
                </nav>
            </div>
        );
    }
}

export default Navbar;