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
        fetch('/pr2/api/octavos/' + this.props.i)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json,
                    jugador_uno: json.items.jugador_uno,
                    jugador_dos: json.items.jugador_dos,
                })
            });
    }



    handleClick(param, i, e) {
        this.props.setJugador(param, i);
    }
    render() {
        let a = [this.state.jugador_uno, this.state.jugador_dos];
        let r = [];

        for (let i = 0; i < 2; i++) {
            r.push(< div key={"oct" + this.props.i + i} className="row border" >
                <div className="col-2 jugador">
                    {a[i].pais && <img src={"banderas/" + a[i].pais + ".png"}></img>}
                </div>
                <div className="col-10 jugador">
                    <button type="button" className="btn btn-light jugador"
                        onClick={(e) => this.handleClick(a[i], (Number(this.props.i)), e)}>
                        {a[i].nombre && a[i].nombre}
                    </button>
                </div>
                <button type="button" className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(a[i], (Number(this.props.i)), e)}>
                    {a[i].abrev && a[i].abrev}
                </button>
            </div >
            );
        }
        return <div>
            {r}
        </div>


    }
}
