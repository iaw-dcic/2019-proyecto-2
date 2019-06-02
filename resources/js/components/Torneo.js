import React, { Component } from 'react';
import Partido from './Partido';

export default class Torneo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Torneo</h1>
                    </div>
                </div>

                <div className="row justify-content-left">
                    <div className="col-md-3">
                        <h4>Octavos de Final</h4>
                        <Partido equipo1="River" equipo2="Boca"/>
                        <br/>
                        <Partido equipo1="Hola" equipo2="Chau"/>
                    </div>
                    <div className="col-md-3">
                        <h4>Cuartos de Final</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Semifinales</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Final</h4>
                    </div>
                </div>
                
                <br/>

                <div className="row justify-content-left">
                    <div className="col-md-8">
                        <button type="button" className="btn btn-primary mr-1">
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}