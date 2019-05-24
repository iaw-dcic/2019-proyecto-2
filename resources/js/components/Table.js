import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game'
import axios from 'axios';

export default class Table extends Component {
    constructor(){
        super();
        this.state = {
            octavos: [],
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""]
        }
        this.onClickOctavos = this.onClickOctavos.bind(this);
        this.onClickCuartos = this.onClickCuartos.bind(this);
        this.onClickSemis = this.onClickSemis.bind(this);
    }

    componentWillMount(){
        axios.get('/api/teams').then(response =>{
            this.setState({
                octavos: response.data
            });
        }).catch(errors =>{
            console.log(errors);
        })
    }

    render() {
        if (this.state.octavos[0] != undefined)
            return (
                <div className="container">
                    <div className="row">
                        {this.createTableOctavos()}
                        {this.createTableCuartos()}
                        {this.createTableSemis()}
                        {this.createTableFinal()}
                    </div>
                </div>
            );
        else 
            return <div></div>;
    }

    createTableOctavos(){
        let table = [];
        let i = 0;
        let children = [];

        while (i < 16) {
            children.push(<Game teamA = {this.state.octavos[i].name} teamB = {this.state.octavos[i+1].name} 
                        id1 = {i} id2 = {i+1}  onClick = {this.onClickOctavos}/>);
            i = i + 2;
        }

        table.push(<div id = "octavos" className="col-sm">{children}</div>);
        return table;
    }

    createTableCuartos(){
        let table = [];
        let i = 0;
        let children = [];
        while (i < 8) {
            children.push(<Game teamA = {this.state.cuartos[i]} 
                                teamB = {this.state.cuartos[i+1]}
                        id1 = {i} id2 = {i+1}  onClick = {this.onClickCuartos}/>);
            i = i + 2;
        }
        table.push(<div id = "cuartos" className="col-sm">{children}</div>);
        return table;
    }

    createTableSemis(){
        let table = [];
        let i = 0;
        let children = [];
        while (i < 4) {
            children.push(<Game teamA = {this.state.semis[i]} 
                                teamB = {this.state.semis[i+1]}
                        id1 = {i} id2 = {i+1}  onClick = {this.onClickSemis}/>);
            i = i + 2;
        }
        table.push(<div id = "semis" className="col-sm">{children}</div>);
        return table;
    }

    createTableFinal(){
        let table = [];
        let i = 0;
        let children = [];
        
        children.push(<Game teamA = {this.state.final[i]} teamB = {this.state.final[i+1]} 
            id1 = "0" id2 = "1"  onClick = {this.onClick}/>);

        table.push(<div id = "final" className="col-sm">{children}</div>);
        return table;
    }

    onClickOctavos(e){
        var parent = e.target.parentElement;
        var team = e.target.innerHTML;
        var index = Math.floor(e.target.id/2);
        var teams = this.state.cuartos;
        teams[index] = team;

        var nodes = parent.getElementsByTagName('BUTTON');

        for(var i = 0; i < nodes.length; i++){
            nodes[i].disabled = true;
        }

        e.target.style.color = "#00FF00";

        this.setState({
            cuartos: teams
        })
    }

    onClickCuartos(e){
        var team = e.target.innerHTML;
        if (team != ""){
            var parent = e.target.parentElement;
            var index = Math.floor(e.target.id/2);
            var teams = this.state.semis;
            teams[index] = team;

            var nodes = parent.getElementsByTagName('BUTTON');

            for(var i = 0; i < nodes.length; i++){
                nodes[i].disabled = true;
            }

            e.target.style.color = "#00FF00";

            this.setState({
                semis: teams
            })
        }
    }

    onClickSemis(e){
        var parent = e.target.parentElement;
        var team = e.target.innerHTML;
        var index = Math.floor(e.target.id/2);
        var teams = this.state.final;
        teams[index] = team;

        var nodes = parent.getElementsByTagName('BUTTON');

        for(var i = 0; i < nodes.length; i++){
            nodes[i].disabled = true;
        }

        e.target.style.color = "#00FF00";

        this.setState({
            final: teams
        })
    }
}
