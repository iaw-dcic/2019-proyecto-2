import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Prode from './prode/Index';

export default class Header extends Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/prode">Prodes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/prode" component={Prode} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/prode/add" component={Prode} />
                    <Route exact path="/prode/edit/:id" component={Prode} />
                </div>
            </div>
        );
    }
}