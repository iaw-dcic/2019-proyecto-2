import React, { Component } from 'react';
import axios from 'axios';
import './partidos.css'
export default class Octavos extends Component {
    state = {
        item: [],
        jugador_uno: [],
        jugador_dos: [],

        pronostico: null,
    };

    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json.items[this.props.i],
                    jugador_uno: json.items[this.props.i].jugador_uno,
                    jugador_dos: json.items[this.props.i].jugador_dos,
                })
            });
    }



    handleClick(param, i, e) {
        // console.log('Parameter', param);
        //   console.log('Event', e);
        this.props.setJugador(param, i);
    }
    render() {
        var pais1 = this.state.jugador_uno.pais + ".png";
        var pais2 = this.state.jugador_dos.pais + ".png";
        return <div>

            <div className="row border">
                <div className="col-2 jugador">
                    <img src={pais1}></img>
                </div>
                <div className="col-10 jugador">
                    <button type="button" id={"juno" + this.props.i} className="btn btn-light jugador"
                        onClick={(e) => this.handleClick(this.state.jugador_uno, (Number(this.props.i)), e)}>
                        {this.state.jugador_uno.nombre}</button>
                </div>

                <button type="button" id={"junoabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.state.jugador_uno, (Number(this.props.i)), e)}>
                    {this.state.jugador_uno.abrev}</button>
            </div>

            <div className="row border">
                <div className="col-2 jugador">
                    <img src={pais2}></img>
                </div>
                <div className="col-10 jugador">
                    <button type="button" id={"jdos" + this.props.i} className="btn btn-light jugador "
                        onClick={(e) => this.handleClick(this.state.jugador_dos, (Number(this.props.i)), e)}>
                        {this.state.jugador_dos.nombre}</button>
                    <button type="button" id={"jdosabre" + this.props.i} className="btn btn-light jugadorabre"
                        onClick={(e) => this.handleClick(this.state.jugador_dos, (Number(this.props.i)), e)}>
                        {this.state.jugador_dos.abrev}</button>
                </div>

            </div>
        </div >

    }
}
