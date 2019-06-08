import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Manejo from './Manejo'
import axios from 'axios';

export default class Generador extends Component {
    constructor(){
        super();
        this.state = {
            octavos: [],
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            prodes: [],
            camp: 'empty',
            id: 0,
            name: 'Tu Prode',
            mount: 0
        }

       
    }

    componentDidMount(){
        

        var self = this;

        axios.get('/api/equipos')
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
                camp: localStorage.getItem('champ'),
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
            
                <div className="row">    
                    <div className="col-sm">    
                        <h1 className="text-secondary">{this.state.name}</h1>
                    <div className="col-sm">
                     
                    <br/>
                    <ul class="list-group list-group-horizontal">
                     
                    
                       {this.GenerarOctavos()}
                    
                    </ul>
                   
                    <br/>
                     <table class="table table-borderless">
                     
                      <tbody>
                       {this.GenerarCuartos()}
                    
                      </tbody>
                    </table>
                    
                    <br/>
                     <table class="table table-borderless">
                     
                      <tbody>
                      {this.GenerarSemis()}
                    
                      </tbody>
                    </table>
                    
                    <br/>
                     <table class="table table-borderless">
                     
                      <tbody>
                        {this.GenerarFinal()}
                    
                      </tbody>
                    </table>
                   
                    <br/>
                 </div>
                 
                  <button  className="btn btn-outline-danger mb-2 mr-2" >Guardar </button>
                  <button  className="btn btn-outline-danger mb-2 mr-2" >Borrar </button>
                  <button  className="btn btn-outline-danger mb-2 mr-2" >Nuevo</button>
                
                        
                  
                </div>
                
                    
                  
               
            </div>
        );
    }

    GenerarOctavos(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled = "";

        children.push(<h1 className="text-danger">Octavos :</h1>)

        while (i < 16) {
            if (this.state.cuartos[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

            let child = <Manejo teamA = {this.state.octavos[i]}  teamB = {this.state.octavos[i+1]} />
            children.push(child);
            i = i + 2;
        }
            
        table.push(<div id = "octavos" className="col-sm">{children}</div>);
           
        return table;
    }

    GenerarCuartos(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="text-danger" >Cuartos :</h1>)

        while (i < 8) {

            if (this.state.cuartos[i] == "" || this.state.cuartos[i+1] == "" ||
                this.state.semis[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";
            let child=<Manejo teamA = {this.state.cuartos[i]} 
                                teamB = {this.state.cuartos[i+1]}/>
            children.push(child);

            i = i + 2;

        }
        table.push(<div id = "cuartos" className="col-sm">{children}</div>);
        return table;
    }

    GenerarSemis(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="text-danger" >Semifinales :</h1>)

        while (i < 4) {
            if (this.state.semis[i] == "" || this.state.semis[i+1] == "" ||
                this.state.final[Math.floor(i/2)] != "")
                disabled = "disabled";
            else disabled = "";

              let child=<Manejo teamA = {this.state.semis[i]} 
                                teamB = {this.state.semis[i+1]}/>
            children.push(child);
          
            i = i + 2;
        }
        table.push(<div id = "semis" className="col-sm">{children}</div>);
        return table;
    }

   GenerarFinal(){
        let table = [];
        let i = 0;
        let children = [];
        let disabled;

        children.push(<h1 className="text-danger" >Final :</h1>)

        if (this.state.final[i] == "" || this.state.final[i+1] == "")
            disabled = "disabled";
        else disabled = "";

        if (this.state.champ != "empty")
                disabled = "disabled";
        
         let child=<Manejo teamA = {this.state.final[i]} 
                         teamB = {this.state.final[i+1]}/>
            children.push(child);

        table.push(<div id = "final" className="col-sm">{children}</div>);
        return table;
    }

   
}
