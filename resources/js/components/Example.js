import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pronostico from './Pronostico/Pronostico'
import Playoff from './Playoff/Playoff'

export default class Example extends Component {
    
    constructor() {
        super()
        this.state = {
            content:''
        }
    }

    handleChangePronostico() {
        this.setState({
            content: <Pronostico />
        });
    }

    handleChangePlayoff() {
        this.setState({
            content: <Playoff />
        });
    }

    render() { 
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><b>Bienvenido al pronostico de la Copa Libertadores!</b></div>
                            <div className="card-body">
                                <button onClick={(event) => this.handleChangePronostico()} >Iniciar pronóstico</button>         
                            </div>
                            <div className="card-body">
                                 <button onClick={(event) => this.handleChangePlayoff()} >Mis pronósticos</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                                <section id="bracket">
                                    <div className="container">
                                        {this.state.content}
                                    </div>
                                </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


