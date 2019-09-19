import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import './assets/css/style.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

//Bootstrap Jquery
$('.toast').toast('show');