import React, { Component } from 'react';
import axios from 'axios';

export default class Octavos extends Component {
    state = {
        jugador_uno: [],
        jugador_dos: [],

    };

    componentWillMount() {
        fetch('/pr2/api/octavos/' + this.props.i)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    jugador_uno: json.items.jugador_uno,
                    jugador_dos: json.items.jugador_dos,
                })
            });
    }

    handleClick(param, i, e) {
        var arreglo = ["c0j1", "c1j1", "c0j2", "c1j2", "c2j1", "c3j1", "c2j2", "c3j2"];
        this.props.setJugador(param, i, arreglo);
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
                    <button type="button" className="btn   btn-primary-outline jugador"
                        onClick={(e) => this.handleClick(a[i], (Number(this.props.i)), e)}>
                        {a[i].nombre && a[i].nombre}
                    </button>
                </div>
                <button type="button" className="btn  btn-primary-outline jugadorabre"
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
