import React, { Component } from 'react';

import Header from './Header'
export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Test Hola</div>
                            <div className="card-body">I'm an test component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
