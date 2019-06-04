
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
                                <td >   {this.state.pOctavos0.jugador_uno && <img src={"banderas/" + this.state.pOctavos0.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc0(this.state.pOctavos0.jugador_uno, e)}>
                                        {this.state.pOctavos0.jugador_uno && this.state.pOctavos0.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc0(this.state.pOctavos0.jugador_uno, e)}>
                                        {this.state.pOctavos0.jugador_uno && this.state.pOctavos0.jugador_uno.abrev}
                                    </button>
                                    <br></br>
                                    {this.state.pOctavos0.jugador_dos && <img src={"banderas/" + this.state.pOctavos0.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc0(this.state.pOctavos0.jugador_dos, e)}>
                                        {this.state.pOctavos0.jugador_uno && this.state.pOctavos0.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc0(this.state.pOctavos0.jugador_dos, e)}>
                                        {this.state.pOctavos0.jugador_uno && this.state.pOctavos0.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td > {this.state.pOctavos1.jugador_uno && <img src={"banderas/" + this.state.pOctavos1.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc1(this.state.pOctavos1.jugador_uno, e)}>
                                        {this.state.pOctavos1.jugador_uno && this.state.pOctavos1.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc1(this.state.pOctavos1.jugador_uno, e)}>
                                        {this.state.pOctavos1.jugador_uno && this.state.pOctavos1.jugador_uno.abrev}
                                    </button>
                                    <br></br>
                                    {this.state.pOctavos1.jugador_dos && <img src={"banderas/" + this.state.pOctavos1.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc1(this.state.pOctavos1.jugador_dos, e)}>
                                        {this.state.pOctavos1.jugador_dos && this.state.pOctavos1.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc1(this.state.pOctavos1.jugador_dos, e)}>
                                        {this.state.pOctavos1.jugador_dos && this.state.pOctavos1.jugador_dos.abrev}
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td> {this.state.c0.jugador_uno && <img src={"banderas/" + this.state.c0.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC0(this.state.c0.jugador_uno, e)} >
                                        {this.state.c0.jugador_uno && this.state.c0.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC0(this.state.c0.jugador_uno, e)} >
                                        {this.state.c0.jugador_uno && this.state.c0.jugador_uno.abrev}
                                    </button><br></br>
                                    {this.state.c0.jugador_dos && <img src={"banderas/" + this.state.c0.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC0(this.state.c0.jugador_dos, e)} >
                                        {this.state.c0.jugador_dos && this.state.c0.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC0(this.state.c0.jugador_dos, e)} >
                                        {this.state.c0.jugador_dos && this.state.c0.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td> {this.state.c1.jugador_uno && <img src={"banderas/" + this.state.c1.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC1(this.state.c1.jugador_uno, e)} >
                                        {this.state.c1.jugador_uno && this.state.c1.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC1(this.state.c1.jugador_uno, e)} >
                                        {this.state.c1.jugador_uno && this.state.c1.jugador_uno.abrev}
                                    </button>
                                    <br></br>
                                    {this.state.c1.jugador_dos && <img src={"banderas/" + this.state.c1.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC1(this.state.c1.jugador_dos, e)} >
                                        {this.state.c1.jugador_dos && this.state.c1.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC1(this.state.c1.jugador_dos, e)} >
                                        {this.state.c1.jugador_dos && this.state.c1.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                            </tr >

                            <tr>

                                <td> {this.state.pOctavos2.jugador_uno && <img src={"banderas/" + this.state.pOctavos2.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc2(this.state.pOctavos2.jugador_uno, e)} >
                                        {this.state.pOctavos2.jugador_uno && this.state.pOctavos2.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc2(this.state.pOctavos2.jugador_uno, e)} >
                                        {this.state.pOctavos2.jugador_uno && this.state.pOctavos2.jugador_uno.abrev}
                                    </button>
                                    <br></br>

                                    {this.state.pOctavos2.jugador_dos && <img src={"banderas/" + this.state.pOctavos2.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc2(this.state.pOctavos2.jugador_dos, e)} >
                                        {this.state.pOctavos2.jugador_dos && this.state.pOctavos2.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc2(this.state.pOctavos2.jugador_dos, e)} >
                                        {this.state.pOctavos2.jugador_dos && this.state.pOctavos2.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >  {this.state.pOctavos3.jugador_uno && <img src={"banderas/" + this.state.pOctavos3.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc3(this.state.pOctavos3.jugador_uno, e)} >
                                        {this.state.pOctavos3.jugador_uno && this.state.pOctavos3.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc3(this.state.pOctavos3.jugador_uno, e)} >
                                        {this.state.pOctavos3.jugador_uno && this.state.pOctavos3.jugador_uno.abrev}
                                    </button>
                                    <br></br>

                                    {this.state.pOctavos3.jugador_dos && <img src={"banderas/" + this.state.pOctavos3.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc3(this.state.pOctavos3.jugador_dos, e)} >
                                        {this.state.pOctavos3.jugador_dos && this.state.pOctavos3.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc3(this.state.pOctavos3.jugador_dos, e)} >
                                        {this.state.pOctavos3.jugador_dos && this.state.pOctavos3.jugador_dos.abrev}
                                    </button>
                                </td>
                            </tr >
                            <tr>
                                <td > </td>
                                <td></td>
                                <td>{this.state.s1.jugador_uno && <img src={"banderas/" + this.state.s1.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleS1(this.state.s1.jugador_uno, e)}>
                                        {this.state.s1.jugador_uno && this.state.s1.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleS1(this.state.s1.jugador_uno, e)}>
                                        {this.state.s1.jugador_uno && this.state.s1.jugador_uno.abrev}
                                    </button>
                                    <br></br>
                                    {this.state.s1.jugador_dos && <img src={"banderas/" + this.state.s1.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleS1(this.state.s1.jugador_dos, e)}>
                                        {this.state.s1.jugador_dos && this.state.s1.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleS1(this.state.s1.jugador_dos, e)}>
                                        {this.state.s1.jugador_dos && this.state.s1.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> {this.state.s2.jugador_uno && <img src={"banderas/" + this.state.s2.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light" onClick={(e) => this.handleS2(this.state.s2.jugador_uno, e)}>
                                        {this.state.s2.jugador_uno && this.state.s2.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleS2(this.state.s2.jugador_uno, e)}>
                                        {this.state.s2.jugador_uno && this.state.s2.jugador_uno.abrev}
                                    </button>

                                    <br></br>
                                    {this.state.s2.jugador_dos && <img src={"banderas/" + this.state.s2.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light" onClick={(e) => this.handleS2(this.state.s2.jugador_dos, e)}>
                                        {this.state.s2.jugador_dos && this.state.s2.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleS2(this.state.s2.jugador_dos, e)}>
                                        {this.state.s2.jugador_dos && this.state.s2.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                                <td></td>
                            </tr >
                            <tr>
                                <td >  {this.state.pOctavos4.jugador_uno && <img src={"banderas/" + this.state.pOctavos4.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc4(this.state.pOctavos4.jugador_uno, e)} >
                                        {this.state.pOctavos4.jugador_uno && this.state.pOctavos4.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc4(this.state.pOctavos4.jugador_uno, e)} >
                                        {this.state.pOctavos4.jugador_uno && this.state.pOctavos4.jugador_uno.abrev}
                                    </button>
                                    <br></br>

                                    {this.state.pOctavos4.jugador_dos && <img src={"banderas/" + this.state.pOctavos4.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc4(this.state.pOctavos4.jugador_dos, e)} >
                                        {this.state.pOctavos4.jugador_dos && this.state.pOctavos4.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc4(this.state.pOctavos4.jugador_dos, e)} >
                                        {this.state.pOctavos4.jugador_dos && this.state.pOctavos4.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >  {this.state.pOctavos5.jugador_uno && <img src={"banderas/" + this.state.pOctavos5.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc5(this.state.pOctavos5.jugador_uno, e)} >
                                        {this.state.pOctavos5.jugador_uno && this.state.pOctavos5.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc5(this.state.pOctavos5.jugador_uno, e)} >
                                        {this.state.pOctavos5.jugador_uno && this.state.pOctavos5.jugador_uno.abrev}
                                    </button>
                                    <br></br>

                                    {this.state.pOctavos5.jugador_dos && <img src={"banderas/" + this.state.pOctavos5.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc5(this.state.pOctavos5.jugador_dos, e)} >
                                        {this.state.pOctavos5.jugador_dos && this.state.pOctavos5.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc5(this.state.pOctavos5.jugador_dos, e)} >
                                        {this.state.pOctavos5.jugador_dos && this.state.pOctavos5.jugador_dos.abrev}
                                    </button>
                                </td>
                            </tr >



                            <tr>
                                <td ></td>
                                <td> {this.state.c2.jugador_uno && <img src={"banderas/" + this.state.c2.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC2(this.state.c2.jugador_uno, e)} >
                                        {this.state.c2.jugador_uno && this.state.c2.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC2(this.state.c2.jugador_uno, e)} >
                                        {this.state.c2.jugador_uno && this.state.c2.jugador_uno.abrev}
                                    </button>
                                    <br></br>
                                    {this.state.c2.jugador_dos && <img src={"banderas/" + this.state.c2.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC2(this.state.c2.jugador_dos, e)} >
                                        {this.state.c2.jugador_dos && this.state.c2.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC2(this.state.c2.jugador_dos, e)} >
                                        {this.state.c2.jugador_dos && this.state.c2.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td> {this.state.c3.jugador_uno && <img src={"banderas/" + this.state.c3.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC3(this.state.c3.jugador_uno, e)} >
                                        {this.state.c3.jugador_uno && this.state.c3.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC3(this.state.c3.jugador_uno, e)} >
                                        {this.state.c3.jugador_uno && this.state.c3.jugador_uno.abrev}
                                    </button>
                                    <br></br>
                                    {this.state.c3.jugador_dos && <img src={"banderas/" + this.state.c3.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light jugador" onClick={(e) => this.handleC3(this.state.c3.jugador_dos, e)} >
                                        {this.state.c3.jugador_dos && this.state.c3.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light jugadorabre" onClick={(e) => this.handleC3(this.state.c3.jugador_dos, e)} >
                                        {this.state.c3.jugador_dos && this.state.c3.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                            </tr >

                            <tr>
                                <td >  {this.state.pOctavos6.jugador_uno && <img src={"banderas/" + this.state.pOctavos6.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc6(this.state.pOctavos6.jugador_uno, e)} >
                                        {this.state.pOctavos6.jugador_uno && this.state.pOctavos6.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc6(this.state.pOctavos6.jugador_uno, e)} >
                                        {this.state.pOctavos6.jugador_uno && this.state.pOctavos6.jugador_uno.abrev}
                                    </button>
                                    <br></br>

                                    {this.state.pOctavos6.jugador_dos && <img src={"banderas/" + this.state.pOctavos6.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc6(this.state.pOctavos6.jugador_dos, e)} >
                                        {this.state.pOctavos6.jugador_dos && this.state.pOctavos6.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc6(this.state.pOctavos6.jugador_dos, e)} >
                                        {this.state.pOctavos6.jugador_dos && this.state.pOctavos6.jugador_dos.abrev}
                                    </button>
                                </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >  {this.state.pOctavos7.jugador_uno && <img src={"banderas/" + this.state.pOctavos7.jugador_uno.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc7(this.state.pOctavos7.jugador_uno, e)} >
                                        {this.state.pOctavos7.jugador_uno && this.state.pOctavos7.jugador_uno.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc7(this.state.pOctavos7.jugador_uno, e)} >
                                        {this.state.pOctavos7.jugador_uno && this.state.pOctavos7.jugador_uno.abrev}
                                    </button>
                                    <br></br>

                                    {this.state.pOctavos7.jugador_dos && <img src={"banderas/" + this.state.pOctavos7.jugador_dos.pais + ".png"}></img>}
                                    <button className="btn btn-light-grey jugador" onClick={(e) => this.handleOc7(this.state.pOctavos7.jugador_dos, e)} >
                                        {this.state.pOctavos7.jugador_dos && this.state.pOctavos7.jugador_dos.nombre}
                                    </button>
                                    <button className="btn btn-light-grey jugadorabre" onClick={(e) => this.handleOc7(this.state.pOctavos7.jugador_dos, e)} >
                                        {this.state.pOctavos7.jugador_dos && this.state.pOctavos7.jugador_dos.abrev}
                                    </button>
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
                        {this.state.f.jugador_uno && <img src={"banderas/" + this.state.f.jugador_uno.pais + ".png"}></img>}
                        <button className="btn btn-light" onClick={(e) => this.handleCampeon(this.state.f.jugador_uno, e)}>
                            {this.state.f.jugador_uno && this.state.f.jugador_uno.nombre}
                        </button>
                    </div>
                    <div className="col-2  justify-content-center align-items-center minh-100">
                        {this.state.f.jugador_dos && <img src={"banderas/" + this.state.f.jugador_dos.pais + ".png"}></img>}
                        <button className="btn btn-light" onClick={(e) => this.handleCampeon(this.state.f.jugador_dos, e)}>
                            {this.state.f.jugador_uno && this.state.f.jugador_dos.nombre}
                        </button>
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

                {this.state.c0.jugador_dos && <button className="btn btn-primary" onClick={(e) => this.actualizar(e)}>Guardar</button>}
                {this.state.c0.jugador_dos && <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Eliminar</button>}
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
            const response = await axios.post('/api/actualizar', {
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
            const response = await axios.post('/api/eliminarpronostico', {
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
