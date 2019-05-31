import React, { Component } from 'react';
import './ppal.css';

export default class Header extends Component {

    state = {

        user: []
    };

    componentWillMount() {
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');


        var miInit = {
            headers: {
                'X-CSRF-TOKEN': token.content,
                'Authorization': 'Bearer ' + api_token.content
            }
        }
        fetch('http://localhost/pr2/api/user', miInit)
            .then(res => res.json())
            .then(json => {
                if (json != null)
                    this.setState({
                        user: json,
                    })
            });

    }

    render() {
        let nav;

        if (this.state.user.name != null) {
            nav = <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hola {this.state.user.name} !
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/logout">Cerrar Sesion</a>
                </div>
            </div>

        } else
            nav = <a className="nav-link" href="/login"> Login</a>

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <a className="navbar-brand" href="/home">

                    Master 1000 - Roma

                </a>

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
