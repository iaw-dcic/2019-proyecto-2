import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css'

export default class Nav extends Component {
    render() {
        return (
            <div id="wrapper" className="animate">
                <nav className="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-md-auto d-md-flex">
                            <li className="nav-item">
                                <label className="nav-link" title="Username"> Bienvenido/a ! </label>
                            </li>
                            <li>
                                <a className="nav-link" href="" title="Salir"
                                    onClick="event.preventDefault();
                                    document.getElementById('logout-form').submit();"><i className="fas fa-power-off"></i>Cerrar sesión
                                </a>
                            </li>
                        </ul>
                        </div>
                </nav>
            </div>
        );
    }
}