
import React, { Component } from 'react';
import './perfil.css';
import Pronostico from './Pronostico.js';
export default class Perfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pOctavos0: [], pOctavos1: [], pOctavos2: [], pOctavos3: [], pOctavos4: [], pOctavos5: [], pOctavos6: [], pOctavos7: [],
            c0: [], c1: [], c2: [], c3: [],
            s1: [], s2: [],
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
    //metodos para que pronostico setee
    octavos = (oct, i) => {
        if (i == 0) {

            this.setState({ pOctavos0: oct })
        }
        if (i == 1) {

            this.setState({ pOctavos1: oct })
        }
        if (i == 2) {

            this.setState({ pOctavos2: oct })
        }
        if (i == 3) {
            if (localStorage.hasOwnProperty("pOctavos3")) {
                let value = localStorage.getItem("pOctavos3");
                value = JSON.parse(value);
                this.setState({ pOctavos3: value });
            } else
                this.setState({ pOctavos3: oct })
        }
        if (i == 4) {

            this.setState({ pOctavos4: oct })
        }
        if (i == 5) {

            this.setState({ pOctavos5: oct })
        }
        if (i == 6) {

            this.setState({ pOctavos6: oct })
        }
        if (i == 7) {

            this.setState({ pOctavos7: oct })
        }

    }


    cuartos = (cuart, i) => {
        if (i == 0) {
            if (localStorage.hasOwnProperty("c0")) {
                let value = JSON.parse(localStorage.getItem("c0"));
                if (value.pronostico == localStorage.getItem("pronostico")) {

                    this.setState({ c0: value });
                } else
                    this.setState({ c0: cuart, })
            }
            else
                this.setState({ c0: cuart, })
        }
        if (i == 1) {
            if (localStorage.hasOwnProperty("c1")) {
                let value = JSON.parse(localStorage.getItem("c1"));
                if (value.pronostico == localStorage.getItem("pronostico")) {

                    this.setState({ c1: value });
                } else
                    this.setState({
                        c1: cuart
                    })
            }
            else
                this.setState({
                    c1: cuart
                })
        }
        if (i == 2) {
            if (localStorage.hasOwnProperty("c2")) {
                let value = JSON.parse(localStorage.getItem("c2"));
                if (value.pronostico == localStorage.getItem("pronostico")) {

                    this.setState({ c2: value });
                } else
                    this.setState({
                        c2: cuart
                    })
            } else
                this.setState({
                    c2: cuart
                })
        }

        if (i == 3) {
            if (localStorage.hasOwnProperty("c3")) {
                let value = JSON.parse(localStorage.getItem("c3"));
                if (value.pronostico == localStorage.getItem("pronostico")) {
                    this.setState({ c3: value });
                } else
                    this.setState({
                        c3: cuart
                    })
            } else
                this.setState({
                    c3: cuart
                })
        }

    }
    semis = (semi, i) => {
        if (i == 0) {
            if (localStorage.hasOwnProperty("s1")) {
                let value = JSON.parse(localStorage.getItem("s1"));
                if (value.pronostico == localStorage.getItem("pronostico")) {
                    this.setState({ s1: value });
                }
                else
                    this.setState({
                        s1: semi
                    })
            } else
                this.setState({
                    s1: semi
                })
        }
        if (i == 1) {
            if (localStorage.hasOwnProperty("s2")) {
                let value = JSON.parse(localStorage.getItem("s2"));
                if (value.pronostico == localStorage.getItem("pronostico")) {
                    this.setState({ s2: value });
                }
                else
                    this.setState({
                        s2: semi
                    })
            } else
                this.setState({
                    s2: semi
                })
        }
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
        var oct01 = ""; var oct02 = ""; var oct11 = ""; var oct12 = ""; var oct21 = ""; var oct22 = "";
        var oct31 = ""; var oct32 = ""; var oct31 = ""; var oct32 = ""; var oct41 = ""; var oct42 = "";
        var oct51 = ""; var oct52 = ""; var oct61 = ""; var oct62 = ""; var oct71 = ""; var oct72 = "";
        var paiso01 = ""; var paiso02 = ""; var paiso11 = ""; var paiso12 = "";
        var paiso21 = ""; var paiso22 = ""; var paiso31 = ""; var paiso32 = "";
        var paiso41 = ""; var paiso42 = ""; var paiso51 = ""; var paiso52 = "";
        var paiso61 = ""; var paiso62 = ""; var paiso71 = ""; var paiso72 = "";
        var btn1 = ""; var btn2 = "";
        //si ya cargaron los partidos de octavos los seteo
        if (this.state.pOctavos7.jugador_uno != null) {
            oct01 = this.state.pOctavos0.jugador_uno; oct11 = this.state.pOctavos1.jugador_uno;
            oct02 = this.state.pOctavos0.jugador_dos; oct12 = this.state.pOctavos1.jugador_dos;
            oct21 = this.state.pOctavos2.jugador_uno; oct31 = this.state.pOctavos3.jugador_uno;
            oct22 = this.state.pOctavos2.jugador_dos; oct32 = this.state.pOctavos3.jugador_dos;
            oct41 = this.state.pOctavos4.jugador_uno; oct51 = this.state.pOctavos5.jugador_uno;
            oct42 = this.state.pOctavos4.jugador_dos; oct52 = this.state.pOctavos5.jugador_dos;
            oct61 = this.state.pOctavos6.jugador_uno; oct71 = this.state.pOctavos7.jugador_uno;
            oct62 = this.state.pOctavos6.jugador_dos; oct72 = this.state.pOctavos7.jugador_dos;
            paiso01 = <img src={oct01.pais + ".png"}></img>; paiso02 = <img src={oct02.pais + ".png"}></img>;
            paiso11 = <img src={oct11.pais + ".png"}></img>; paiso12 = <img src={oct12.pais + ".png"}></img>;
            paiso21 = <img src={oct21.pais + ".png"}></img>; paiso22 = <img src={oct22.pais + ".png"}></img>;
            paiso31 = <img src={oct31.pais + ".png"}></img>; paiso32 = <img src={oct32.pais + ".png"}></img>;
            paiso41 = <img src={oct41.pais + ".png"}></img>; paiso42 = <img src={oct42.pais + ".png"}></img>;
            paiso51 = <img src={oct51.pais + ".png"}></img>; paiso52 = <img src={oct52.pais + ".png"}></img>;
            paiso61 = <img src={oct61.pais + ".png"}></img>; paiso62 = <img src={oct62.pais + ".png"}></img>;
            paiso71 = <img src={oct71.pais + ".png"}></img>; paiso72 = <img src={oct72.pais + ".png"}></img>;
        }

        //si ya cargaron los partidos de cuartos los seteo
        var cuar01 = ""; var cuar02 = ""; var cuar31 = ""; var cuar32 = "";
        var cuar11 = ""; var cuar12 = ""; var cuar21 = ""; var cuar22 = "";
        var paisc01 = ""; var paisc02 = ""; var paisc11 = ""; var paisc12 = "";
        var paisc21 = ""; var paisc22 = ""; var paisc31 = ""; var paisc32 = "";
        if (this.state.c0 != null && this.state.c0.jugador_uno != null) {
            cuar01 = this.state.c0.jugador_uno;
            cuar02 = this.state.c0.jugador_dos;
            paisc01 = <img src={cuar01.pais + ".png"}></img>;
            paisc02 = <img src={cuar02.pais + ".png"}></img>;

            btn1 = <button className="btn btn-primary" onClick={(e) => this.actualizar(e)}>Guardar</button>;
            btn2 = <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Eliminar</button>;

        }
        if (this.state.c1 != null && this.state.c1.jugador_uno != null) {
            cuar11 = this.state.c1.jugador_uno;
            cuar12 = this.state.c1.jugador_dos;
            paisc11 = <img src={cuar11.pais + ".png"}></img>;
            paisc12 = <img src={cuar12.pais + ".png"}></img>;
        }
        if (this.state.c2 != null && this.state.c2.jugador_uno != null) {
            cuar21 = this.state.c2.jugador_uno;
            cuar22 = this.state.c2.jugador_dos;
            paisc21 = <img src={cuar21.pais + ".png"}></img>;
            paisc22 = <img src={cuar22.pais + ".png"}></img>;
        }
        if (this.state.c3 != null && this.state.c3.jugador_uno != null) {
            cuar31 = this.state.c3.jugador_uno;
            cuar32 = this.state.c3.jugador_dos;
            paisc31 = <img src={cuar31.pais + ".png"}></img>;
            paisc32 = <img src={cuar32.pais + ".png"}></img>;
        }

        //si ya cargaron los partidos de semis los seteo
        var sem01 = ""; var sem02 = ""; var sem11 = ""; var sem12 = "";
        var paiss11 = ""; var paiss12 = ""; var paiss21 = ""; var paiss22 = "";
        if (this.state.s1 != null && this.state.s1.jugador_uno != null) {
            sem01 = this.state.s1.jugador_uno;
            sem02 = this.state.s1.jugador_dos;
            paiss11 = <img src={sem01.pais + ".png"}></img>;
            paiss12 = <img src={sem02.pais + ".png"}></img>;
        }
        if (this.state.s2 != null && this.state.s2.jugador_uno != null) {
            sem11 = this.state.s2.jugador_uno;
            sem12 = this.state.s2.jugador_dos;
            paiss21 = <img src={sem11.pais + ".png"}></img>;
            paiss22 = <img src={sem12.pais + ".png"}></img>;
        }
        var f1 = ""; var f2 = "";
        var paisf1 = ""; var paisf2 = "";
        if (this.state.f != null && this.state.f.jugador_dos != null) {
            f1 = this.state.f.jugador_uno;
            f2 = this.state.f.jugador_dos;
            paisf1 = <img src={f1.pais + ".png"}></img>;
            paisf2 = <img src={f2.pais + ".png"}></img>;
        }
        var camp = "";
        if (this.state.champion != null && this.state.champion.jugador_uno != null) {
            camp = this.state.champion.jugador_uno;
        }
        return <div id="contenedor">
            <Pronostico setPronostico={this.setPronostico} agregarProno={this.props.agregaProno}
                octavos={this.octavos}
                cuartos={this.cuartos}
                semis={this.semis}
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
                                <td >{paiso01}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc0(oct01, e)}>{oct01.nombre}</button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc0(oct01, e)}>{oct01.abrev}</button>
                                    <br></br>
                                    {paiso02}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc0(oct02, e)}>{oct02.nombre}</button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc0(oct02, e)}>{oct02.abrev}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td > {paiso11}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc1(oct11, e)}>{oct11.nombre}</button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc1(oct11, e)}>{oct11.abrev}</button>
                                    <br></br>
                                    {paiso12}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc1(oct12, e)}>{oct12.nombre}</button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc1(oct12, e)}>{oct12.abrev}</button>
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td>{paisc01}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC0(cuar01, e)} >{cuar01.nombre}</button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC0(cuar01, e)} >{cuar01.abrev}</button><br></br>
                                    {paisc02}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC0(cuar02, e)}>  {cuar02.nombre}</button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC0(cuar02, e)}>  {cuar02.abrev}</button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td>{paisc11}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC1(cuar11, e)}>{cuar11.nombre}</button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC1(cuar11, e)}>{cuar11.abrev}</button>
                                    <br></br>
                                    {paisc12}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC1(cuar12, e)}>  {cuar12.nombre}</button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC1(cuar12, e)}>  {cuar12.abrev}</button>
                                </td>
                                <td> </td>
                            </tr >

                            <tr>
                                <td >{paiso21}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc2(oct21, e)}>{oct21.nombre}</button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC1(oct21, e)}>  {oct21.abrev}</button>
                                    <br></br>
                                    {paiso22}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc2(oct22, e)}>{oct22.nombre}</button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc2(oct22, e)}>{oct22.abrev}</button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td > {paiso31}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc3(oct31, e)}>{oct31.nombre}</button>
                                    <br></br>
                                    {paiso32}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc3(oct32, e)}>{oct32.nombre}</button>
                                </td>
                            </tr >
                            <tr>
                                <td > </td>
                                <td></td>
                                <td>{paiss11}
                                    <button className="btn btn-light" onClick={(e) => this.handleS1(sem01, e)}>{sem01.nombre}</button><br></br>
                                    {paiss12}
                                    <button className="btn btn-light" onClick={(e) => this.handleS1(sem02, e)}>  {sem02.nombre}</button>
                                </td>
                                <td> {paiss21}
                                    <button className="btn btn-light" onClick={(e) => this.handleS2(sem11, e)}>{sem11.nombre}</button><br></br>
                                    {paiss22}
                                    <button className="btn btn-light" onClick={(e) => this.handleS2(sem12, e)}>  {sem12.nombre}</button>
                                </td>
                                <td> </td>
                                <td>    </td>
                            </tr >
                            <tr>
                                <td > {paiso41}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc4(oct41, e)}>{oct41.nombre}</button>
                                    <br></br>
                                    {paiso42}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc4(oct42, e)}>{oct42.nombre}</button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    {paiso51}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc5(oct51, e)}>{oct51.nombre}</button>
                                    <br></br>
                                    {paiso52}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc5(oct52, e)}>{oct52.nombre}</button>
                                </td>
                            </tr >



                            <tr>
                                <td ></td>
                                <td>{paisc21}
                                    <button className="btn btn-light" onClick={(e) => this.handleC2(cuar21, e)}>{cuar21.nombre}</button><br></br>
                                    {paisc22}
                                    <button className="btn btn-light" onClick={(e) => this.handleC2(cuar22, e)}>  {cuar22.nombre}</button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td>{paisc31}
                                    <button className="btn btn-light" onClick={(e) => this.handleC3(cuar31, e)}>{cuar31.nombre}</button><br></br>
                                    {paisc32}
                                    <button className="btn btn-light" onClick={(e) => this.handleC3(cuar32, e)}>  {cuar32.nombre}</button>
                                </td>
                                <td> </td>
                            </tr >

                            <tr>
                                <td >{paiso61}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc6(oct61, e)}>{oct61.nombre}</button>
                                    <br></br>
                                    {paiso62}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc6(oct62, e)}>{oct62.nombre}</button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td > {paiso71}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc7(oct71, e)}>{oct71.nombre}</button>
                                    <br></br>
                                    {paiso72}
                                    <button className="btn btn-light-grey" onClick={(e) => this.handleOc7(oct72, e)}>{oct72.nombre}</button>
                                </td>
                            </tr >


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
                        {paisf1}
                        <button className="btn btn-light" onClick={(e) => this.handleCampeon(f1, e)}> {f1.nombre}</button>
                    </div>
                    <div className="col-2  justify-content-center align-items-center minh-100">
                        {paisf2}
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
                {btn1}
                {btn2}
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
        final["pronostico"] = this.state.pronostico;
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
            final["pronostico"] = this.state.pronostico;
            localStorage.setItem("c3", JSON.stringify(final));
        });


    }
    async actualizar(e) {

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
                campeon: this.state.champion,
            });
            for (let key in this.state) {
                // if the key exists in localStorage
                if (localStorage.hasOwnProperty(key))
                    localStorage.removeItem(key);

            }
            this.setState(this.baseState);
            alert("Su pronostico se guardo correctamente");
        } catch (e) {
            console.log('axios request failed:', e);
        }


    }

    async eliminar(e) {
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
                campeon: this.state.champion.id,
            });
            for (let key in this.state) {

                if (localStorage.hasOwnProperty(key))
                    localStorage.removeItem(key);
            }
            this.setState(this.baseState);
            localStorage.setItem("use", "false");
            alert("Se elimino correctamente");
        } catch (e) {
            alert("Hubo problema no se pudo eliminar,intente nuevamente");
            console.log('axios request failed:', e);
        }


    }

}
