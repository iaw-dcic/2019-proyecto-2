
import React, { Component } from 'react';
import './perfil.css';
import Pronostico from './Pronostico.js';
export default class Perfil extends Component {
    state = {
        pOctavos0: [], pOctavos1: [], pOctavos2: [], pOctavos3: [], pOctavos4: [], pOctavos5: [], pOctavos6: [], pOctavos7: [],
        pCuartos0: [], pCuartos2: [], pCuartos1: [], pCuartos3: [],
        pSemis0: [], pSemis1: [],
        partidoFinal: [],
        pronostico: 0,
    }

    setPronostico = (newP) => {
        // this.setState({
        //     pCuartos0: Array()
        // })

        this.setState({
            pronostico: newP
        });

    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((this.state.pronostico != nextState.pronostico) || this.state.pCuartos0.jugador_uno == null)
            return true;
        else
            return false;
    }

    componentDidUpdate() {
        console.log(this.state.pronostico);
        if (this.state.pronostico != -1) {
            // fetch('http://localhost/pr2/api/pronostico/8/' + this.state.pronostico)
            //     .then(res => res.json())
            //     .then(json => {
            //         this.setState({
            //             pOctavos0: json.items[0],
            //             pOctavos1: json.items[1],
            //               pOctavos2: json.items[2],
            //               pOctavos3: json.items[3],
            //               pOctavos4: json.items[4],
            //               pOctavos5: json.items[5],
            //              pOctavos6: json.items[6],
            //              pOctavos7: json.items[7],
            //         })
            //     });
            fetch('http://localhost/pr2/api/pronostico/4/' + this.state.pronostico)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        pCuartos0: json.items[0],
                        pCuartos1: json.items[1],
                        pCuartos2: json.items[2],
                        pCuartos3: json.items[3],
                    })
                });
            // fetch('http://localhost/pr2/api/pronostico/2/' + selectedValue)
            //     .then(res => res.json())
            //     .then(json => {
            //         this.setState({
            //             pSemis0: json.items[0],
            //             pSemis1: json.items[1],
            //         })
            //     });
            // fetch('http://localhost/pr2/api/pronostico/1/' + selectedValue)
            //     .then(res => res.json())
            //     .then(json => {
            //         this.setState({
            //             partidoFinal: json.partidos,
            //         })
            //     });

        }
    }




    render() {
        console.log("render");
        var oct01 = ""; var oct02 = "";
        if (this.state.pOctavos0.jugador_uno != null) {
            oct01 = this.state.pOctavos0.jugador_uno;
            oct02 = this.state.pOctavos0.jugador_dos;
        }
        var oct11 = ""; var oct12 = "";
        if (this.state.pOctavos1.jugador_uno != null) {
            oct11 = this.state.pOctavos1.jugador_uno;
            oct12 = this.state.pOctavos1.jugador_dos;
        }
        var cuar01 = ""; var cuar02 = "";
        if (this.state.pCuartos0.jugador_uno != null) {
            cuar01 = this.state.pCuartos0.jugador_uno;
            cuar02 = this.state.pCuartos0.jugador_dos;
        }
        var cuar11 = ""; var cuar12 = "";
        if (this.state.pCuartos1.jugador_uno != null) {
            cuar11 = this.state.pCuartos1.jugador_uno;
            cuar12 = this.state.pCuartos1.jugador_dos;
        }
        var cuar21 = ""; var cuar22 = "";
        if (this.state.pCuartos2.jugador_uno != null) {
            cuar21 = this.state.pCuartos2.jugador_uno;
            cuar22 = this.state.pCuartos2.jugador_dos;
        }
        var cuar31 = ""; var cuar32 = "";
        if (this.state.pCuartos3.jugador_uno != null) {
            cuar31 = this.state.pCuartos3.jugador_uno;
            cuar32 = this.state.pCuartos3.jugador_dos;
        }
        return <div id="contenedor">
            <Pronostico setPronostico={this.setPronostico} />
            <div className="container-fluid">
                <div className="row">
                    < table className="table-responsive table-striped ">
                        <thead >
                            <tr>
                                <th scope="col"  >Octavos</th>
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
                                    {oct01}
                                    <br></br>
                                    {oct02}
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> {oct11}
                                    <br></br>
                                    {oct12}
                                </td>
                            </tr>

                            <tr>
                                <td ></td>
                                <td>{cuar01}<br></br>
                                    {cuar02}
                                </td>
                                <td></td>
                                <td></td>
                                <td>{cuar11}<br></br>
                                    {cuar12}

                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>8 <br></br>
                                    8
                                 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>8 <br></br>
                                    8
                            </td>
                            </tr>
                            <tr>
                                <td > </td>
                                <td></td>
                                <td> SEMINFINALISTA
                                    <br></br>
                                    SEMINFINALISTA
                                </td>
                                <td>SEMINFINALISTA
                                    <br></br>
                                    SEMINFINALISTA</td>
                                <td></td>
                                <td>    </td>
                            </tr>
                            <tr>
                                <td>8 <br></br>
                                    8
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>8
                                <br></br>
                                    8

                                </td>
                            </tr>



                            <tr>
                                <td ></td>
                                <td>{cuar21}<br></br>
                                    {cuar22}
                                </td>
                                <td></td>
                                <td></td>
                                <td>{cuar31}<br></br>
                                    {cuar32}

                                </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>8  <br></br>
                                    8
                            </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>8  <br></br>
                                    8
                            </td>
                            </tr>


                        </tbody>
                    </table>
                </div> </div >
        </div >
    }
}
