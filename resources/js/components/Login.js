import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        ProdeCopAmerica
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>

                        <ul className="navbar-nav ml-auto">
                           
                        <li className="nav-item">
                                <a className="nav-link" href="/login"> Login </a>
                            </li>
                            
                                <li className="nav-item">
                                    <a class="nav-link" href="/register"> Register</a>
                                </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
          
        );
    }
}
