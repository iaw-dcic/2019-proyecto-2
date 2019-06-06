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
            cuartos: [],
            semis: [],
            final: [],
            campeon: [],
        }
    }

    pintar_cuartos() {
        if(this.state.cuartos.length>0){
        console.log(this.state.cuartos[0]);
        }

    }

    ganadorO(e,id){
        e.preventDefault();

        switch (id) {
            case(1):

                this.setState({
                    cuartos: this.state.cuartos[0]=id,
                })
              break;

            case(2):
                this.setState({
                    cuartos: this.state.cuartos[0]=id
                })
              break;
            case( 3):
                this.setState({
                    cuartos: this.state.cuartos[1]=id
                })
              break;
            case( 4):
                this.setState({
                    cuartos: this.state.cuartos[1]=id
                })
              break;
            case( 5):
                this.setState({
                    cuartos: this.state.cuartos[2]=id
                })
              break;
            case( 6):
                this.setState({
                    cuartos: this.state.cuartos[2]=id
                })
              break;
            case( 7):
                this.setState({
                    cuartos: this.state.cuartos[3]=id
                })
              break;
            case( 8):
                this.setState({
                    cuartos: this.state.cuartos[3]=id
                })
              break;
            case( 9):
                this.setState({
                    cuartos: this.state.cuartos[4]=id
                })
              break;
            case( 10):
                this.setState({
                    cuartos: this.state.cuartos[4]=id
                })
              break;
            case( 11):
                this.setState({
                    cuartos: this.state.cuartos[5]=id
                })
              break;
            case( 12):
                this.setState({
                    cuartos: this.state.cuartos[5]=id
                })
              break;
            case( 13):
                this.setState({
                    cuartos: this.state.cuartos[6]=id
                })
              break;
            case( 14):
                this.setState({
                    cuartos: this.state.cuartos[6]=id
                })
              break;
            case( 15):
                this.setState({
                    cuartos: this.state.cuartos[7]=id
                })
              break;
            case( 16):
                this.setState({
                    cuartos: this.state.cuartos[7]=id
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
