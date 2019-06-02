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
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Octavos de Final</th>
                                    <th>Cuartos de Final</th>
                                    <th>Semifinales</th>
                                    <th>Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <Partido equipo1="River" equipo2="Boca"/>
                                    <Partido equipo1="Hola" equipo2="Chau"/>
                                </tr>
                            </tbody>
                        </table>

                        <button type="button" className="btn btn-primary">
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}