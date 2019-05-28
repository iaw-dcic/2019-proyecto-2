import React, { Component } from 'react';

import './partidos.css'
export default class Semis extends Component {
    state = {
        item: []
    };



    handleClick(param, i, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        this.props.setJugador(param, i);
    }
    render() {
        let jugador1Nombre = "";
        let jugadorAbre1 = ""; let jugadorAbre2 = "";
        let jugador2Nombre = "";
        if (this.props.jugador1 != null) {
            jugador1Nombre = this.props.jugador1.nombre;
            jugadorAbre1 = this.props.jugador1.abrev;
        }
        if (this.props.jugador2 != null) {
            jugador2Nombre = this.props.jugador2.nombre;
            jugadorAbre2 = this.props.jugador2.abrev;
        }
        return <div>

            <div className="row">
                <button type="button" id={"juno" + this.props.i} className="btn btn-light jugador"
                    onClick={(e) => this.handleClick(this.props.jugador1, (Number(this.props.i)), e)}>
                    {jugador1Nombre}
                </button>
                <button type="button" id={"junoabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.props.jugador1, (Number(this.props.i)), e)}>
                    {jugadorAbre1}
                </button>
            </div>

            <div className="row">
                <button type="button" id={"jdos" + this.props.i} className="btn btn-light jugador "
                    onClick={(e) => this.handleClick(this.props.jugador2, (Number(this.props.i)), e)}>
                    {jugador2Nombre}
                </button>
                <button type="button" id={"jdosabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.props.jugador2, (Number(this.props.i)), e)}>
                    {jugadorAbre2}
                </button>
            </div>



        </div>


    }
}
