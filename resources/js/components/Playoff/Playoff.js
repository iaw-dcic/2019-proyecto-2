import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Playoff extends Component {

    constructor() {
        super()
        this.state = {
            id_playoff: "",
            playoffs: [],
            octavos: ['','','','','','','','','','','','','','','',''],
            cuartos: [],
            semifinal: [],
            final: [],
            ganador: "",
        }
    }

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
        
        axios.get('/api/playoffs').then(response => {
            this.setState({
                playoffs: response.data,
            })
        })
    }

    handleChange(event) {
        var id_playoffAux = '';
        var finalAux = [];
        var semifinalAux = [];
        var cuartosAux = [];
        var octavosAux = [];
        var ganadorAux = '';

        if (event==0 || event != '') {
            var playoff = this.state.playoffs[event];
            id_playoffAux = playoff['id'];
            octavosAux = playoff[0]; 
            cuartosAux = playoff[1];
            semifinalAux = playoff[2];
            finalAux = playoff[3];
            ganadorAux = playoff['ganador'];  
        

            this.setState({
                id_playoff: id_playoffAux,
                octavos: octavosAux,
                cuartos: cuartosAux,
                semifinal: semifinalAux,
                final: finalAux,      
                ganador: ganadorAux, 
            })
            localStorage.setItem('playoffSelected',event);
        }
    }

    handleDelete() {
        var $id = this.state.id_playoff;
        if($id != '') {
            try {
                axios.delete('api/playoffs/delete/' + $id)
                    .then(res => {
                        console.log(res);
                        this.limpiar();
                    })
            }
            catch (event) {
                console.log('Axios request failed', event);
            }
        }
    }

    limpiar() {
        axios.get('/api/playoffs').then(response => {
            this.setState({
                playoffs: response.data,
                id_playoff: '',
                octavos: [],
                cuartos: [],
                semifinal: [],
                final: [],
                ganador: '',
            })
        });
    }

    render() {

        return ( 
        <>
            <h1 className="mt-3 mb-3">Mis pronósticos</h1>
            <div className='row'> 
                <div className="d-flex flex-row buttonsSelectPlayoff" >
                 { this.state.playoffs.map((name,id) => ( <button className="mr-2" key = {id} onClick={(event) => this.handleChange(id)}> Playoff {id+1}</button> ))}
                </div>
            </div>
            <div className="container mt-3">
                <div className="card-header">
                    <h1>Copa Libertadores</h1>                   
                    <button onClick={(event) => this.handleDelete()}>Eliminar playoff</button>                  
                </div>

                <h2 className="mt-3">Campeón:<b> {this.state.ganador}</b></h2>

                <h2 className="mt-3"><b> Final</b></h2>
                <table id='tableFinal'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>{this.state.final['teamname1']}</td>
                        <td>-</td>
                        <td>{this.state.final['teamname2']}</td>
                    </tr>
                </table>

                <h2 className="mt-3"><b> Semifinal</b></h2>
                <table id='tableSemifinal'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>{this.state.semifinal['teamname1']}</td>
                        <td>-</td>
                        <td>{this.state.semifinal['teamname2']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.semifinal['teamname3']}</td>
                        <td>-</td>
                        <td>{this.state.semifinal['teamname4']}</td>
                    </tr>
                </table>

                <h2 className="mt-3"><b> Cuartos de final</b></h2>
                <table id='tableCuartos'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>{this.state.cuartos['teamname1']}</td>
                        <td>-</td>
                        <td>{this.state.cuartos['teamname2']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.cuartos['teamname3']}</td>
                        <td>-</td>
                        <td>{this.state.cuartos['teamname4']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.cuartos['teamname5']}</td>
                        <td>-</td>
                        <td>{this.state.cuartos['teamname6']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.cuartos['teamname7']}</td>
                        <td>-</td>
                        <td>{this.state.cuartos['teamname8']}</td>
                    </tr>
                </table>

                <h2 className="mt-3"><b> Octavos de final</b></h2>
                <table id='tableOctavos'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname1']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname2']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname3']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname4']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname5']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname6']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname7']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname8']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname9']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname10']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname11']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname12']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname13']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname14']}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos['teamname15']}</td>
                        <td>-</td>
                        <td>{this.state.octavos['teamname16']}</td>
                    </tr>                   
                </table>
            </div>
        </>
        );
    }
}