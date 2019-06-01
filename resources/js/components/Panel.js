import React, { Component } from 'react';
import Partido from './Partido';

export default class Panel extends Component {

    constructor() {
        super();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.etapa !== "final") {
            this.props.crearGanadoresSiguienteEtapa(this.props.etapa);
        }
    };

    renderEquipos() {
        var partidoCuartos = Object.values(this.props.partidos).filter(partido => {
            return partido.etapa === this.props.etapa;
        })
        return partidoCuartos.map(partido => {
            return <Partido etapa={this.props.etapa} partido={this.props.partidos[partido.numero_partido]} actualizarPartidos={this.props.actualizarPartidos} clave={partido.numero_partido} key={partido.numero_partido} nombre_equipo1={partido.equipo1} nombre_equipo2={partido.equipo2}></Partido>
        })
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit}>
                            <h1 className="col-xs-12 text-center">{this.capitalizeFirstLetter(this.props.etapa)}</h1>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Elegir Ganador</th>
                                        <th scope="col">Equipo 1</th>
                                        <th scope="col">Resultado 1</th>
                                        <th scope="col"> - </th>
                                        <th scope="col">Equipo 2</th>
                                        <th scope="col">Resultado 2</th>
                                        <th scope="col">Elegir Ganador</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.renderEquipos()
                                    }
                                </tbody>
                            </table>
                            {
                                (this.props.etapa !== "final") ? (
                                    <div className="col-xs-12 text-center">
                                        <button type="submit" className="btn btn-primary text-center center">
                                            Actualizar {this.props.siguienteEtapa}
                                        </button>
                                    </div>
                                ) : (
                                        <div>

                                        </div>
                                    )

                            }

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
