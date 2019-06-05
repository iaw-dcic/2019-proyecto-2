import React, { Component } from 'react';
import Game from './Game'
import axios from 'axios';

export default class Table extends Component {
    constructor(){
        super();
        this.state = {
            octavos: [],
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            prodes: [],
            champ: 'empty',
            id: 0,
            name: 'Nuevo prode',
            mount: 0
        }
        this.onClickOctavos = this.onClickOctavos.bind(this);
        this.onClickCuartos = this.onClickCuartos.bind(this);
        this.onClickSemis = this.onClickSemis.bind(this);
        this.onClickFinal = this.onClickFinal.bind(this);
        this.save = this.save.bind(this);
        this.search = this.search.bind(this);
        this.new = this.new.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount(){

        var self = this;

        axios.get('/api/teams')
         .then(function (response) {
            self.setState({prodes: response.data})
         })
        .catch(function (error) {
           console.log(error);
        });

        if(localStorage.length == 0){
            axios.get('/api/octavos')
             .then(function (response) {
                self.setState({octavos: response.data})
             })
            .catch(function (error) {
               console.log(error);
            });
            self.setState({mount: 1});
        } else {
            self.setState({
                octavos: localStorage.getItem('octavos').split(','),
                cuartos: localStorage.getItem('cuartos').split(','),
                semis: localStorage.getItem('semis').split(','),
                final: localStorage.getItem('final').split(','),
                champ: localStorage.getItem('champ'),
                mount: 1
            });
        }
    }

    render() {
        if (this.state.mount != 0){
            if (this.state.id != 0){
                localStorage.clear();
            } else {
                localStorage.setItem('octavos', this.state.octavos);
                localStorage.setItem('cuartos', this.state.cuartos);
                localStorage.setItem('semis', this.state.semis);
                localStorage.setItem('final', this.state.final);
                localStorage.setItem('champ', this.state.champ);
            }
        }
        return (
            <div className="container">
                <div className="row">
                    {this.createTableOctavos()}
                    {this.createTableCuartos()}
                    {this.createTableSemis()}
                    {this.createTableFinal()}
                    {this.createChampion()}
                </div>
                <div className="row">
                    <div className="col-sm justify-content-center">
                        <button className="btn btn-dark mb-2 mr-2" onClick={this.save}>Guardar</button>
                        <button className="btn btn-dark mb-2 mr-2" onClick={this.new}>Nuevo prode</button>
                        <button className="btn btn-dark mb-2 mr-2" onClick={this.clear}>Limpiar</button>
                    </div>
                </div>
            </div>
        );
    }

    createTableOctavos(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled = "";

        children.push(<h1 className="myTitle">Octavos</h1>)

        while (i < 16) {
            if (this.state.cuartos[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            let child = <Game teamA = {this.state.octavos[i]} teamB = {this.state.octavos[i+1]} 
                        id1 = {i} id2 = {i+1}  onClick = {this.onClickOctavos} 
                        create = {this.create} disable = {disabled}/>
            children.push(child);
            i = i + 2;
        }

        table.push(<div id = "octavos" className="col-sm">{children}</div>);
        return table;
    }

    createTableCuartos(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="myTitle cuartos">Cuartos</h1>)

        while (i < 8) {

            if (this.state.cuartos[i] == "" || this.state.cuartos[i+1] == "" ||
                this.state.semis[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            children.push(<Game teamA = {this.state.cuartos[i]} 
                                teamB = {this.state.cuartos[i+1]}
                        id1 = {i} id2 = {i+1}  onClick = {this.onClickCuartos} disable = {disabled}/>);

            i = i + 2;

        }
        table.push(<div id = "cuartos" className="col-sm">{children}</div>);
        return table;
    }

    createTableSemis(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="myTitle semis">Semis</h1>)

        while (i < 4) {
            if (this.state.semis[i] == "" || this.state.semis[i+1] == "" ||
                this.state.final[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            children.push(<Game teamA = {this.state.semis[i]} 
                                teamB = {this.state.semis[i+1]}
                        id1 = {i} id2 = {i+1}  onClick = {this.onClickSemis} disable = {disabled}/>);
            i = i + 2;
        }
        table.push(<div id = "semis" className="col-sm">{children}</div>);
        return table;
    }

    createTableFinal(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="myTitle final">Final</h1>)

        if (this.state.final[i] == "" || this.state.final[i+1] == "")
            disabled = "disabled";
        else disabled = "";

        if (this.state.champ != "empty")
                disabled = "disabled";
        
        children.push(<Game teamA = {this.state.final[i]} teamB = {this.state.final[i+1]} 
            id1 = "0" id2 = "1"  onClick = {this.onClickFinal} disable = {disabled}/>);

        table.push(<div id = "final" className="col-sm">{children}</div>);
        return table;
    }

    createChampion(){
        if (this.state.champ != "empty")
            return <div className="myDiv champDiv col-sm">
                    <img src={'images/copasudamericana.png'}/>
                    Campeón: {this.state.champ}
                </div>
        else return <div className="myDiv champDiv col-sm">
                Campeón: sin seleccionar
            </div>
    }

    onClickOctavos(e){
        var team = e.target.innerHTML;
        var index = Math.floor(e.target.id/2);
        var teams = this.state.cuartos;
        teams[index] = team;

        this.setState({
            cuartos: teams
        })
    }

    onClickCuartos(e){
        var team = e.target.innerHTML;
        if (team != ""){
            var index = Math.floor(e.target.id/2);
            var teams = this.state.semis;
            teams[index] = team;

            this.setState({
                semis: teams
            })
        }
    }

    onClickSemis(e){
        var team = e.target.innerHTML;
        var index = Math.floor(e.target.id/2);
        var teams = this.state.final;
        teams[index] = team;

        this.setState({
            final: teams
        })
    }

    onClickFinal(e){
        var team = e.target.innerHTML;

        this.setState({
            champ: team
        })
    }

    create(e){
        var hijos = e.target.getElementsByTagName('BUTTON');
        hijos[0].disabled = false;
        hijos[1].disabled = false;
    }

    save(){
        var self = this;
        if (this.state.id == 0){

            axios.post('/api/teams', {
                data: this.state
            }).then(function (response) {
                self.setState({
                    prodes: response.data,
                    id: response.data[response.data.length-1]['id'],
                    name: response.data[response.data.length-1]['created_at']
                });
            }).catch(function (error) {
              console.log(error);
            });

        } else {
            axios.put('/api/teams/'+this.state.id, {
                data: this.state
            }).then(function (response) {
            }).catch(function (error) {
              console.log(error);
            });

        }
    }

    search(e){
        var id = e.target.id;
        var self = this;
        axios.get('/api/teams/'+id)
         .then(function (response) {
            var octavos = response.data[0]['octavos'].split(',');
            var cuartos = response.data[0]['cuartos'].split(',');
            var semis = response.data[0]['semis'].split(',');
            var final = response.data[0]['final'].split(',');
            var champ = response.data[0]['champ'];
            var name = response.data[0]['created_at'];

            self.setState({
                octavos: octavos,
                cuartos: cuartos,
                semis: semis,
                final: final,
                champ: champ,
                id: id,
                name: name
            });
         })
        .catch(function (error) {
           console.log(error);
        });
    }

    new(){
        this.setState({
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            champ: 'empty',
            id: 0,
            name: "Nuevo prode"
        });
    }

    clear(){
        this.setState({
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            champ: 'empty',
        });
    }
}