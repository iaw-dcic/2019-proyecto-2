import React, { Component } from 'react';

import './partidos.css'
export default class Semis extends Component {
    state = {
        item: []
    };



    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);


    }
    render() {
        let jugador1 = "";
        let jugadorAbre1 = ""; let jugadorAbre2 = "";
        let jugador2 = "";
        if (this.props.jugador1 != null) {
            jugador1 = this.props.jugador1.nombre;
            jugadorAbre1 = this.props.jugador1.abrev;
        }
        if (this.props.jugador2 != null) {
            jugador2 = this.props.jugador2.nombre;
            jugadorAbre2 = this.props.jugador2.abrev;
        }
        return <div className="col-6">

            <div className="row">
                <button type="button" id={"juno" + this.props.i} className="btn btn-light jugador"
                    onClick={(e) => this.handleClick(jugador1, (Number(this.props.i)), e)}>
                    {jugador1}
                </button>
                <button type="button" id={"junoabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(jugador1, (Number(this.props.i)), e)}>
                    {jugadorAbre1}
                </button>
            </div>

            <div className="row">
                <button type="button" id={"jdos" + this.props.i} className="btn btn-light jugador "
                    onClick={(e) => this.handleClick(jugador2, (Number(this.props.i)), e)}>
                    {jugador2}
                </button>
                <button type="button" id={"jdosabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(jugador2, (Number(this.props.i)), e)}>
                    {jugadorAbre2}
                </button>
            </div>



        </div>


    }
}
