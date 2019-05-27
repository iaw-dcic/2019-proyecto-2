import React, { Component } from 'react';
import Octavos from './Octavos';
import Cuartos from './Cuartos';
import Semis from './Semis';
import './partidos.css'
export default class Playoffs extends Component {
    state = {
        items: [],
        nombre: "",
        jugador: ""
    };

    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos_dos/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.items
                })
            });
    }


    render() {
        var { items } = this.state;
        return <div>

            <div className="row">
                <div className="col-2">
                    <p>8vos</p>
                </div>
                <div className="col-2">
                    <p>4tos</p>
                </div>
                <div className="col-4 text-center">
                    <p>Semis</p>
                </div>
                <div className="col-2 ">
                    <p>4tos</p>
                </div>
                <div className="col-2">
                    <p>8vos</p>
                </div>
            </div>


            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={0} nombre={this.nombre} jugador={this.jugador} />
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
                    <Octavos i={1} nombre={this.nombre} jugador={this.jugador} />
                </div>

            </div>


            <div className="partido row " >
                <div className="col-2 octavos">
                    <p> </p>

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={0} nombre={this.nombre} jugador={this.jugador} />
                </div>
                <div className="col-4 semis">

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={1} nombre={this.nombre} jugador={this.jugador} />

                </div>

                <div className="col-2 octavos">
                    <p> </p>
                </div>

            </div>


            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={2} nombre={this.nombre} jugador={this.jugador} />
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
                    <Octavos i={3} nombre={this.nombre} jugador={this.jugador} />
                </div>

            </div>

            <div className="partido row " >
                <div className="col-2 octavos">

                </div>
                <div className="col-2 cuartos">

                </div>
                <div className="col-4   text-center">

                    <Semis i={1} />

                </div>
                <div className="col-2 cuartos">

                </div>
                <div className="col-2 octavos">

                </div>

            </div>

            <div className="partido row " >
                <div className="col-2 octavos">

                </div>
                <div className="col-2 cuartos">

                </div>
                <div className="col-4   text-center">

                    <Semis i={2} />

                </div>
                <div className="col-2 cuartos">

                </div>
                <div className="col-2 octavos">

                </div>

            </div>
            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={4} nombre={this.nombre} jugador={this.jugador} />
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
                    <Octavos i={5} nombre={this.nombre} jugador={this.jugador} />
                </div>

            </div>

            <div className="partido row " >
                <div className="col-2 octavos">
                    <p> </p>

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={2} nombre={this.nombre} jugador={this.jugador} />
                </div>
                <div className="col-4 semis">

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={3} nombre={this.nombre} jugador={this.jugador} />

                </div>

                <div className="col-2 octavos">
                    <p> </p>
                </div>

            </div>

            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={6} nombre={this.nombre} jugador={this.jugador} />
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
                    <Octavos i={7} nombre={this.nombre} jugador={this.jugador} />
                </div>

            </div>
        </div >


    }
    nombre = (newnombre) => {
        this.setState({
            nombre: newnombre
        });
    }
    jugador = (newjugador) => {
        this.setState({
            jugador: newjugador
        });
    }

}
