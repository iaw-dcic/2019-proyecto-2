import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'

export default class Example extends Component {

    render() { 
        return (
            <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header"><b>Bienvenido al pronostico de la Copa Libertadores!</b></div>
                            <div className="card-body">
                                <NavLink to="/pronosticoInit" className="btn-playoff btn-playoff1 mr-2">Iniciar pronóstico</NavLink>
                                <NavLink to="/myPlayoffs" className="btn-playoff btn-playoff1">Mis Pronósticos</NavLink>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}


