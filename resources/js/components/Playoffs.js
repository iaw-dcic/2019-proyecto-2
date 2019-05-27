import React, { Component } from 'react';
import Octavos from './Octavos';
import Cuartos from './Cuartos';
import Semis from './Semis';
import './partidos.css'
export default class Playoffs extends Component {
    state = {

        c0j1: [],
        c0j2: [],
        c1j1: [],
        c1j2: [],

        c2j1: [],
        c2j2: [],
        c3j1: [],
        c3j2: [],

        s1j1: [],
        s1j2: [],
        s2j1: [],
        s2j2: [],
    };




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

                    <Octavos i={0} setJugador={this.setJugador} />
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
                    <Octavos i={1} setJugador={this.setJugador} />
                </div>

            </div>


            <div className="partido row " >
                <div className="col-2 octavos">
                    <p> </p>

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={0} jugador1={this.state.c0j1} jugador2={this.state.c0j2} setJugador={this.setJugadorSemi} />
                </div>
                <div className="col-4 semis">

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={1} jugador1={this.state.c1j1} jugador2={this.state.c1j2} setJugador={this.setJugadorSemi} />

                </div>

                <div className="col-2 octavos">
                    <p> </p>
                </div>

            </div>


            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={2} setJugador={this.setJugador} />
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
                    <Octavos i={3} setJugador={this.setJugador} />
                </div>

            </div>



            <div className="partido row " >
                <div className="col-2 octavos">

                </div>
                <div className="col-2 cuartos">

                </div>

                <div className="col-4">

                    <Semis i={1} jugador1={this.state.s1j1} jugador2={this.state.s1j2} />


                    <Semis i={2} jugador1={this.state.s2j1} jugador2={this.state.s2j2} />
                </div>

                <div className="col-2 cuartos">

                </div>
                <div className="col-2 octavos">

                </div>

            </div>
            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={4} setJugador={this.setJugador} />
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
                    <Octavos i={5} setJugador={this.setJugador} />
                </div>

            </div>

            <div className="partido row " >
                <div className="col-2 octavos">
                    <p> </p>

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={2} jugador1={this.state.c2j1} jugador2={this.state.c2j2} setJugador={this.setJugadorSemi} />
                </div>
                <div className="col-4 semis">

                </div>
                <div className="col-2 cuartos">
                    <Cuartos i={3} jugador1={this.state.c3j1} jugador2={this.state.c3j2} setJugador={this.setJugadorSemi} />


                </div>

                <div className="col-2 octavos">
                    <p> </p>
                </div>

            </div>

            <div className="partido row " >
                <div className="col-2 octavos">

                    <Octavos i={6} setJugador={this.setJugador} />
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
                    <Octavos i={7} setJugador={this.setJugador} />
                </div>

            </div>
        </div >


    }
    nombre = (newnombre) => {
        this.setState({
            nombre: newnombre
        });
    }
    setJugador = (newjugador, i) => {

        if (i == 0)
            this.setState({
                c0j1: newjugador
            });
        if (i == 2)
            this.setState({
                c0j2: newjugador
            });
        if (i == 3)
            this.setState({
                c1j2: newjugador
            });
        if (i == 1)
            this.setState({
                c1j1: newjugador
            });
        if (i == 4)
            this.setState({
                c2j1: newjugador
            });
        if (i == 5)
            this.setState({
                c3j1: newjugador
            });
        if (i == 6)
            this.setState({
                c2j2: newjugador
            });
        if (i == 7)
            this.setState({
                c3j2: newjugador
            });
    }
    setJugadorSemi = (newjugador, i) => {

        if (i == 0)
            this.setState({
                s1j1: newjugador
            });
        if (i == 2)
            this.setState({
                s1j2: newjugador
            });
        if (i == 3)
            this.setState({
                s2j2: newjugador
            });
        if (i == 1)
            this.setState({
                s2j1: newjugador
            });

    }

}
