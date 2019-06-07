import React, { Component } from 'react';
import axios from 'axios';
import Tabla from '../../components/table/Tabla';
import { Table } from 'reactstrap';
import TablaC from '../../components/table/TablaC';
import TablaS from '../../components/table/TablaS';
import TablaF from '../../components/table/TablaF';
import TablaG from '../../components/table/TablaG';
import '../../components/table/tabla.css';



class Listar extends Component {


    url = "/api/index";

    constructor(props) {
        super(props);
        this.state = {
            octavos: [],
            equipos: [],
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            campeon: "",
        }
    }


    ganadorO(e, equipo) {
        e.preventDefault();
        var cuartos = this.state.cuartos;
        // this.setState({valores: valores});
        switch (true) {
            case equipo.id <= 2:
                cuartos[0] = equipo;

                this.setState({
                    cuartos: cuartos,
                })
                break;

            case equipo.id >= 3 && equipo.id < 5:
                cuartos[1] = equipo;
                this.setState({
                    cuartos: cuartos,
                })
                break;
            case equipo.id >= 5 && equipo.id < 7:
                cuartos[2] = equipo;
                this.setState({
                    cuartos: cuartos,
                })
                break;
            case (equipo.id >= 7 && equipo.id < 9):
                cuartos[3] = equipo;
                this.setState({
                    cuartos: cuartos
                })
                break;
            case (equipo.id >= 9 && equipo.id < 11):
                cuartos[4] = equipo;
                this.setState({
                    cuartos: cuartos
                })
                break;
            case (equipo.id >= 11 && equipo.id < 13):
                cuartos[5] = equipo;
                this.setState({
                    cuartos: cuartos
                })
                break;
            case (equipo.id >= 13 && equipo.id < 15):
                cuartos[6] = equipo;
                this.setState({
                    cuartos: cuartos
                })
                break;
            case (equipo.id >= 15 && equipo.id < 17):
                cuartos[7] = equipo;
                this.setState({
                    cuartos: cuartos
                })
                break;
            default:
                console.log('error');

        }

    }
    ganadorC(e, equipo) {
        e.preventDefault();
        var semis = this.state.semis;
        // this.setState({valores: valores});
        switch (true) {
            case equipo.id <= 4:
                semis[0] = equipo;

                this.setState({
                    semis: semis,
                })
                break;

            case equipo.id >= 5 && equipo.id < 9:
                semis[1] = equipo;
                this.setState({
                    semis: semis,
                })
                break;
            case equipo.id >= 9 && equipo.id < 13:
                semis[2] = equipo;
                this.setState({
                    semis: semis,
                })
                break;
            case (equipo.id >= 13 && equipo.id < 17):
                semis[3] = equipo;
                this.setState({
                    semis: semis
                })
                break;
            default:
                console.log('error');

        }
    }
    ganadorS(e, equipo) {
        e.preventDefault();
        var final = this.state.final;
        // this.setState({valores: valores});
        switch (true) {
            case equipo.id <= 8:
                final[0] = equipo;

                this.setState({
                    final: final,
                })
                break;

            case equipo.id >= 9 && equipo.id < 17:
               final[1] = equipo;
                this.setState({
                    final: final,
                })
                break;
            default:
                console.log('error');

        }
    }



    /**Cuando monte el componente que me liste los equipos */
    componentDidMount() {
        axios({
            method: 'get',
            url: this.url
        }).then(respuesta => {
            let r = respuesta.data;
            this.setState({
                equipos: r.data,
                octavos: r.data
            });
        }).catch(error => {
            alert("Error")
        });


    }
    pintar_equipos() {
        return this.state.equipos.map((e, i) =>
            <Tabla key={i} e={e} r={this.state.r} ganadorO={this.ganadorO.bind(this)} />
        );


    }


    render() {
        const { cuartos } = this.state.cuartos;
        return (





            <div className="container">
                    <div className="row flex-row flex-nowrap">

                <div className="row">
                    <div className="col-sm">

                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Octavos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.pintar_equipos()}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm">
                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Cuartos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TablaC cuartos={this.state.cuartos} ganadorC={this.ganadorC.bind(this)} />
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-sm">
                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Semifinal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TablaS semis={this.state.semis} ganadorS={this.ganadorS.bind(this)}/>
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-sm">
                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <TablaF final={this.state.final}/>
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-sm">
                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Semifinal</th>
                                </tr>
                            </thead>
                            <tbody>
                            <TablaS semis={this.state.semis} ganadorS={this.ganadorS.bind(this)}/>
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-sm">
                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Cuartos</th>
                                </tr>
                            </thead>
                            <tbody>
                            <TablaC cuartos={this.state.cuartos} ganadorC={this.ganadorC.bind(this)} />
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="row">

                    <div className="col-sm">
                        <Table responsive className="table-borderless">
                            <thead>
                                <tr>
                                    <th>Octavos</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.pintar_equipos() }

                            </tbody>
                        </Table>
                    </div>
                    </div>


                </div>
            </div>








        );
    }
}

export default Listar;
