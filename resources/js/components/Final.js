import React, { Component } from 'react';

import './partidos.css'
export default class Final extends Component {
    state = {
        item: []
    };

    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        this.props.setJugador(param);


    }

    render() {
        let jugador1 = "";
        let jugadorAbre1 = "";

        if (this.props.jugadorFinal != null) {
            jugador1 = this.props.jugadorFinal.nombre;
            jugadorAbre1 = this.props.jugadorFinal.abrev;
        }

        return <div>


            <button type="button" className="btn btn-light jugador"
                onClick={(e) => this.handleClick(this.props.jugadorFinal, e)}>
                {jugador1}
            </button>
            <button type="button" className="btn btn-light jugadorabre"
                onClick={(e) => this.handleClick(this.props.jugadorFinal, e)}>
                {jugadorAbre1}
            </button>






        </div>


    }
}
