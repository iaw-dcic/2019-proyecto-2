import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Pronostico extends Component {

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

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        var cuartosAux = [];
        var semifinalAux = [];
        var finalAux = [];
        var ganadorAux = "";
        for (var i = 0; i < 8; i++) {
            if(localStorage.hasOwnProperty('cuartos'+i))
                 cuartosAux[i] = localStorage.getItem('cuartos'+i);
            else
                cuartosAux[i] = "";
        }
        for (var j = 0; j < 4; j++) {
            if(localStorage.hasOwnProperty('semifinal'+j))
                 semifinalAux[j] = localStorage.getItem('semifinal'+j);
            else
                 semifinalAux[j] = "";
        }
        for (var i = 0; i < 2; i++) {
            if(localStorage.hasOwnProperty('final'+i))
                 finalAux[i] = localStorage.getItem('final'+i);
            else
                finalAux[i] = "";
        }

        if(localStorage.hasOwnProperty('ganador'))
            ganadorAux = localStorage.getItem('ganador');

        axios.get('/api/teams').then(response => {
            this.setState({
                teams: response.data,
                cuartos: cuartosAux,
                semifinal: semifinalAux,
                final: finalAux,
                ganador: ganadorAux
            })
        })
    }

    handleChangeOctavos(team, i) {
        var aux = this.state.cuartos;
        var full = true;
        for(var j=0; j<8 && full; j++){
            full = aux[j]!="";
        }
        if (!full){
            i = Math.trunc(i/2);
            aux[i] = team;

            this.setState({
                cuartos: aux               
            });
            localStorage.setItem('cuartos'+i,team);
        }
    }

    handleChangeCuartos(team, i) {
        var aux = this.state.semifinal;
        var full = true;
        for(var j=0; j<4 && full; j++){
            full = aux[j] != ""; 
        }
        if(!full){       
            i = Math.trunc(i/2);
            aux[i] = team;

            this.setState({
                semifinal: aux
                
            });
            localStorage.setItem('semifinal'+i,team);
        }
    }

    handleChangeSemifinal(team, i) {
        var aux = this.state.final;
        var full = true;
        for(var j=0; j<2 && full; j++){
            full = aux[j]!="";
        }
        if (!full){
            i = Math.trunc(i/2);
            aux[i] = team;

            this.setState({
                final: aux
                
            });
            localStorage.setItem('final'+i,team);
        }
    }

    handleChangeFinal(team) {
        var final = this.state.final;
        if(final[0]!="" && final[1]!=""){
            var aux = team;
            this.setState({
                ganador: aux               
            });
            localStorage.setItem('ganador',team);
        }
    }

    handleChangeBorrarCuartos() {
        var aux = this.state.cuartos;
        for(var j=0; j<8; j++){
            aux[j]="";
            localStorage.setItem('cuartos'+j,"");
        }
        this.setState({
            cuartos: aux
        });
        this.handleChangeBorrarSemifinal();
    }

    handleChangeBorrarSemifinal() {
        var aux = this.state.semifinal;
        for(var j=0; j<4; j++){
            aux[j]="";
            localStorage.setItem('semifinal'+j,"");
        }
        this.setState({
            semifinal: aux
        });
        this.handleChangeBorrarFinal();
    }

    handleChangeBorrarFinal() {
        var aux = this.state.final;
        for(var j=0; j<2; j++){
            aux[j]="";
            localStorage.setItem('final'+j,"");
            localStorage.setItem('ganador',"");
        }
        this.setState({
            final: aux,
            ganador: ""
        });
    }

    handleChangeGuardar(event) {
        try {
            axios.post('/api/playoffs', {
                teams: this.state.teams, 
                cuartos: this.state.cuartos,
                semifinal: this.state.semifinal,
                final: this.state.final,
                ganador: this.state.ganador
            }).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        catch(event){
            console.log('Axios request failed',event);
        }
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
                <div className="card-header mt-3">
                    <div className="card">
                        <h1>🏆 Copa Libertadores 🏆</h1>
                    </div>
                </div>
                
                    <div className="fase-deshacer">
                        <h2 className="mt-3"><b> Octavos de final</b></h2>
                    </div>
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

                    <div className="row">
                        <div className="column"><h2 className="mt-3"><b> Cuartos de final</b></h2></div>
                        <div className="column"><button className="btn btn-deshacer" onClick={(event) => this.handleChangeBorrarCuartos()}>Deshacer ↶</button></div>
                    </div>                   
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

                    <div className="row">
                        <div className="column"><h2 className="mt-3"><b> Semifinal</b></h2></div>
                        <div className="column"><button className="btn btn-deshacer" onClick={(event) => this.handleChangeBorrarSemifinal()}>Deshacer ↶</button></div>
                    </div>
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
                    <div className="row">
                        <div className="column"><h2 className="mt-3"><b> FINAL</b></h2></div> 
                        <div className="column"><button className="btn btn-deshacer" onClick={(event) => this.handleChangeBorrarFinal(this.state.final)}>Deshacer ↶</button></div> 
                    </div> 
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
                

                <div className="card mt-3">
                    <div className="card-header mt-1 card-header2">
                        <h1 className="mt-1">Campeón 🏆:<b> {this.state.ganador}</b></h1>
                    </div>
                    <div className="card-body center">
                         <button className="btn-playoff btn-playoff1 mt-2" onClick={(event) => this.handleChangeGuardar(event)}>Guardar pronóstico 💾</button>
                    </div>
                </div>
            </div>
        );
    }
}