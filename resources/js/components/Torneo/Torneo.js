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

    handleChangeOctavos(team, i) {
        var aux = this.state.cuartos;
        i = Math.trunc(i/2);
        aux[i] = team;

        this.setState({
            cuartos: aux
            
        });
    }

    handleChangeCuartos(team, i) {
        var aux = this.state.semifinal;
        i = Math.trunc(i/2);
        aux[i] = team;

        this.setState({
            semifinal: aux
            
        });
    }

    handleChangeSemifinal(team, i) {
        var aux = this.state.final;
        i = Math.trunc(i/2);
        aux[i] = team;

        this.setState({
            final: aux
            
        });
    }

    handleChangeFinal(team) {
        var aux = this.state.ganador;
        aux = team;

        this.setState({
            ganador: aux
            
        });
        console.log(this.state.ganador)
    }

    render() {
        var octavos = [];
        {
            this.state.teams.map((team) => (
                octavos.push(team.name)
            ))
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
                        <td onClick={(event) => this.handleChangeOctavos(octavos[0],0)}>{octavos[0]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[1],1)}>{octavos[1]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[2],2)}>{octavos[2]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[3],3)}>{octavos[3]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[4],4)}>{octavos[4]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[5],5)}>{octavos[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[6],6)}>{octavos[6]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[7],7)}>{octavos[7]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[8],8)}>{octavos[8]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[9],9)}>{octavos[9]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[10],10)}>{octavos[10]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[11],11)}>{octavos[11]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[12],12)}>{octavos[12]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[13],13)}>{octavos[13]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[14],14)}>{octavos[14]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeOctavos(octavos[15],15)}>{octavos[15]}</td>
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
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[0],0)}>{this.state.cuartos[0]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[1],1)}>{this.state.cuartos[1]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[2],2)}>{this.state.cuartos[2]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[3],3)}>{this.state.cuartos[3]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[4],4)}>{this.state.cuartos[4]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[5],5)}>{this.state.cuartos[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[6],6)}>{this.state.cuartos[6]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[7],7)}>{this.state.cuartos[7]}</td>
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
                        <td onClick={(event) => this.handleChangeSemifinal(this.state.semifinal[0],0)}>{this.state.semifinal[0]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeSemifinal(this.state.semifinal[1],1)}>{this.state.semifinal[1]}</td>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeSemifinal(this.state.semifinal[2],2)}>{this.state.semifinal[2]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeSemifinal(this.state.semifinal[3],3)}>{this.state.semifinal[3]}</td>
                    </tr>
                </table>

                <h2><b> FINAL</b></h2>
                <table id='tablefinal'>
                    <tr id='titleTableTorneo'>
                        <th>Local</th>
                        <th>vs.</th>
                        <th>Visitante </th>
                    </tr>
                    <tr>
                        <td onClick={(event) => this.handleChangeFinal(this.state.final[0])}>{this.state.final[0]}</td>
                        <td>-</td>
                        <td onClick={(event) => this.handleChangeFinal(this.state.final[1])}>{this.state.final[1]}</td>
                    </tr>
                </table>
            </div>
        );
    }
}