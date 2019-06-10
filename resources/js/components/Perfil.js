
import React, { Component } from 'react';
import './perfil.css';
import Pronostico from './Pronostico.js';
import Octavos from './Octavos.js';
import Cuartos from './Cuartos.js';
import Semis from './Semis.js';
import FinalyCampeon from './FinalyCampeon.js';

export default class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {

            cuartos: [],
            semis: [],
            f: [],
            champion: [],
            pronostico: null,
            load: "false"
        }
        this.baseState = this.state;
    }
    setPronostico = (newP) => {
        this.setState({
            pronostico: newP
        });

    }
    verLocalStorageC = () => {
        for (var i = 0; i <= 3; i++) {
            if (localStorage.hasOwnProperty("cuartos" + i)) {
                let value = JSON.parse(localStorage.getItem("cuartos" + i));
                if (value.pronostico == localStorage.getItem("pronostico")) {
                    var final = this.state.cuartos[i];
                    console.log(final);
                    this.setState(({ cuartos }) => ({
                        cuartos: {
                            ...cuartos,
                            [i]: value

                        }
                    }), () => {
                        console.log(this.state.cuartos)
                    });
                }
            }
        }
    }
    verLocalStorageS = () => {
        for (var i = 0; i <= 1; i++) {
            if (localStorage.hasOwnProperty("semis" + i)) {
                let value = JSON.parse(localStorage.getItem("semis" + i));
                if (value.pronostico == localStorage.getItem("pronostico")) {
                    this.setState(({ semis }) => ({
                        semis: {
                            ...semis,
                            [i]: value

                        }
                    }), () => {
                        console.log(this.state.semis)
                    });
                }
            }
        }
    }
    cuartos = (c) => {

        for (var i = 0; i <= 3; i++) {
            this.setState({
                cuartos: c
            })

        }
        this.verLocalStorageC();
    }
    semis = (semi) => {
        for (var i = 0; i <= 1; i++) {
            this.setState({
                semis: semi
            })
        }
        this.verLocalStorageS();
    }

    final = (fi) => {
        if (localStorage.hasOwnProperty("f")) {
            let value = JSON.parse(localStorage.getItem("f"));
            if (value.pronostico == localStorage.getItem("pronostico")) {
                this.setState({ f: value });
            }
            else
                this.setState({
                    f: fi
                })
        }
        else
            this.setState({
                f: fi
            })

    }
    champion = (c) => {
        if (localStorage.hasOwnProperty("champion")) {
            let value = JSON.parse(localStorage.getItem("champion"));
            if (value.pronostico == localStorage.getItem("pronostico")) {
                this.setState({ champion: value });
            }
            else
                this.setState({
                    champion: c,
                })
        }
        else
            this.setState({
                champion: c,
            })
    }


    render() {
        return <div id="contenedor">
            <Pronostico setPronostico={this.setPronostico} agregarProno={this.props.agregaProno}
                octavos={this.octavos}
                cuartos={this.cuartos}
                semis={this.semis}
                final={this.final} campeon={this.champion}
            />


            <div className="container-fluid">
                <div className="row table-responsive">
                    <table className="table-striped ">
                        <thead className="thead-dark" >
                            <tr>
                                <th scope="col">Octavos</th>
                                <th scope="col" >Cuartos</th>
                                <th scope="col">Semi1</th>
                                <th scope="col">Semi2</th>
                                <th scope="col" >Cuartos</th>
                                <th scope="col">Octavos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    {this.state.pronostico && < Octavos i={0} setJugador={this.handleOc} />}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >  {this.state.pronostico && < Octavos i={1} setJugador={this.handleOc} />}
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td>  {this.state.cuartos[0] && <Cuartos i={0} jugador1={this.state.cuartos[0].jugador_uno} jugador2={this.state.cuartos[0].jugador_dos} setJugador={this.handleC} />}
                                </td>
                                <td> </td>
                                <td></td>
                                <td>  {this.state.cuartos[1] && <Cuartos i={1} jugador1={this.state.cuartos[1].jugador_uno} jugador2={this.state.cuartos[1].jugador_dos} setJugador={this.handleC} />}
                                </td>
                                <td> </td>
                            </tr >

                            <tr>

                                <td>  {this.state.pronostico && < Octavos i={2} setJugador={this.handleOc} />}

                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >    {this.state.pronostico && < Octavos i={3} setJugador={this.handleOc} />}
                                </td>
                            </tr >
                            <tr>
                                <td > </td>
                                <td></td>
                                <td> {this.state.semis[0] && <Semis i={0} jugador1={this.state.semis[0].jugador_uno} jugador2={this.state.semis[0].jugador_dos} setJugador={this.handleS1} />}
                                </td>
                                <td>  {this.state.semis[1] && <Semis i={1} jugador1={this.state.semis[1].jugador_uno} jugador2={this.state.semis[1].jugador_dos} setJugador={this.handleS2} />}
                                </td>
                                <td> </td>
                                <td></td>
                            </tr >
                            <tr>
                                <td >   {this.state.pronostico && < Octavos i={4} setJugador={this.handleOc} />}
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >   {this.state.pronostico && < Octavos i={5} setJugador={this.handleOc} />}
                                </td>
                            </tr >



                            <tr>
                                <td ></td>
                                <td> {this.state.cuartos[2] && <Cuartos i={2} jugador1={this.state.cuartos[2].jugador_uno} jugador2={this.state.cuartos[2].jugador_dos} setJugador={this.handleC} />}
                                </td>
                                <td> </td>
                                <td></td>
                                <td> {this.state.cuartos[3] && <Cuartos i={3} jugador1={this.state.cuartos[3].jugador_uno} jugador2={this.state.cuartos[3].jugador_dos} setJugador={this.handleC} />}
                                </td>
                                <td> </td>
                            </tr >

                            <tr>
                                <td >   {this.state.pronostico && < Octavos i={6} setJugador={this.handleOc} />}
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >   {this.state.pronostico && < Octavos i={7} setJugador={this.handleOc} />}
                                </td>
                            </tr >
                        </tbody>
                    </table>
                </div>
                <FinalyCampeon campeon={this.state.champion.jugador_uno}
                    j1={this.state.f.jugador_uno} j2={this.state.f.jugador_dos} setJugador={this.handleCampeon} />


            </div>
            <div className="row">
                {this.state.cuartos[0] && <button className="btn btn-primary" onClick={(e) => this.actualizar(e)}>Guardar</button>}
                {this.state.cuartos[0] && <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Eliminar</button>}
            </div >
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Eliminar</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </div>
                        <div className="modal-body"> ¿Estas seguro que quieres eliminar el pronostico? </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">NO</button>
                            <a href="#delete" id="delete" className="btn btn-primary" onClick={(e) => this.eliminar(e)} data-dismiss="modal">Si</a> </div>
                    </div>
                </div>
            </div>


        </div >

    }
    handleS1 = (newP, e) => {
        this.setState(({ f }) => ({
            f: {
                ...f,
                jugador_uno: newP,
            }
        })
            , () => {
                this.setState({ load: true })
            });
        const final = this.state.f;
        final["jugador_uno"] = newP;
        final["pronostico"] = this.state.pronostico;
        localStorage.setItem("f", JSON.stringify(final));
    }
    handleS2 = (newP, e) => {
        this.setState(({ f }) => ({
            f: {
                ...f,
                jugador_dos: newP,
            }
        })
            , () => {
                this.setState({ load: true })
            });
        const final = this.state.f;
        final["jugador_dos"] = newP;
        final["pronostico"] = this.state.pronostico;
        localStorage.setItem("f", JSON.stringify(final));
    }
    handleCampeon = (newP, e) => {
        this.setState(({ champion }) => ({
            champion: {
                ...champion,
                jugador_uno: newP,
            }
        })
            , () => {
                this.setState({ load: true })
            });
        const final = this.state.champion;
        final["jugador_uno"] = newP;
        final["pronostico"] = this.state.pronostico;
        localStorage.setItem("champion", JSON.stringify(final));
    }
    //se encarga de cambiar el pronostico de la semi

    handleC = (newP, i) => {
        var j;
        if (i == 0 || i == 2) j = 0;
        if (i == 3 || i == 1) j = 1;

        var cc1 = this.state.semis[j];
        const final = this.state.semis[j];
        if (i == 0 || i == 1) {
            this.setState(({ cc1 }) => ({

                cc1: {
                    ...cc1,
                    jugador_uno: newP,
                }
            }), () => {
                this.setState({ load: true })
            });

            final["jugador_uno"] = newP;
        }
        else {
            this.setState(({ cc1 }) => ({

                cc1: {
                    ...cc1,
                    jugador_dos: newP,
                }
            }), () => {
                this.setState({ load: true })
            });

            final["jugador_dos"] = newP;
        }
        final["pronostico"] = this.state.pronostico;
        localStorage.setItem("semis" + j, JSON.stringify(final));
    }

    handleOc = (newP, i) => {
        var j;
        if (i == 0 || i == 2) j = 0;
        if (i == 1 || i == 3) j = 1;
        if (i == 4 || i == 6) j = 2;
        if (i == 5 || i == 7) j = 3;
        var cc1 = this.state.cuartos[j];
        const final = this.state.cuartos[j];
        if (i == 0 || i == 1 || i == 4 || i == 5) {
            this.setState(({ cc1 }) => ({

                cc1: {
                    ...cc1,
                    jugador_uno: newP,
                }
            }), () => {
                this.setState({ load: true })
            });

            final["jugador_uno"] = newP;
        }
        else {
            this.setState(({ cc1 }) => ({

                cc1: {
                    ...cc1,
                    jugador_dos: newP,
                }
            }), () => {
                this.setState({ load: true })
            });

            final["jugador_dos"] = newP;
        }
        final["pronostico"] = this.state.pronostico;
        localStorage.setItem("cuartos" + j, JSON.stringify(final));
    }

    tokens() {

        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');


        if (token && api_token) {
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
        }
    }
    resetear() {
        for (let key in this.state) {
            for (var i = 0; i <= 3; i++)
                if (localStorage.hasOwnProperty(key + i))
                    localStorage.removeItem(key + i);

        }

        this.setState(this.baseState);
    }
    async actualizar(e) {
        this.tokens();
        try {
            const response = await axios.post('/pr2/api/actualizar', {
                c0: this.state.cuartos[0],
                c1: this.state.cuartos[1],
                c2: this.state.cuartos[2],
                c3: this.state.cuartos[3],
                s1: this.state.semis[0],
                s2: this.state.semis[1],
                f: this.state.f,
                campeon: this.state.champion,
            });
            this.resetear();
            alert("Su pronostico se guardo correctamente");
        } catch (e) {
            console.log('axios request failed:', e);
        }
    }

    async eliminar(e) {
        this.tokens();

        try {
            const response = await axios.post('/pr2/api/eliminarpronostico', {
                pronostico: this.state.pronostico,
                c0: this.state.cuartos[0].id,
                c1: this.state.cuartos[1].id,
                c2: this.state.cuartos[2].id,
                c3: this.state.cuartos[3].id,
                s1: this.state.semis[0].id,
                s2: this.state.semis[1].id,
                f: this.state.f.id,
                campeon: this.state.champion.id,
            });
            this.resetear();
            localStorage.setItem("use", "false");
            alert("Se elimino correctamente");
        } catch (e) {
            alert("Hubo problema no se pudo eliminar,intente nuevamente");
            console.log('axios request failed:', e);
        }


    }

}
