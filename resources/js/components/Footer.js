import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About from './About';

export default class Footer extends Component {
    render () {
    return (
        <Router>
            <div className="row justify-content-center" textColor="GREY">
                Joaquín Rodríguez - IAW 2019
            </div>
        </Router>
    )
    }
}