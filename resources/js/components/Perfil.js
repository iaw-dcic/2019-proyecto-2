
import React, { Component } from 'react';
import './perfil.css';
import Pronostico from './Pronostico.js';
export default class Perfil extends Component {
    state = {
        pOctavos0: [], pOctavos1: [], pOctavos2: [], pOctavos3: [], pOctavos4: [], pOctavos5: [], pOctavos6: [], pOctavos7: [],
        c0: [], c1: [], c2: [], c3: [],
        s1: [], s2: [],
        j1: [], j2: [],
        campeon: [],
        pronostico: 0,
        load: "false"
    }

    setPronostico = (newP) => {
        this.setState({
            pronostico: newP
        });

    }
    //metodos para que pronostico setee
    cuartos0 = (cuart) => {
        this.setState({
            c0: cuart,

        })
    }
    cuartos1 = (cuart) => {
        this.setState({
            c1: cuart
        })
    }
    cuartos2 = (cuart) => {
        this.setState({
            c2: cuart
        })
    }
    cuartos3 = (cuart) => {
        this.setState({
            c3: cuart
        })
    }
    semis1 = (semi) => {
        this.setState({
            s1: semi
        })
    }
    semis2 = (semi) => {
        this.setState({
            s2: semi
        })
    }
    final = (f) => {
        this.setState({
            j1: f.jugador_uno,
            j2: f.jugador_dos,
        })
    }
    champion = (c) => {
        this.setState({
            campeon: c.jugador_uno,
        })
    }
    //cargo los octavos de partidos
    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    pOctavos0: json.items[0],
                    pOctavos1: json.items[1],
                    pOctavos2: json.items[2],
                    pOctavos3: json.items[3],
                    pOctavos4: json.items[4],
                    pOctavos5: json.items[5],
                    pOctavos6: json.items[6],
                    pOctavos7: json.items[7],
                })
            });
    }

    render() {
        var oct01 = ""; var oct02 = ""; var oct11 = ""; var oct12 = ""; var oct21 = ""; var oct22 = "";
        var oct31 = ""; var oct32 = ""; var oct31 = ""; var oct32 = ""; var oct41 = ""; var oct42 = "";
        var oct51 = ""; var oct52 = ""; var oct61 = ""; var oct62 = ""; var oct71 = ""; var oct72 = "";
        //si ya cargaron los partidos de octavos los seteo
        if (this.state.pOctavos0.jugador_uno != null) {
            oct01 = this.state.pOctavos0.jugador_uno; oct11 = this.state.pOctavos1.jugador_uno;
            oct02 = this.state.pOctavos0.jugador_dos; oct12 = this.state.pOctavos1.jugador_dos;
            oct21 = this.state.pOctavos2.jugador_uno; oct31 = this.state.pOctavos3.jugador_uno;
            oct22 = this.state.pOctavos2.jugador_dos; oct32 = this.state.pOctavos3.jugador_dos;
            oct41 = this.state.pOctavos4.jugador_uno; oct51 = this.state.pOctavos5.jugador_uno;
            oct42 = this.state.pOctavos4.jugador_dos; oct52 = this.state.pOctavos5.jugador_dos;
            oct61 = this.state.pOctavos6.jugador_uno; oct71 = this.state.pOctavos7.jugador_uno;
            oct62 = this.state.pOctavos6.jugador_dos; oct72 = this.state.pOctavos7.jugador_dos;
        }

        //si ya cargaron los partidos de cuartos los seteo
        var cuar01 = ""; var cuar02 = ""; var cuar31 = ""; var cuar32 = "";
        var cuar11 = ""; var cuar12 = ""; var cuar21 = ""; var cuar22 = "";
        if (this.state.c0 != null && this.state.c0.jugador_uno != null) {
            cuar01 = this.state.c0.jugador_uno;
            cuar02 = this.state.c0.jugador_dos;
        }

        if (this.state.c1 != null && this.state.c1.jugador_uno != null) {
            cuar11 = this.state.c1.jugador_uno;
            cuar12 = this.state.c1.jugador_dos;
        }
        if (this.state.c2 != null && this.state.c2.jugador_uno != null) {
            cuar21 = this.state.c2.jugador_uno;
            cuar22 = this.state.c2.jugador_dos;
        }
        if (this.state.c3 != null && this.state.c3.jugador_uno != null) {
            cuar31 = this.state.c3.jugador_uno;
            cuar32 = this.state.c3.jugador_dos;
        }

        //si ya cargaron los partidos de semis los seteo
        var sem01 = ""; var sem02 = ""; var sem11 = ""; var sem12 = "";
        if (this.state.s1 != null && this.state.s1.jugador_uno != null) {
            sem01 = this.state.s1.jugador_uno;
            sem02 = this.state.s1.jugador_dos;
        }
        if (this.state.s2 != null && this.state.s2.jugador_uno != null) {
            sem11 = this.state.s2.jugador_uno;
            sem12 = this.state.s2.jugador_dos;
        }
        var f1 = ""; var f2 = "";
        if (this.state.j1 != null) {
            f1 = this.state.j1;
        }
        if (this.state.j2 != null) {
            f2 = this.state.j2;
        }
        var camp = "";
        if (this.state.campeon != null) {
            camp = this.state.campeon;
        }
        return <div id="contenedor">
            <Pronostico setPronostico={this.setPronostico} agregarProno={this.props.agregaProno}

                cuartos0={this.cuartos0} cuartos1={this.cuartos1} cuartos2={this.cuartos2} cuartos3={this.cuartos3}
                semis1={this.semis1} semis2={this.semis2}
                final={this.final} campeon={this.champion}
            />


            <div className="container-fluid">
                <div className="row table-responsive">
                    < table className="table-striped ">
                        <thead >
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
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc0(oct01, e)}>{oct01.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc0(oct02, e)}>{oct02.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc1(oct11, e)}>{oct11.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc1(oct12, e)}>{oct12.nombre}</button>
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleC0(cuar01, e)} >{cuar01.nombre}</button><br></br>
                                    <button className="btn btn-light" onClick={(e) => this.handleC0(cuar02, e)}>  {cuar02.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleC1(cuar11, e)}>{cuar11.nombre}</button><br></br>
                                    <button className="btn btn-light" onClick={(e) => this.handleC1(cuar12, e)}>  {cuar12.nombre}</button>
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc2(oct21, e)}>{oct21.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc2(oct22, e)}>{oct22.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc3(oct31, e)}>{oct31.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc3(oct32, e)}>{oct32.nombre}</button>
                                </td>
                            </tr>
                            <tr>
                                <td > </td>
                                <td></td>
                                <td><button className="btn btn-light">{sem01.nombre}</button><br></br>
                                    <button className="btn btn-light">  {sem02.nombre}</button>
                                </td>
                                <td><button className="btn btn-light">{sem11.nombre}</button><br></br>
                                    <button className="btn btn-light">  {sem12.nombre}</button>
                                </td>
                                <td></td>
                                <td>    </td>
                            </tr>
                            <tr>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc4(oct41, e)}>{oct41.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc4(oct42, e)}>{oct42.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc5(oct51, e)}>{oct51.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc5(oct52, e)}>{oct52.nombre}</button>
                                </td>
                            </tr>



                            <tr>
                                <td ></td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleC2(cuar21, e)}>{cuar21.nombre}</button><br></br>
                                    <button className="btn btn-light" onClick={(e) => this.handleC2(cuar22, e)}>  {cuar22.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleC3(cuar31, e)}>{cuar31.nombre}</button><br></br>
                                    <button className="btn btn-light" onClick={(e) => this.handleC3(cuar32, e)}>  {cuar32.nombre}</button>
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc6(oct61, e)}>{oct61.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc6(oct62, e)}>{oct62.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc7(oct71, e)}>{oct71.nombre}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc7(oct71, e)}>{oct72.nombre}</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <div className="row header texto-final justify-content-center align-items-center minh-100">
                    <h3> FINAL MASTER 1000 </h3>
                </div>
                <div className="row justify-content-center align-items-center minh-100">
                    <div className="col-2"></div>
                    <div className="col-2"></div>
                    <div className="col-2  justify-content-center align-items-center minh-100 ">
                        <button className="btn btn-light"> {f1.nombre}</button>
                    </div>
                    <div className="col-2  justify-content-center align-items-center minh-100">
                        <button className="btn btn-light"> {f2.nombre} </button>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2"></div>
                </div>

                <div className="row header texto-final justify-content-center align-items-center minh-100">
                    <h3> CAMPEON </h3>
                </div>
                <div className="row texto-final justify-content-center align-items-center minh-100">
                    <h4> {camp.nombre} </h4>
                </div>

            </div>
            <div className="row">
                <button className="btn btn-primary">Guardar</button>
                <button className="btn btn-primary">Eliminar</button>
            </div>

        </div >

    }

    //se encarga de cambiar el pronostico de la semi
    handleC0 = (newP, e) => {
        this.setState(({ s1 }) => ({
            s1: {
                ...s1,
                jugador_uno: newP,
            }
        })
            , () => {
                this.setState({ load: true })
            });
    }
    handleC1 = (newP, e) => {
        this.setState(({ s2 }) => ({
            s1: {
                ...s2,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleC2 = (newP, e) => {
        this.setState(({ s1 }) => ({
            s1: {
                ...s1,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleC3 = (newP, e) => {
        this.setState(({ s2 }) => ({
            s2: {
                ...s2,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc0 = (newP, e) => {
        this.setState(({ c0 }) => ({
            c0: {
                ...c0,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc1 = (newP, e) => {
        this.setState(({ c1 }) => ({
            c1: {
                ...c1,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc2 = (newP, e) => {
        this.setState(({ c0 }) => ({
            c0: {
                ...c0,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc3 = (newP, e) => {
        this.setState(({ c1 }) => ({
            c1: {
                ...c1,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc4 = (newP, e) => {
        this.setState(({ c2 }) => ({
            c2: {
                ...c2,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc5 = (newP, e) => {
        this.setState(({ c3 }) => ({
            c3: {
                ...c3,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc6 = (newP, e) => {
        this.setState(({ c2 }) => ({
            c2: {
                ...c2,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }
    handleOc7 = (newP, e) => {
        this.setState(({ c3 }) => ({
            c3: {
                ...c3,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
    }

}
