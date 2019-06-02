import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Playoff extends Component {

    constructor() {
        super()
        this.state = {
            playoffs: [],
            selected: '',
            selectedId: '',
            octavos: ['','','','','','','','','','','','','','','',''],
            cuartos: [],
            semifinal: [],
            final: [],
            ganador: ""
        }
    }

    componentDidMount() {
        /*window.axios = require('axios');
        
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content; */
        
        axios.get('/api/playoffs').then(response => {
            this.setState({
                playoffs: response.data,
            })
        })
        console.log(this.state.playoffs);
    }

    handleChange(event) {
        var finalAux = [];
        var semifinalAux = [];
        var cuartosAux = [];
        var octavosAux = [];
        var ganadorAux = '';
        var selectedIdAux = '';
        var selectedAux = '';

        /*if (event.target.value != '') {
            var playoff = this.state.playoffs[event.target.value];
            var octavos = playoff['octavos'];

            var i = 0;
            for (i = 0; i < 16; i++) {
                octavosAux[i] = partidos[k];
                k++;
            }

            /*var i = 0;
            ganadorAux = partidos[1];
            selectedIdAux = playoff['id'];
            selectedAux = event.target.value;
            var k = 2;

            for (i = 0; i < 2; i++) {
                finalAux[i] = partidos[k];
                k++;
            }
            for (i = 0; i < 4; i++) {
                semisAux[i] = partidos[k];
                k++;
            }
            for (i = 0; i < 8; i++) {
                cuartosAux[i] = partidos[k];
                k++;
            }
            
        }

        this.setState({
            selectedId: selectedIdAux,
            selected: selectedAux,
            octavos: octavosAux,
            cuartos: cuartosAux,
            semis: semisAux,
            final: finalAux,
            winner: winnerAux
        })*/
    }

    /*handleDeleteClick() {
        var $toDelete = this.state.selectedId;
        try {
            axios.delete('api/playoffs/delete/' + $toDelete)
                .then(res => {
                    console.log(res);
                })
            this.limpiar();
        }
        catch (e) {
            console.log('Axios request failed', e);
        }
    }

    limpiar() {
        axios.get('/api/playoffs').then(response => {
            this.setState({
                playoffs: response.data,
                selected: '',
                selectedId: '',
                octavos: [],
                cuartos: [],
                semis: [],
                final: [],
                winner: '',
            })
        });
    }*/

    render() {
        return ( 
        <>
            <h1>Mis pronósticos</h1>
            <div className="container">
                <div className="card-header">
                    <h1>Copa Libertadores</h1>
                </div>
                <h2><b> Octavos de final</b></h2>
                <table id='tableOctavos'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[0]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[1]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[2]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[3]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[4]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[5]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[6]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[7]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[8]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[9]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[10]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[11]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[12]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[13]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.octavos[14]}</td>
                        <td>-</td>
                        <td>{this.state.octavos[15]}</td>
                    </tr>
                    
                    
                </table>
            </div>
        </>
        );
    }
}