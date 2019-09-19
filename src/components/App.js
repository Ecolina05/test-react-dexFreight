import React from 'react';
import Navbar from './Navbar'
import Countries from '../pages/Countries';
import Toast from './Toast';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* Header */}
                <Navbar />
                {/* Body */}
                <div className="m-4">
                    <Countries />
                </div>
                {/* Footer */}
                <Toast />
            </div>
        );
    }
}

export default App;