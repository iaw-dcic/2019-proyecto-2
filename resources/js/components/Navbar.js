import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
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
                           
                                <li className="nav-item dropdown">
                                    <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        Nombre de Usuario <span className="caret"></span>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/login"
                                        onClick={this.handelClick}>
                                            Logout
                                        </a>

                                        
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        );
    }

    handelClick = (e) => {
        event.preventDefault();
        document.getElementById('logout-form').submit();
    }
}