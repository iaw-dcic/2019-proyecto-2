import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="jumbotron">
                            <h1 className="display-4">Hola, mundo!</h1>
                            <p className="lead">Este es mi primer test de
                            <span className="font-weight-bold"> REACT</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
