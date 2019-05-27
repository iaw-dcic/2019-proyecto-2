import React, { Component } from 'react';

import './partidos.css'
export default class Cuartos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        } //state contents here

    }

    handleClick(param, i, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        var id;
        switch (i) {

            case 1:
                id = "semis_1_juno";
                break;
            case 2:
                id = "semis_1_jdos";
                break;
            case 3:
                id = "semis_2_juno";
                break;
            case 4:
                id = "semis_2_jdos";
                break;

        }

        this.props.jugador(param);


    }

    render() {


        return <div>


            <div className="row">
                <button type="button" id={"juno" + this.props.i} className="btn btn-light jugador"
                > cuarto{this.props.i}j1
                </button>
                <button type="button" id={"junoabre" + this.props.i} className="btn btn-light jugadorabre"
                >
                </button>
            </div>

            <div className="row">
                <button type="button" id={"jdos" + this.props.i} className="btn btn-light jugador "
                >cuarto{this.props.i}j2
                </button>
                <button type="button" id={"jdosabre" + this.props.i} className="btn btn-light jugadorabre"
                >
                </button>
            </div>

        </div>




    }
}
