import React, { Component } from 'react';
import Octavos from './Octavos';
import Cuartos from './Cuartos';
import Semis from './Semis';
import Final from './Final';
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

        j1: [], j2: [],
        campeon: [],
        user: [],
        pronost: null
    };




    render() {
        var { items } = this.state;
        return <div>

            <div className="row " >
                <div className="col-2 header">
                    <p>8vos</p>
                </div>
                <div className="col-2 header">
                    <p>4tos</p>
                </div>
                <div className="col-4 header text-center">
                    <p>Semis</p>
                </div>
                <div className="col-2  header">
                    <p>4tos</p>
                </div>
                <div className="col-2 header">
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

                <div className="col-2">

                    <Semis i={1} jugador1={this.state.s1j1} jugador2={this.state.s1j2} setJugador={this.setJugadorFinal} />
                </div>

                <div className="col-2">
                    <Semis i={2} jugador1={this.state.s2j1} jugador2={this.state.s2j2} setJugador={this.setJugadorFinal} />
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
            <div className="row header texto-final justify-content-center align-items-center minh-100">
                <h3> FINAL MASTER 1000 </h3>
            </div>
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2  justify-content-center align-items-center minh-100 ">
                    <Final jugadorFinal={this.state.j1} setJugador={this.setCampeon} />
                </div>
                <div className="col-2  justify-content-center align-items-center minh-100">
                    <Final jugadorFinal={this.state.j2} setJugador={this.setCampeon} />
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
            </div>

            <div className="row header texto-final justify-content-center align-items-center minh-100">
                <h3> CAMPEON </h3>
            </div>
            <div className="row texto-final justify-content-center align-items-center minh-100">
                <h4> {this.state.campeon.nombre}  </h4>
            </div>


            <div className="row">
                <button type="button" className="btn btn-light"
                    onClick={(e) => this.handleCuartos()}>
                    Guardar
            </button>
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
    setJugadorFinal = (newjugador, i) => {

        if (i == 1)
            this.setState({
                j1: newjugador
            });
        if (i == 2)
            this.setState({
                j2: newjugador
            });


    }
    setCampeon = (newjugador) => {

        this.setState({
            campeon: newjugador
        });

    }

    async handleCuartos() {
        await this.addPronostico();



        console.log("hanle cuartos : " + this.state.pronost.id);
        var pro = this.state.pronost.id;
        if (!(this.state.c0j1.id == null || this.state.c0j2.id == null ||
            this.state.c1j1.id == null || this.state.c1j2.id == null ||
            this.state.c2j1.id == null || this.state.c2j2.id == null ||
            this.state.c3j1.id == null || this.state.c3j2.id == null ||
            this.state.s1j1.id == null || this.state.s1j2.id == null ||
            this.state.s2j1.id == null || this.state.s2j2.id == null ||
            this.state.j1.id == null || this.state.j2.id == null ||
            this.state.campeon.id == null)) {
            let token = document.head.querySelector('meta[name="csrf-token"]');

            if (token) {
                window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            } else {
                console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
            }

            try {
                const response = await axios.post('http://localhost/pr2/api/insert', {
                    jugador_uno_id: this.state.c0j1.id,
                    jugador_dos_id: this.state.c0j2.id,
                    ronda: '4',
                    pronostico: pro
                });

                console.log('Returned data:', response);
            } catch (e) {
                console.log('axios request failed:', e);
            }
            try {
                const response = await axios.post('http://localhost/pr2/api/insert', {
                    jugador_uno_id: this.state.c1j1.id,
                    jugador_dos_id: this.state.c1j2.id,
                    ronda: '4',
                    pronostico: pro
                });

                console.log('Returned data:', response);
            } catch (e) {
                console.log('axios request failed:', e);
            }
            try {
                const response = await axios.post('http://localhost/pr2/api/insert', {
                    jugador_uno_id: this.state.c2j1.id,
                    jugador_dos_id: this.state.c2j2.id,
                    ronda: '4',
                    pronostico: pro
                });

                console.log('Returned data:', response);
            } catch (e) {
                console.log('axios request failed:', e);
            }
            try {
                const response = await axios.post('http://localhost/pr2/api/insert', {
                    jugador_uno_id: this.state.c3j1.id,
                    jugador_dos_id: this.state.c3j2.id,
                    ronda: '4',
                    pronostico: pro
                });

                console.log('Returned data:', response);
            } catch (e) {
                console.log('axios request failed:', e);
            }

        }

    }


    async addPronostico() {
        if (this.state.c0j1.id == null || this.state.c0j2.id == null ||
            this.state.c1j1.id == null || this.state.c1j2.id == null ||
            this.state.c2j1.id == null || this.state.c2j2.id == null ||
            this.state.c3j1.id == null || this.state.c3j2.id == null ||
            this.state.s1j1.id == null || this.state.s1j2.id == null ||
            this.state.s2j1.id == null || this.state.s2j2.id == null ||
            this.state.j1.id == null || this.state.j2.id == null ||
            this.state.campeon.id == null) {
            alert("no se puede guardar el cuadro sin completar");

        }
        else {
            let token = document.head.querySelector('meta[name="csrf-token"]');

            if (token) {
                window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            } else {
                console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
            }

            try {
                const response = await axios.post('http://localhost/pr2/api/insertpronostico');
                console.log('Returned data:', response);
            } catch (e) {
                console.log('axios request failed:', e);
            }

        }
        await this.getUltimo();
        this.props.agregarPronostico(this.state.pronost);
    }
    async  getUltimo() {

        if (!(this.state.c0j1.id == null || this.state.c0j2.id == null ||
            this.state.c1j1.id == null || this.state.c1j2.id == null ||
            this.state.c2j1.id == null || this.state.c2j2.id == null ||
            this.state.c3j1.id == null || this.state.c3j2.id == null ||
            this.state.s1j1.id == null || this.state.s1j2.id == null ||
            this.state.s2j1.id == null || this.state.s2j2.id == null ||
            this.state.j1.id == null || this.state.j2.id == null ||
            this.state.campeon.id == null)) {

            const res = await fetch('http://localhost/pr2/api/ultimopronostico')
            const something = await res.json();
            this.setState({ pronost: something })

        }
    }

}



