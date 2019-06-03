import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="copyright-box">
                            <p className="copyright">&copy; Copyright 2019. Todos los derechos reservados</p>
                            <div className="credits">
                                <a href="https://github.com/dylanbarbona">Dylan Barbona</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }
}
