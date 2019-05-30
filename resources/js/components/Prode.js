import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Prode extends Component {
        constructor(){
            super();
            this.state={
                octavos : ["River Plate", "Cruzeiro", "San Lorenzo", "Cerro Porteño", "Liga de Quito", "Olimpia", "Paranaense", "Boca Juniors", "Godoy Cruz", "Palmeiras", "Gremio", "Libertad", "Emelec", "Flamengo", "Nacional", "Internacional"],
                cuartos : ["", "", "", "", "", "", "", ""],
                semis : ["", "", "", ""],
                final : ["", ""],
                campeon : [""]
            };
            this.handleOctavos = this.handleOctavos.bind(this);
            this.handleCuartos = this.handleCuartos.bind(this);
            this.handleSemis = this.handleSemis.bind(this);
            this.handleFinal = this.handleFinal.bind(this);
        }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="octavos">OCTAVOS</label>
                        {this.octavos()}
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="octavos">CUARTOS</label>
                        {this.cuartos()}
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="octavos">SEMIS</label>
                        {this.semis()}
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="octavos">FINAL</label>
                        {this.final()}
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="octavos">CAMPEÓN</label>
                        {this.campeon()}
                    </div>
                </div>
            </div>
        );
    }

    octavos(){
        let i=0;
        let lista=[];
        while(i<16){
            lista.push(
                <ul className="list-group list-group-flush">
                        &nbsp;
                        <span className="border">
                            <button type="button" className="btn btn-light" id={i} onClick={this.handleOctavos}>{this.state.octavos[i]}</button>
                        </span>
                        <span className="border">
                            <button type="button" className="btn btn-light" id={i+1} onClick={this.handleOctavos}>{this.state.octavos[i+1]}</button>
                        </span>
                </ul>
            );
            i=i+2;
        }
        return lista;
    }

    cuartos(){
        let i=0;
        let lista=[];
        while(i<8){
            lista.push(
                <ul className="list-group list-group-flush">
                        &nbsp;
                        <span className="border">
                            <button type="button" className="btn btn-light" id={i} onClick={this.handleCuartos}>{this.state.cuartos[i]}</button>
                        </span>
                        <span className="border">
                            <button type="button" className="btn btn-light" id={i+1} onClick={this.handleCuartos}>{this.state.cuartos[i+1]}</button>
                        </span>
                </ul>
            );
            i=i+2;
        }
        return lista;
    }

    semis(){
        let i=0;
        let lista=[];
        while(i<4){
            lista.push(
                <ul className="list-group list-group-flush">
                        &nbsp;
                        <span className="border">
                            <button type="button" className="btn btn-light" id={i} onClick={this.handleSemis}>{this.state.semis[i]}</button>
                        </span>
                        <span className="border">
                            <button type="button" className="btn btn-light" id={i+1} onClick={this.handleSemis}>{this.state.semis[i+1]}</button>
                        </span>
                </ul>
            );
            i=i+2;
        }
        return lista;
    }

    final(){
        let lista=[];
            lista.push(
                <ul className="list-group list-group-flush">
                        &nbsp;
                        <span className="border">
                            <button type="button" className="btn btn-light" id="0" onClick={this.handleFinal}>{this.state.final[0]}</button>
                        </span>
                        <span className="border">
                            <button type="button" className="btn btn-light" id="1" onClick={this.handleFinal}>{this.state.final[1]}</button>
                        </span>
                </ul>
            );
        return lista;
    }

    campeon(){
        let lista=[];
            lista.push(
                <ul className="list-group list-group-flush">
                        &nbsp;
                        <span className="border">
                            <button type="button" className="btn btn-light" id="0">{this.state.campeon[0]}</button>
                        </span>
                </ul>
            );
        return lista;
    }

    handleOctavos(e){
        if(e.target.innerHTML != ""){
            let pos = Math.floor(e.target.id/2);
            let cuartosAux = this.state.cuartos;
            let equipo = cuartosAux[pos];
            if(equipo != "" && equipo != e.target.innerHTML)
                this.comprobarSemis(equipo, Math.floor(pos/2));
            cuartosAux[pos] = e.target.innerHTML;
            this.setState({
                cuartos : cuartosAux
            })
        }
    }

    handleCuartos(e){
        if(e.target.innerHTML != ""){
            let pos = Math.floor(e.target.id/2);
            let semisAux = this.state.semis;
            let equipo = semisAux[pos];
            if(equipo != "" && equipo != e.target.innerHTML)
                this.comprobarFinal(equipo, Math.floor(pos/2));
            semisAux[pos] = e.target.innerHTML;
            this.setState({
                semis : semisAux
            })
        }
    }

    handleSemis(e){
        if(e.target.innerHTML != ""){
            let pos = Math.floor(e.target.id/2);
            let finalAux = this.state.final;
            let equipo = finalAux[pos];
            if(equipo != "" && equipo != e.target.innerHTML)
                this.comprobarCampeon(equipo, Math.floor(pos/2));
            finalAux[pos] = e.target.innerHTML;
            this.setState({
                final : finalAux
            })
        }
    }

    handleFinal(e){
        if(e.target.innerHTML != ""){
            let campeonAux = [e.target.innerHTML];
            this.setState({
                campeon : campeonAux
            })
        }
    }

    comprobarSemis(name, pos){
        let semisAux = this.state.semis;
        if(semisAux[pos] == name){
            this.comprobarFinal(name, Math.floor(pos/2));
            semisAux[pos] = "";
            this.setState({
                semis : semisAux
            })
        }
    }

    comprobarFinal(name, pos){
        let finalAux = this.state.final;
        if(finalAux[pos] == name){
            this.comprobarCampeon(name);
            finalAux[pos] = "";
            this.setState({
                final : finalAux
            })
        }
    }

    comprobarCampeon(name){
        let campeonAux = this.state.campeon;
        if(campeonAux[0] == name){
            campeonAux[0] = "";
            this.setState({
                campeon : campeonAux
            })
        }
    }
    
}
