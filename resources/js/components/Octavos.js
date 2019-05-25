import React, { Component } from 'react';

import './partidos.css'
export default class Octavos extends Component {
    state = {
        item: []
    };

    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos_dos/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json.items[this.props.i]
                })
            });
    }

    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        document.getElementById("hola").innerHTML += "<p>" + param + "</p>";

    }
    render() {
        var { item } = this.state;

        return <div>

            <div className="partido row " >
                <div className="col-2 octavos">
                    <div className="row">
                        <button type="button" className="btn btn-light jugador">{item.jugador_uno_primer}</button>
                        <button type="button" className="btn btn-light jugadorabre">{item.juno_primer_abre}</button>
                    </div>

                    <div className="row">
                        <button type="button" className="btn btn-light jugador ">{item.jugador_dos_primer}</button>
                        <button type="button" className="btn btn-light jugadorabre">{item.jdos_primer_abre}</button>
                    </div>
                </div>
                <div className="col-2 cuartos">
                    <p> </p>
                </div>
                <div className="col-4 semis">
                    <p> </p>
                </div>
                <div className="col-2 cuartos">
                    <p> </p>
                </div>
                <div className="col-2 octavos">
                    <div className="row ">
                        <button type="button" className="btn btn-light jugador">{item.jugador_uno_segundo}</button>
                        <button type="button" className="btn btn-light jugadorabre">{item.juno_segundo_abre}</button>
                    </div>

                    <div className="row" >
                        <button type="button" className="btn btn-light jugador " onClick={(e) => this.handleClick(item.jugador_dos_segundo, e)}>{item.jugador_dos_segundo}</button>
                        <button type="button" className="btn btn-light jugadorabre">{item.jdos_segundo_abre}</button>
                    </div>
                </div>

            </div>

        </div>




    }
}
