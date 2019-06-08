import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        
                            <div className="card-header text-white bg-dark">Bienvenidos a Prodemerica</div>
                            <div className="card-body">
                            Recuerda que el nombre de tu prode por defecto sera "nuevo prode"
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
