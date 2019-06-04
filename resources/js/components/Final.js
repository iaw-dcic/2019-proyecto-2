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
        let pais = "";
        if (this.props.jugadorFinal.nombre != null) {
            jugador1 = this.props.jugadorFinal.nombre;
            jugadorAbre1 = this.props.jugadorFinal.abrev;
            pais = <img src={"banderas/" + this.props.jugadorFinal.pais + ".png"}></img>
        }

        return <div className="row header">

            <div className="col-2 jugador">
                {pais}
            </div>
            <div className="col-10 jugador">
                <button type="button" className="btn btn-light jugador"
                    onClick={(e) => this.handleClick(this.props.jugadorFinal, e)}>
                    {jugador1}
                </button>
            </div>
            <button type="button" className="btn btn-light jugadorabre"
                onClick={(e) => this.handleClick(this.props.jugadorFinal, e)}>
                {jugadorAbre1}
            </button>






        </div>


    }
}
