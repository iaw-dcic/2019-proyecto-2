import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Partido from './Partido';
import axios from 'axios';
import Campeon from './Campeon';

export default class Fixture extends Component {
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
            name: 'Mi Fixture',
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
            window.axios = require('axios');
            let api_token = document.querySelector('meta[name="api-token"]');
            let token = document.head.querySelector('meta[name="csrf-token"]');
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
    
            var self = this;
    

            axios.get('/api/teams')
             .then(function (response) {
                console.log(response.data)
                self.setState({prodes: response.data})
             })
            .catch(function (error) {
               console.log(error);});
            
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
        
    render () {
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
        
        <div className="container center" >
                <div className="row">    
                    <div className="col-sm">    
                       <div className="h1 font-weight-bold text-primary">
                        {this.state.name}
                       </div>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary mb-2 mr-2" onClick={this.clear}>Refresh Fixture</button>
                    </div>
                </div>
                <div>
                            
                                {this.createTableOctavos1()}
                            
                                {this.createTableCuartos1()}
                                
                                {this.createTableSemis1()}

                                {this.createTableFinal()}

                                {this.createTableSemis2()}
                                
                                {this.createTableCuartos2()}
                            
                                {this.createTableOctavos2()}
                </div>
                        
                    
                <div className="mx-auto m-3">
                    <button className="btn btn-primary mb-2 mr-2" onClick={this.save}>Guardar Fixture</button>
                    <button className="btn btn-primary mb-2 mr-2" onClick={this.new}>Nuevo Fixture</button>
                    
                </div>
                <div className="row">
                    <div className="col-sm myDiv Content border border-primary">
                        <div className="list-group">
                            <a className="list-group-item list-group-item-action active">Mis Fixture</a>
                            {this.state.prodes.map((prode, i) => 
                                <button type="button"
                                id = {prode.id} 
                                className="list-group-item list-group-item-action" 
                                onClick={this.search}>
                                    {prode.created_at}
                                </button>)
                            }
                        </div>
                    </div>
                    
                </div>
            </div>


        
       )
    
    }
    
    createTableOctavos1(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled = "";

        children.push(<div className="h3">Octavos</div>)

        while (i < 8) {
            if (this.state.cuartos[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            let child = <Partido equipo1 = {this.state.octavos[i]} equipo2 = {this.state.octavos[i+1]} 
                equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickOctavos} 
                        disable = {disabled}/>
            children.push(child);
            i = i + 2;
        }

        table.push(<td id = "octavos1" className="col-sm border border-dark">{children}</td>);
        return table;
    }

    createTableOctavos2(){
        let table = [];
        let i = 8;
        let children = [];
        let disabled = "";

        children.push(<div className="h3">Octavos</div>)

        while (i < 16) {
            if (this.state.cuartos[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            let child = <Partido equipo1 = {this.state.octavos[i]} equipo2 = {this.state.octavos[i+1]} 
                equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickOctavos} 
                        disable = {disabled}/>
            children.push(child);
            i = i + 2;
        }

        table.push(<td id = "octavos" className="col-sm border border-dark">{children}</td>);
        return table;
    }

    createTableCuartos1(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="h3">Cuartos</h1>)

        while (i < 4) {

            if (this.state.cuartos[i] == "" || this.state.cuartos[i+1] == "" ||
                this.state.semis[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            children.push(<Partido equipo1 = {this.state.cuartos[i]} equipo2 = {this.state.cuartos[i+1]} 
                equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickCuartos} 
                        disable = {disabled}/>);

            i = i + 2;

        }
        table.push(<td id = "cuartos" className="col-sm border border-dark">{children}</td>);
        return table;
    }

    createTableCuartos2(){
        let table = [];
        let i = 4;
        let children = [];
        let disabled;

        children.push(<h1 className="h3">Cuartos</h1>)

        while (i < 8) {

            if (this.state.cuartos[i] == "" || this.state.cuartos[i+1] == "" ||
                this.state.semis[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            children.push(<Partido equipo1 = {this.state.cuartos[i]} equipo2 = {this.state.cuartos[i+1]} 
                equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickCuartos} 
                        disable = {disabled}/>);

            i = i + 2;

        }
        table.push(<td id = "cuartos" className="col-sm border border-dark">{children}</td>);
        return table;
    }

    createTableSemis1(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="h2">SemiFinal</h1>)

        while (i < 2) {
            if (this.state.semis[i] == "" || this.state.semis[i+1] == "" ||
                this.state.final[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            children.push(<Partido equipo1 = {this.state.semis[i]} equipo2 = {this.state.semis[i+1]} 
                equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickSemis} 
                        disable = {disabled}/>);
            i = i + 2;
        }
        table.push(<td id = "semis" className="col-sm border border-dark">{children}</td>);
        return table;
    }

    createTableSemis2(){
        let table = [];
        let i = 2;
        let children = [];
        let disabled;

        children.push(<h1 className="h2">SemiFinal</h1>)

        while (i < 4) {
            if (this.state.semis[i] == "" || this.state.semis[i+1] == "" ||
                this.state.final[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            children.push(<Partido equipo1 = {this.state.semis[i]} equipo2 = {this.state.semis[i+1]} 
                equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickSemis} 
                        disable = {disabled}/>);
            i = i + 2;
        }
        table.push(<td id = "semis" className="col-sm border border-dark">{children}</td>);
        return table;
    }

    createTableFinal(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<div><h1 className="h1">Final</h1></div>)

        if (this.state.final[i] == "" || this.state.final[i+1] == "")
            disabled = "disabled";
        else disabled = "";

        if (this.state.champ != "empty")
                disabled = "disabled";
        
        children.push(<Partido equipo1 = {this.state.final[i]} equipo2 = {this.state.final[i+1]} 
            equipo1id = {i} equipo2id = {i+1}   onSeleccionEquipo = {this.onClickFinal} 
                    disable = {disabled}/>);

        table.push(<td id = "final" className="col-sm border border-dark">{children} <br></br><Campeon nombre = {this.state.champ}/></td>);

        return table;
    }

    onClickOctavos(e){
        var team = e.target.innerHTML;
        {console.log("octavos"+team)
         console.log("E"+e);
        }
        var index = Math.floor(e.target.id/2);
        {console.log("index"+index)
         
        }
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

