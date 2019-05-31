
import React, { Component } from 'react';
import './perfil.css';
import Pronostico from './Pronostico.js';
export default class Perfil extends Component {
    state = {
        pOctavos0: [], pOctavos1: [], pOctavos2: [], pOctavos3: [], pOctavos4: [], pOctavos5: [], pOctavos6: [], pOctavos7: [],
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
            c0j1: cuart.jugador_uno,
            c0j2: cuart.jugador_dos,
        })
    }
    cuartos1 = (cuart) => {
        this.setState({
            c1j1: cuart.jugador_uno,
            c1j2: cuart.jugador_dos,
        })
    }
    cuartos2 = (cuart) => {
        this.setState({
            c2j1: cuart.jugador_uno,
            c2j2: cuart.jugador_dos,
        })
    }
    cuartos3 = (cuart) => {
        this.setState({
            c3j1: cuart.jugador_uno,
            c3j2: cuart.jugador_dos,
        })
    }
    semis1 = (semi) => {
        this.setState({
            s1j1: semi.jugador_uno,
            s1j2: semi.jugador_dos,
        })
    }
    semis2 = (semi) => {
        this.setState({
            s2j1: semi.jugador_uno,
            s2j2: semi.jugador_dos,
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
            oct01 = this.state.pOctavos0.jugador_uno.nombre; oct11 = this.state.pOctavos1.jugador_uno.nombre;
            var oct02 = this.state.pOctavos0.jugador_dos.nombre; oct12 = this.state.pOctavos1.jugador_dos.nombre;
            oct21 = this.state.pOctavos2.jugador_uno.nombre; oct31 = this.state.pOctavos3.jugador_uno.nombre;
            oct22 = this.state.pOctavos2.jugador_dos.nombre; oct32 = this.state.pOctavos3.jugador_dos.nombre;
            oct41 = this.state.pOctavos4.jugador_uno.nombre; oct51 = this.state.pOctavos5.jugador_uno.nombre;
            oct42 = this.state.pOctavos4.jugador_dos.nombre; oct52 = this.state.pOctavos5.jugador_dos.nombre;
            oct61 = this.state.pOctavos6.jugador_uno.nombre; oct71 = this.state.pOctavos7.jugador_uno.nombre;
            oct62 = this.state.pOctavos6.jugador_dos.nombre; oct72 = this.state.pOctavos7.jugador_dos.nombre;
        }

        //si ya cargaron los partidos de cuartos los seteo
        var cuar01 = ""; var cuar02 = ""; var cuar31 = ""; var cuar32 = "";
        var cuar11 = ""; var cuar12 = ""; var cuar21 = ""; var cuar22 = "";
        if (this.state.c0j1 != null) {
            cuar01 = this.state.c0j1;
        }
        if (this.state.c0j2 != null) {
            cuar02 = this.state.c0j2;
        }
        if (this.state.c1j1 != null) {
            cuar11 = this.state.c1j1;
        }
        if (this.state.c1j2 != null) {
            cuar12 = this.state.c1j2;
        }
        if (this.state.c2j1 != null) {
            cuar21 = this.state.c2j1;
        }
        if (this.state.c2j2 != null) {
            cuar22 = this.state.c2j2;
        }
        if (this.state.c3j1 != null) {
            cuar31 = this.state.c3j1;
        }
        if (this.state.c3j2 != null) {
            cuar32 = this.state.c3j2;
        }



        //si ya cargaron los partidos de semis los seteo
        var sem01 = ""; var sem02 = ""; var sem11 = ""; var sem12 = "";
        if (this.state.s1j1.nombre != null) {

            sem01 = this.state.s1j1;

        }
        if (this.state.s1j2 != null) {
            sem02 = this.state.s1j2;
        }
        if (this.state.s2j1.nombre != null) {

            sem11 = this.state.s2j1;

        }
        if (this.state.s2j2 != null) {
            sem12 = this.state.s2j2;
        }
        return <div id="contenedor">
            <Pronostico setPronostico={this.setPronostico} agregarProno={this.props.agregaProno}

                cuartos0={this.cuartos0} cuartos1={this.cuartos1} cuartos2={this.cuartos2} cuartos3={this.cuartos3}
                semis1={this.semis1} semis2={this.semis2}
            />


            <div className="container-fluid">
                <div className="row">
                    < table className="table-responsive table-striped ">
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
                                    <button className="btn btn-light-grey">{oct01}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct02}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey">{oct11}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct12}</button>
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td><button className="btn btn-light" onClick={(e) => this.handleClick(cuar01, e)} >{cuar01.nombre}</button><br></br>
                                    <button className="btn btn-light">  {cuar02.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-light" >{cuar11.nombre}</button><br></br>
                                    <button className="btn btn-light">  {cuar12.nombre}</button>
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td >
                                    <button className="btn btn-light-grey">{oct21}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct22}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey">{oct31}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct32}</button>
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
                                    <button className="btn btn-light-grey">{oct41}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct42}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey">{oct51}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct52}</button>
                                </td>
                            </tr>



                            <tr>
                                <td ></td>
                                <td><button className="btn btn-light">{cuar21.nombre}</button><br></br>
                                    <button className="btn btn-light">  {cuar22.nombre}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-light">{cuar31.nombre}</button><br></br>
                                    <button className="btn btn-light">  {cuar32.nombre}</button>
                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td >
                                    <button className="btn btn-light-grey">{oct61}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct62}</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    <button className="btn btn-light-grey">{oct71}</button>
                                    <br></br>
                                    <button className="btn btn-light-grey">{oct72}</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div> </div >
        </div >
    }

    //se encarga de cambiar el pronostico de la semi
    handleClick = (newP, e) => {

        console.log("cambio semi");
        console.log(newP);
        this.setState({ s1j1: newP }, () => {

            this.setState({ load: true })
        });

    }

}
