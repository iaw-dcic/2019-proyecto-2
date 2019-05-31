import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Prode from './Prode';

export default class Prodes extends Component {
    render () {
    return (
        <div>
            <div>
                <h1>Prodes:</h1>
            </div>
            <div>
                <Router>
                    <div>
                        <Link to="/prode">Mis prodes</Link>
                        <Route exact path="/prode" component={Prode} />
                    </div>
                    <div>
                        <Link to="/prode">Agregar prode</Link>
                        <Route exact path="/prode" component={Prode} />
                    </div>
                </Router>
            </div>
        </div>
    );
    }
}