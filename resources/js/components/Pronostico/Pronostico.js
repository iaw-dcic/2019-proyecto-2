import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Main from '../Main';

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

        var headTable = [];
        headTable.push(<tr id='titleTableTorneo'>
        <th>Local</th>
        <th>vs.</th>
        <th>Visitante </th>
        </tr>);

        var arrOctavos = [];
        for (let i = 0; i < 16; i=i+2) {
            arrOctavos.push(
                <tr>
                    <td onClick={(event) => this.handleChangeOctavos(octavos[i],i)}>{octavos[i]}</td>
                    <td>-</td>
                    <td onClick={(event) => this.handleChangeOctavos(octavos[i+1],i+1)}>{octavos[i+1]}</td>
                </tr>
            );
        }

        var arrCuartos = [];
        for (let i = 0; i < 8; i=i+2) {
            arrCuartos.push(
                <tr>
                    <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[i],i)}>{this.state.cuartos[i]}</td>
                    <td>-</td>
                    <td onClick={(event) => this.handleChangeCuartos(this.state.cuartos[i+1],i+1)}>{this.state.cuartos[i+1]}</td>
                </tr>
            );
        }

        var arrSemifinal = [];
        for (let i = 0; i < 4; i=i+2) {
            arrSemifinal.push(
                <tr>
                    <td onClick={(event) => this.handleChangeSemifinal(this.state.semifinal[i],i)}>{this.state.semifinal[i]}</td>
                    <td>-</td>
                    <td onClick={(event) => this.handleChangeSemifinal(this.state.semifinal[i+1],i+1)}>{this.state.semifinal[i+1]}</td>
                </tr>
            );
        }

        var arrFinal = [];
        arrFinal.push(
            <tr>
                <td onClick={(event) => this.handleChangeFinal(this.state.final[0],0)}>{this.state.final[0]}</td>
                <td>-</td>
                <td onClick={(event) => this.handleChangeFinal(this.state.final[1],1)}>{this.state.final[1]}</td>
            </tr>
        );

        return (
            <> <Main/>
            <div className="container">
             <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card-header mt-3">
                        <div className="card">
                            <h1>🏆 Copa Libertadores 🏆</h1>
                        </div>
                    </div>
                    
                        <div className="fase-deshacer">
                            <h2 className="mt-3"><b> Octavos de final</b></h2>
                        </div>
                            <table id='tableOctavos'>
                                {headTable.map((head) => (head))}  
                                {arrOctavos.map((fila) => (fila))}       
                            </table>

                        <div className="row">
                            <div className="column"><h2 className="mt-3"><b> Cuartos de final</b></h2></div>
                            <div className="column"><button className="btn btn-deshacer" onClick={(event) => this.handleChangeBorrarCuartos()}>Deshacer ↶</button></div>
                        </div>                   
                        <table id='tableCuartos'>                        
                                {headTable.map((head) => (head))}  
                                {arrCuartos.map((fila) => (fila))} 
                        </table>

                        <div className="row">
                            <div className="column"><h2 className="mt-3"><b> Semifinal</b></h2></div>
                            <div className="column"><button className="btn btn-deshacer" onClick={(event) => this.handleChangeBorrarSemifinal()}>Deshacer ↶</button></div>
                        </div>
                        <table id='tableSemifinal'>
                                {headTable.map((head) => (head))}  
                                {arrSemifinal.map((fila) => (fila))} 
                        </table>
                        
                        <div className="row">
                            <div className="column"><h2 className="mt-3"><b> FINAL</b></h2></div> 
                            <div className="column"><button className="btn btn-deshacer" onClick={(event) => this.handleChangeBorrarFinal()}>Deshacer ↶</button></div> 
                        </div> 
                        <table id='tablefinal'>
                                {headTable.map((head) => (head))}  
                                {arrFinal.map((fila) => (fila))} 
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
             </div>
            </div>
            </>
        );
    }
}