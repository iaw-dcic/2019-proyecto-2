import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Torneo extends Component {

    constructor() {
        super()
        this.state = {
            teams: [],
            cuartos: [],
            semifinal: [],
            final: [],
            ganador: ""
        }
    }

    componentDidMount() {
        var cuartosAux = [];
        var semifinalAux = [];
        var finalAux = [];
        for (var i = 0; i < 8; i++) {
            cuartosAux[i] = "";
        }
        for (var j = 0; j < 4; j++) {
            semifinalAux[j] = "";
        }
        for (var i = 0; i < 2; i++) {
            finalAux[i] = "";
        }
        axios.get('/api/teams').then(response => {
            this.setState({
                teams: response.data,
                cuartos: cuartosAux,
                semis: semifinalAux,
                final: finalAux
            })
        })
    }

    render() {
        var octavos = [];
        {
            this.state.teams.map((team) => (
                octavos.push(team.name)
            ))
            console.log(octavos);
        }
        return ( 
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
                        <td>{octavos[0]}</td>
                        <td>-</td>
                        <td>{octavos[1]}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                </table>

                <h2><b> Cuartos de final</b></h2>               
                <table id='tableCuartos'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                </table>

                <h2><b> Semifinal</b></h2>               
                <table id='tableSemifinal'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                </table>

                <h2><b> Final</b></h2>               
                <table id='tableFinal'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                </table>
            </div>
        );
    }
}