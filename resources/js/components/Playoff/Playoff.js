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

    handlePlayoffSelected(event) {
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

        var headTable = [];
        headTable.push(<tr id='titleTableTorneo'>
        <th>Local</th>
        <th>vs.</th>
        <th>Visitante </th>
        </tr>);

        var arrOctavos = [];
        for (let i = 1; i <= 16; i=i+2) {
            arrOctavos.push(
                <tr>
                    <td>{this.state.octavos['teamname'+i]}</td>
                    <td>-</td>
                    <td>{this.state.octavos['teamname'+(i+1)]}</td>
                </tr>
            );
        }

        var arrCuartos = [];
        for (let i = 1; i <= 8; i=i+2) {
            arrCuartos.push(
                <tr>
                    <td>{this.state.cuartos['teamname'+i]}</td>
                    <td>-</td>
                    <td>{this.state.cuartos['teamname'+(i+1)]}</td>
                </tr>
            );
        }

        var arrSemifinal = [];
        for (let i = 1; i <= 4; i=i+2) {
            arrSemifinal.push(
                <tr>
                    <td>{this.state.semifinal['teamname'+i]}</td>
                    <td>-</td>
                    <td>{this.state.semifinal['teamname'+(i+1)]}</td>
                </tr>
            );
        }

        var arrFinal = [];
        arrFinal.push(
            <tr>
                <td>{this.state.final['teamname1']}</td>
                <td>-</td>
                <td>{this.state.final['teamname2']}</td>
            </tr>
        );
        return ( 
        <>
            <div className="card mt-3">
                <div className="card-header card-header2">
                        <h1 className="center">Mis pronósticos</h1>
                </div>
                <div className="card-body center">
                    <div className='row'> 
                        <div className="d-flex flex-row buttonsSelectPlayoff style-8"  >
                        { this.state.playoffs.map((name,id) => 
                            ( <button className="btn-playoff btn-playoff1 btn-playoff2 mr-2" 
                            key = {id} onClick={(event) => this.handlePlayoffSelected(id)}> 
                            Playoff {id+1}</button> ))
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-deshacer"><button className="btn-deshacer btn-eliminar" onClick={(event) => this.handleDelete()}>Eliminar playoff</button></div>
            <div className="container mt-3">
                 <div className="card-header mt-3">
                    <div className="card">
                        <h1>🏆 Copa Libertadores 🏆</h1>
                    </div>
                </div>

                <div className="card-header mt-3 card-header2">
                    <h1>Campeón :<b> {this.state.ganador}</b></h1>
                </div>

                <h2 className="mt-3"><b> Final</b></h2>
                <table id='tableFinal'>
                    {headTable.map((head) => (head))}
                    {arrFinal.map((fila) => (fila))}   
                </table>

                <h2 className="mt-3"><b> Semifinal</b></h2>
                <table id='tableSemifinal'>
                    {headTable.map((head) => (head))}
                    {arrSemifinal.map((fila) => (fila))}    
                </table>

                <h2 className="mt-3"><b> Cuartos de final</b></h2>
                <table id='tableCuartos'>
                    {headTable.map((head) => (head))}
                    {arrCuartos.map((fila) => (fila))}    
                </table>

                <h2 className="mt-3"><b> Octavos de final</b></h2>
                <table id='tableOctavos'>
                    {headTable.map((head) => (head))}
                    {arrOctavos.map((fila) => (fila))}    
                </table>
            </div>
        </>
        );
    }
}