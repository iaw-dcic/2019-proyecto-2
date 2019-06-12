import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';

import Tabla from '../../components/table/Tabla';
import TablaC from '../../components/table/TablaC';
import TablaS from '../../components/table/TablaS';
import TablaF from '../../components/table/TablaF';
import TablaD from '../../components/table/TablaD';
import TablaCD from '../../components/table/TablaCD';
import TablaSD from '../../components/table/TablaSD';
import '../../components/table/tabla.css';
import PanelBotones from '../../components/PanelBotones';
import config from '../../components/config/config';




class Listar extends Component {


    url = "/api";

    constructor(props) {
        super(props);
        this.state = {
            octavos: [],
            equipos: [],
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            campeon: [""],
            id: 0,
            prodes: [],
            guardar: false,
            reset: false,

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
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 9 && equipo.id < 11):
                cuartos[4] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 11 && equipo.id < 13):
                cuartos[5] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 13 && equipo.id < 15):
                cuartos[6] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 15 && equipo.id < 17):
                cuartos[7] = equipo;
                this.setState({
                    cuartos: cuartos,

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
    ganadorF(e, equipo) {
        e.preventDefault();
        var ganador = this.state.campeon;
        ganador[0] = equipo;

        this.setState({
            campeon: ganador,
            guardar: true
        });
    }



    /**Cuando monte el componente que me liste los equipos */
    componentDidMount() {
        window.axios = require('axios');


        let api_token = document.querySelector('meta[name="api-token"]');
        localStorage.setItem("api_token", api_token);
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = api_token.content;

        //Request del usuario
        axios({
            method: 'get',
            url: this.url + '/user',
        }).then(respuesta => {
            let r = respuesta.data;
            var id = r.data
            this.setState({
                id: id,
            });
            console.log(r.data)
            //Request de prodes del usuario
            axios({
                method: 'get',
                url: this.url + '/prode/usuario/' + this.state.id
            }).then(respuesta => {
                let r = respuesta.data;
                this.setState({
                    prodes: r.data,
                });
            }).catch(error => {
                alert("Error")
            });

        }).catch(error => {
            alert("Error")
        });





        //Request de equipos
        axios({
            method: 'get',
            url: this.url + '/index',
        }).then(respuesta => {
            let r = respuesta.data;
            this.setState({
                equipos: r.data,
                octavos: r.data,
            });
        }).catch(error => {
            alert("Error")
        });


    }
    pintar_equipos() {
        return this.state.equipos.map((e, i) =>
            <Tabla key={i} e={e} ganadorO={this.ganadorO.bind(this)} />
        );
    }
    pintar_equipos2() {
        return this.state.equipos.map((e, i) =>
            <TablaD key={i} e={e} ganadorO={this.ganadorO.bind(this)} />
        );
    }



    new() {
        this.reiniciar();
        //recarga la pagina
        // window.location.reload();
        //Request de prodes del usuario
        axios({
            method: 'get',
            url: this.url + '/prode/usuario/' + this.state.id
        }).then(respuesta => {
            let r = respuesta.data;
            this.setState({
                prodes: r.data,
            });
        }).catch(error => {
            alert("Error")
        });
    }

    reiniciar() {
        this.setState({
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            campeon: [""],
            guardar:false,
        });
    }

    seleccionarProde(e) {
        this.reiniciar();
        let cuartos = e.cuartos.split(',');
        let semis = e.semis.split(',');
        let final = e.final.split(',');
        let campeon = e.campeon.split(',');
        console.log('antes del for',cuartos);
        var c;
        for(c=0; c<=8; c++){
            this.state.equipos.map((e, i) =>
            {
                if(cuartos[c]==e.id){
                    cuartos[c]=e;
                }
                if(c<4 && semis[c]==e.id){
                    semis[c]=e;
                }
                if(c<2 && final[c]==e.id){
                    final[c]=e;
                }
                if(campeon[0]==e.id){
                    campeon[0]=e;
                }
            });
        }
        this.setState({
            cuartos:cuartos,
            semis:semis,
            final:final,
            campeon:campeon,
        });
        console.log('despues del for',this.state.campeon)
    }

    misProdes() {
        if (this.state.prodes.length>0) {
            return this.state.prodes.map((e, i) =>
                <button className="dropdown-item" onClick={() => { this.seleccionarProde(e) }}>{e.name}</button>
            );
        }
    }

    render() {
        let guardar;
        if (this.state.guardar && document.querySelector('meta[name="api-token"]') != null) {
            guardar = <PanelBotones cuartos={this.state.cuartos} semis={this.state.semis} final={this.state.final} campeon={this.state.campeon} new={this.new.bind(this)} />;
        }


        return (


            <div className="container-fluid">

                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mis Prodes
                    </button>
                    <div className="dropdown-menu">
                        {this.misProdes()}
                    </div>
                </div>


                <div className="text-center row flex-row flex-nowrap">
                    <div className="row">
                        <div className="col-xs-4">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Octavos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.pintar_equipos()}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Cuartos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaC reset={this.state.reset} cuartos={this.state.cuartos} otroCuadro={this.state.otroCuadro} ganadorC={this.ganadorC.bind(this)} />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Semifinal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaS semis={this.state.semis} ganadorS={this.ganadorS.bind(this)} />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaF final={this.state.final} campeon={this.state.campeon}ganadorF={this.ganadorF.bind(this)} />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Semifinal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaSD semis={this.state.semis} ganadorS={this.ganadorS.bind(this)} />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Cuartos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaCD cuartos={this.state.cuartos} ganadorC={this.ganadorC.bind(this)} />
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th className="text-center">Octavos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.pintar_equipos2()}
                                </tbody>
                            </Table>
                        </div>
                    </div>


                </div>
                <div className="btn-group btn-group-justified">
                    <Button color="primary" onClick={() => { { this.reiniciar(event) } }}>Reiniciar </Button>
                    {guardar}

                </div>


            </div>

        );
    }
}

export default Listar;

