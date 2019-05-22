import React, { Component } from 'react';
import './ppal.css';

export default class Header extends Component {


    render() {
        let nav;
        if (this.props.user == "null") {

            nav = <a href="/pr2/login" className="nav-link"> Login</a>
        }
        else {
            nav = <a className="nav-link" onClick={this.handleLogout}> Logout</a>
        }
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

                            {nav}
                        </li>
                    </ul>

                </div >
            </nav >
        );
    }

}
