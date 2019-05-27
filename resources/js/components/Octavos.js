import React, { Component } from 'react';

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
        console.log('Parameter', param);
        console.log('Event', e);

        this.props.jugador(param);
        switch (i) {
            case 0:
                this.props.nombre("cuartos_1_juno");
                break;
            case 1:
                this.props.nombre("cuartos_1_jdos");

                break;
            case 2:
                this.props.nombre("cuartos_2_juno");
                break;
            case 3:
                this.props.nombre("cuartos_2_jdos");
                break;
            case 4:
                this.props.nombre("cuartos_3_juno");
                break;
            case 5:
                this.props.nombre("cuartos_3_jdos");
                break;
            case 6:
                this.props.id("cuartos_4_juno");
                break;
            case 7:
                this.props.nombre("cuartos_4_jdos");
                break;
        }
        // let ronda = 8;
        // let idPlayer = 1;
        // var data = JSON.stringify({ 'jugador_uno_id': idPlayer, 'ronda': ronda });
        // console.log(data);
        // fetch('http://localhost/pr2/api/insert/',
        //     {
        //         method: 'POST',
        //         body: data,
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     .then(res => res.json())
        //     .then((data) => console.log(data))
        //     .catch((err) => console.log(err));


    }
    render() {
        var { item } = this.state;



        return <div>


            <div className="row">
                <button type="button" id={"juno" + this.props.i} className="btn btn-light jugador"
                    onClick={(e) => this.handleClick(this.state.jugador_uno, (Number(this.props.i)), e)}>
                    {this.state.jugador_uno.nombre}</button>
                <button type="button" id={"junoabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.state.jugador_uno, (Number(this.props.i)), e)}>
                    {this.state.jugador_uno.abrev}</button>
            </div>

            <div className="row">
                <button type="button" id={"jdos" + this.props.i} className="btn btn-light jugador "
                    onClick={(e) => this.handleClick(this.state.jugador_dos, (Number(this.props.i)), e)}>
                    {this.state.jugador_dos.nombre}</button>
                <button type="button" id={"jdosabre" + this.props.i} className="btn btn-light jugadorabre"
                    onClick={(e) => this.handleClick(this.state.jugador_dos, (Number(this.props.i)), e)}>
                    {this.state.jugador_dos.abrev}</button>
            </div>

        </div>

    }
}
