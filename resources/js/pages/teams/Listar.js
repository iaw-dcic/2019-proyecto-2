import React, { Component } from 'react';
import Tarjeta from '../../components/card/Tarjeta';
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
            cuartos: ["","","","","","","",""],
            semis: ["","","",""],
            final: ["",""],
            campeon: "",
        }
    }


    ganadorO(e,id){
        e.preventDefault();
        var cuartos = this.state.cuartos;
        // this.setState({valores: valores});
        switch (id) {
            case(1):
                cuartos[0] =id;

                this.setState({
                    cuartos: cuartos,
                })
                break;

            case(2):
                cuartos[0]=id;
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 3):
                cuartos[1] = id;
                this.setState({
                    cuartos: cuartos,
                })
              break;
            case( 4):
                cuartos[1]=id;
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 5):
                cuartos[2]=id
                this.setState({
                    cuartos: cuartos,
                })
              break;
            case( 6):
                cuartos[2]=id
                this.setState({
                    // cuartos: this.state.cuartos[2]=id
                    cuartos: cuartos,

                })
              break;
            case( 7):
                cuartos[3]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 8):
                cuartos[3]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 9):
                cuartos[4]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 10):
                cuartos[4]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 11):
                cuartos[5]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 12):
                cuartos[5]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 13):
                cuartos[6]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 14):
                cuartos[6]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 15):
                cuartos[7]=id
                this.setState({
                    cuartos: cuartos
                })
              break;
            case( 16):
                cuartos[7]=id
                this.setState({
                    cuartos: cuartos
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
            <Tabla key={i} {...e} ganadorO={this.ganadorO.bind(this)}/>
        );


    }


    render() {
        const {cuartos} = this.state.cuartos;
        return (


            <div className="container Container">
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
                    <div className="col-sm">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th>Cuartos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaC cuartos={this.state.cuartos}/>
                                </tbody>
                            </Table>
                    </div>
                    <div className="col-sm">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th>Semifinal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaS/>
                                </tbody>
                            </Table>
                    </div>
                    <div className="col-sm">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th>Final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaF/>
                                </tbody>
                            </Table>
                    </div>
                    <div className="col-sm">
                            <Table responsive className="table-borderless">
                                <thead>
                                    <tr>
                                        <th>Campeon</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TablaG/>
                                </tbody>
                            </Table>
                    </div>
                </div>
            </div>





        );
    }
}

export default Listar;
