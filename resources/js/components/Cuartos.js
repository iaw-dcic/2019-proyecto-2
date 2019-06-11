import React, { Component } from 'react';

export default class Cuartos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jugador: []
        } //state contents here

    }

    handleClick(param, i, e) {
        var arreglo = ["s1j1", "s2j1", "s1j2", "s2j2"];
        this.props.setJugador(param, i, arreglo);


    }


    render() {

        return <div>
            <div className="row border">
                <div className="col-2 jugador">
                    {this.props.jugador1.pais && <img src={"banderas/" + this.props.jugador1.pais + ".png"}></img>}

                </div>
                <div className="col-10 jugador">

                    <button type="button" id={"juno" + this.props.i} className="btn btn-light jugador"
                        onClick={(e) => this.handleClick(this.props.jugador1, (Number(this.props.i)), e)}>
                        {this.props.jugador1.nombre && this.props.jugador1.nombre}
                    </button>
                </div>
                <button type="button" id={"junoabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.props.jugador1, (Number(this.props.i)), e)}>
                    {this.props.jugador1.abrev && this.props.jugador1.abrev}
                </button>
            </div>

            <div className="row border">
                <div className="col-2 jugador">
                    {this.props.jugador2.pais && <img src={"banderas/" + this.props.jugador2.pais + ".png"}></img>}

                </div>
                <div className="col-10 jugador">
                    <button type="button" id={"jdos" + this.props.i} className="btn btn-light jugador "
                        onClick={(e) => this.handleClick(this.props.jugador2, (Number(this.props.i)), e)}>
                        {this.props.jugador2.nombre && this.props.jugador2.nombre}
                    </button>
                </div>
                <button type="button" id={"jdosabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.props.jugador2, (Number(this.props.i)), e)}>
                    {this.props.jugador2.abrev && this.props.jugador2.abrev}
                </button>
            </div>

        </div>

    }
}
