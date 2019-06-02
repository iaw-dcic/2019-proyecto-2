
import React, { Component } from 'react';
import './perfil.css';
import Pronostico from './Pronostico.js';
export default class Perfil extends Component {
    state = {
        pOctavos0: [], pOctavos1: [], pOctavos2: [], pOctavos3: [], pOctavos4: [], pOctavos5: [], pOctavos6: [], pOctavos7: [],
        c0: [], c1: [], c2: [], c3: [],
        s1: [], s2: [],
        f: [],
        champion: [],
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
        if (localStorage.hasOwnProperty("c0")) {
            let value = localStorage.getItem("c0");
            value = JSON.parse(value);
            this.setState({ c0: value });
        } else
                this.setState({
                    c0: cuart,

                })
    }
    cuartos1 = (cuart) => {
        if (localStorage.hasOwnProperty("c1")) {
            let value = localStorage.getItem("c1");
            value = JSON.parse(value);
            this.setState({ c1: value });
        } else
                this.setState({
                    c1: cuart
                })
    }
    cuartos2 = (cuart) => {
        if (localStorage.hasOwnProperty("c2")) {
            let value = localStorage.getItem("c2");
            value = JSON.parse(value);
            this.setState({ c2: value });
        } else
                this.setState({
                    c2: cuart
                })
    }
    cuartos3 = (cuart) => {
        if (localStorage.hasOwnProperty("c3")) {
            let value = localStorage.getItem("c3");
            value = JSON.parse(value);
            this.setState({ c3: value });
        } else
                this.setState({
                    c3: cuart
                })
    }
    semis1 = (semi) => {
        if (localStorage.hasOwnProperty("s1")) {
            let value = localStorage.getItem("s1");
            value = JSON.parse(value);
            this.setState({ s1: value });
        } else
            this.setState({
                s1: semi
            })
    }
    semis2 = (semi) => {
        if (localStorage.hasOwnProperty("s2")) {
            let value = localStorage.getItem("s2");
            value = JSON.parse(value);
            this.setState({ s2: value });
        } else
            this.setState({
                s2: semi
            })
    }
    final = (fi) => {
        if (localStorage.hasOwnProperty("f")) {
            let value = localStorage.getItem("f");
            value = JSON.parse(value);
            this.setState({ f: value });
        } else
            this.setState({
                f: fi
            })

    }
    champion = (c) => {
        if (localStorage.hasOwnProperty("champion")) {
            let value = localStorage.getItem("champion");
            value = JSON.parse(value);
            this.setState({ champion: value });
        } else
            this.setState({
                champion: c,
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
        if (this.state.f != null && this.state.f.jugador_dos != null) {
            f1 = this.state.f.jugador_uno;
            f2 = this.state.f.jugador_dos;
        }
        var camp = "";
        if (this.state.champion != null && this.state.champion.jugador_uno != null) {
            camp = this.state.champion.jugador_uno;
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
                                <td ><img src={oct01.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc0(oct01, e)}>{oct01.nombre}</button>
                                    <br></br>
                                    <img src={oct02.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc0(oct02, e)}>{oct02.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td ><img src={oct11.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc1(oct11, e)}>{oct11.nombre}</button>
                                    <br></br>
                                    <img src={oct12.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc1(oct12, e)}>{oct12.nombre}</button>
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td>
                                    <button className="btn btn-light" onClick={(e) => this.handleC0(cuar01, e)} >{cuar01.nombre}</button><br></br>
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
                                <td ><img src={oct21.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc2(oct21, e)}>{oct21.nombre}</button>
                                    <br></br>
                                    <img src={oct22.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc2(oct22, e)}>{oct22.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td ><img src={oct31.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc3(oct31, e)}>{oct31.nombre}</button>
                                    <br></br>
                                    <img src={oct32.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc3(oct32, e)}>{oct32.nombre}</button>
                                </td>
                            </tr>
                            <tr>
                                <td > </td>
                                <td></td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleS1(sem01, e)}>{sem01.nombre}</button><br></br>
                                    <button className="btn btn-light" onClick={(e) => this.handleS1(sem02, e)}>  {sem02.nombre}</button>
                                </td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleS2(sem11, e)}>{sem11.nombre}</button><br></br>
                                    <button className="btn btn-light" onClick={(e) => this.handleS2(sem12, e)}>  {sem12.nombre}</button>
                                </td>
                                <td></td>
                                <td>    </td>
                            </tr>
                            <tr>
                                <td ><img src={oct41.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc4(oct41, e)}>{oct41.nombre}</button>
                                    <br></br>
                                    <img src={oct42.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc4(oct42, e)}>{oct42.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <img src={oct51.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc5(oct51, e)}>{oct51.nombre}</button>
                                    <br></br>
                                    <img src={oct52.pais + ".png"}></img>
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
                                <td ><img src={oct61.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc6(oct61, e)}>{oct61.nombre}</button>
                                    <br></br>
                                    <img src={oct62.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc6(oct62, e)}>{oct62.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td ><img src={oct71.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc7(oct71, e)}>{oct71.nombre}</button>
                                    <br></br>
                                    <img src={oct72.pais + ".png"}></img>
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc7(oct72, e)}>{oct72.nombre}</button>
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
                        <button className="btn btn-light" onClick={(e) => this.handleCampeon(f1, e)}> {f1.nombre}</button>
                    </div>
                    <div className="col-2  justify-content-center align-items-center minh-100">
                        <button className="btn btn-light" onClick={(e) => this.handleCampeon(f2, e)}> {f2.nombre} </button>
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
                <button className="btn btn-primary" onClick={(e) => this.actualizar(e)}>Guardar</button>
                <button className="btn btn-primary" onClick={(e) => this.eliminar(e)}>Eliminar</button>
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
        localStorage.setItem("champion", JSON.stringify(final));
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
        const final = this.state.s1;
        final["jugador_uno"] = newP;
        localStorage.setItem("s1", JSON.stringify(final));
    }
    handleC1 = (newP, e) => {
        this.setState(({ s2 }) => ({
            s2: {
                ...s2,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true })
        });
        const final = this.state.s2;
        final["jugador_uno"] = newP;
        localStorage.setItem("s2", JSON.stringify(final));
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
        const final = this.state.s1;
        final["jugador_dos"] = newP;
        localStorage.setItem("s1", JSON.stringify(final));
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
        const final = this.state.s2;
        final["jugador_dos"] = newP;
        localStorage.setItem("s2", JSON.stringify(final));
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
        const final = this.state.c0;
        final["jugador_uno"] = newP;
        localStorage.setItem("c0", JSON.stringify(final));
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
        const final = this.state.c1;
        final["jugador_uno"] = newP;
        localStorage.setItem("c1", JSON.stringify(final));
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
        const final = this.state.c0;
        final["jugador_dos"] = newP;
        localStorage.setItem("c0", JSON.stringify(final));
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
        const final = this.state.c1;
        final["jugador_dos"] = newP;
        localStorage.setItem("c1", JSON.stringify(final));
    }
    handleOc4 = (newP, e) => {
        this.setState(({ c2 }) => ({
            c2: {
                ...c2,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true });

        });
        const final = this.state.c2;
        final["jugador_uno"] = newP;
        localStorage.setItem("c2", JSON.stringify(final));
    }
    handleOc5 = (newP, e) => {
        this.setState(({ c3 }) => ({
            c3: {
                ...c3,
                jugador_uno: newP,
            }
        }), () => {
            this.setState({ load: true });

        });
        const final = this.state.c3;
        final["jugador_uno"] = newP;
        localStorage.setItem("c3", JSON.stringify(final));
    }
    handleOc6 = (newP, e) => {
        this.setState(({ c2 }) => ({
            c2: {
                ...c2,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true });
        });
        const final = this.state.c2;
        final["jugador_dos"] = newP;
        localStorage.setItem("c2", JSON.stringify(final));

    }
    handleOc7 = (newP, e) => {
        this.setState(({ c3 }) => ({
            c3: {
                ...c3,
                jugador_dos: newP,
            }
        }), () => {
            this.setState({ load: true });
            const final = this.state.c3;
            final["jugador_dos"] = newP;
            localStorage.setItem("c3", JSON.stringify(final));
        });


    }
    async actualizar(e) {

        console.log("actualizar : ");
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');


        if (token && api_token) {
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
        try {
            const response = await axios.post('http://localhost/pr2/api/actualizar', {
                c0: this.state.c0,
                c1: this.state.c1,
                c2: this.state.c2,
                c3: this.state.c3,
                s1: this.state.s1,
                s2: this.state.s2,
                f: this.state.f,
                campeon: this.state.campeon,
            });
            console.log('Returned data:', response);
            localStorage.clear();
        } catch (e) {
            console.log('axios request failed:', e);
        }


    }

    async eliminar(e) {

        console.log("actualizar : ");
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');


        if (token && api_token) {
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }


        try {
            const response = await axios.post('http://localhost/pr2/api/eliminarpronostico', {
                pronostico: this.state.pronostico,
                c0: this.state.c0.id,
                c1: this.state.c1.id,
                c2: this.state.c2.id,
                c3: this.state.c3.id,
                s1: this.state.s1.id,
                s2: this.state.s2.id,
                f: this.state.f.id,
                campeon: this.state.campeon.id,
            });
            console.log('Returned data:', response);
        } catch (e) {
            console.log('axios request failed:', e);
        }


    }
}
