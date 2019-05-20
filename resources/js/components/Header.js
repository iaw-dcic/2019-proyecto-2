import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <a className="navbar-brand" href="#">Master 1000 ROMA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">¿Cómo jugar?</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav" ml-auto="">
                        <li className="nav-item">
                            <a className="nav-link" href="/pr2/login">Login</a>
                        </li>
                    </ul>

                </div >
            </nav >
        );
    }
}
