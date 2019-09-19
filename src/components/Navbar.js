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
                    <div className="justify-content-end pr-2">
                        <i className="fas fa-code mr-2"></i> Ernesto Colina
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;