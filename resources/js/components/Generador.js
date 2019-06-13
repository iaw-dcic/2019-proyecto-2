import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Manejo from './Manejo';
import ListaProdes from './ListaProdes';
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
            camp: 'vacio',
            id: 0,
            name: 'Nuevo Prode',
            bandera: 0,
            editar: 0,
            errors: []
        }

       
        this.onClickOctavos = this.onClickOctavos.bind(this);
        this.onClickCuartos = this.onClickCuartos.bind(this);
        this.onClickSemis = this.onClickSemis.bind(this);
        this.onClickFinal = this.onClickFinal.bind(this);
 
        this.buscar = this.buscar.bind(this);
        this.nuevo = this.nuevo.bind(this);
        this.limpiar = this.limpiar.bind(this);
         this.guardarEditar = this.guardarEditar.bind(this);
        this.handleFieldChange=this.handleFieldChange.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
        this.eliminar=this.eliminar.bind(this)
    }

  handleFieldChange (event) {
    this.setState({
      name: event.target.value
    })
  }

 
   

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }


    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

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
            self.setState({bandera: 1});
        } else {
            self.setState({
                octavos: localStorage.getItem('octavos').split(','),
                cuartos: localStorage.getItem('cuartos').split(','),
                semis: localStorage.getItem('semis').split(','),
                final: localStorage.getItem('final').split(','),
                camp: localStorage.getItem('camp'),
                bandera: 1
            });
        }
    }

    render() {
        if (this.state.bandera != 0){
            if (this.state.id != 0){
                localStorage.clear();
            } else {
                localStorage.setItem('octavos', this.state.octavos);
                localStorage.setItem('cuartos', this.state.cuartos);
                localStorage.setItem('semis', this.state.semis);
                localStorage.setItem('final', this.state.final);
                localStorage.setItem('camp', this.state.camp);
            }
        }
        return (
            
                <div className="row">    
                    <div className="col-sm">    
                        <h1 className="text-secondary">{this.state.name}</h1>
                    <div className="col-sm">
                     
                    <br/>
                  
                    <ul className="list-group list-group-horizontal">
                     
                    
                       {this.GenerarOctavos()}
                    
                    </ul>
                   
                    <br/>
                     <ul className="list-group list-group-horizontal">
                     
                      
                       {this.GenerarCuartos()}
                      </ul>
                    
                    <br/>
                    <ul className="list-group list-group-horizontal">
                     
                      
                       {this.GenerarSemis()}
                      </ul>
                    
                    <br/>
                    <ul className="list-group list-group-horizontal">
                     
                      
                       {this.GenerarFinal()}
                      </ul>
                  <br/>
                

   
                    <ul className="list-group list-group-horizontal">
                     
                      
                        {this.crearCampion()}
                      </ul>
                     
                  </div>

                       
                         <ListaProdes  prodes={this.state.prodes} seleccionar={this.buscar}/>

                        <div className='card-body'>

                    </div>
                    <div className="card-header text-white bg-dark">Nombre del prode</div>
                        <div className="card-body">
                            <div className="form-group mb-2 ">
                                <input
                                  id='name'
                                  type='text'
                                  className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                  name='name'
                                  value={this.state.name}
                                  onChange={this.handleFieldChange}
                                />
                            {this.renderErrorFor('name')}
                         </div>
                            </div>

                   
               
                        <div className='card-body'>

                

              </div>
                  

                
               

            

                
               
                <button  className="btn btn-outline-danger mb-2 mr-2" onClick={this.guardarEditar}> guardar</button>
                <button  className="btn btn-outline-danger mb-2 mr-2" onClick={this.limpiar}>Limpiar </button>
                <button  className="btn btn-outline-danger mb-2 mr-2" onClick={this.nuevo} >Nuevo</button>
                <button  className="btn btn-outline-danger mb-2 mr-2" onClick={this.eliminar}> EliminarProde</button>
                        
                  
               
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

            let child = <Manejo  EquipoA = {this.state.octavos[i]}  EquipoB = {this.state.octavos[i+1]} 
            id1 = {i} id2 = {i+1}  onClick = {this.onClickOctavos} 
                         disable = {disabled}/>

            
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
            let child=<Manejo  EquipoA = {this.state.cuartos[i]} EquipoB = {this.state.cuartos[i+1]}
            id1 = {i} id2 = {i+1}  onClick = {this.onClickCuartos} 
                         disable = {disabled}/>
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

              let child=<Manejo  EquipoA = {this.state.semis[i]}  EquipoB = {this.state.semis[i+1]}
              id1 = {i} id2 = {i+1}  onClick = {this.onClickSemis} 
                         disable = {disabled}/>
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

        if (this.state.camp != "vacio")
                disabled = "disabled";
        
         let child=<Manejo  EquipoA = {this.state.final[i]} EquipoB= {this.state.final[i+1]}
         id1 = {i} id2 = {i+1}  onClick = {this.onClickFinal} 
                         disable = {disabled}/>
            children.push(child);

        table.push(<div id = "final" className="col-sm">{children}</div>);
        return table;
    }

     crearCampion(){
        if (this.state.camp != "vacio")
            return <div className="Ganador">Tu Campeón es: {this.state.camp}</div>
        
    }

    onClickOctavos(e){
        var equipo = e.target.innerHTML;
        var index = Math.floor(e.target.id/2);
        var equipos = this.state.cuartos;
        equipos[index] = equipo;

        this.setState({
            cuartos: equipos
        })
    }

    onClickCuartos(e){
        var equipo = e.target.innerHTML;
        if (equipo != ""){
            var index = Math.floor(e.target.id/2);
            var equipos = this.state.semis;
            equipos[index] = equipo;

            this.setState({
                semis: equipos
            })
        }
    }

    onClickSemis(e){
        var equipo = e.target.innerHTML;
        var index = Math.floor(e.target.id/2);
        var equipos = this.state.final;
        equipos[index] = equipo;

        this.setState({
            final: equipos
        })
    }

    onClickFinal(e){
        var equipo = e.target.innerHTML;

        this.setState({
            camp: equipo
        })
    }

   

     eliminar(e){
        var id = this.state.id;
        let self = this;
        let prodes;
        axios.delete('/api/equipos/'+id)
        .then(function (response) {
            
            if(response.data==null && response.data==[])
                prodes =[];
            else
                prodes = response.data;
            self.setState({
                prodes: prodes,
                cuartos: ["", "", "", "", "", "", "", ""],
                semis: ["", "", "", ""],
                final: ["", ""],
                camp: 'vacio',
                id: 0,
                name: "Nuevo prode"
            });
        }).catch(function (error) {
          console.log(error);
        });
    }

     guardarEditar (event){
        var self = this;
        if (this.state.id == 0){
      
            axios.post('/api/equipos', {
                data: this.state
            }).then(function (response) {
                self.setState({
                    prodes: response.data,
                    id: response.data[response.data.length-1]['id'],
                    name: response.data[response.data.length-1]['name'],
                    editar: 1
                });
            }).catch(function (error) {
              console.log(error);
            });
     
        } else {
            axios.put('/api/equipos/'+this.state.id, {
                data: this.state
            }).then(function (response) {
                  self.setState({
                    prodes: response.data,
                    name: response.data[response.data.length-1]['name'],
                    
                });
            }).catch(function (error) {
              console.log(error);
            });

        }
    }

    buscar(e){
        var id = e.target.id;
        var self = this;
        axios.get('/api/equipos/'+id)
         .then(function (response) {
            var octavos = response.data[0]['octavos'].split(',');
            var cuartos = response.data[0]['cuartos'].split(',');
            var semis = response.data[0]['semis'].split(',');
            var final = response.data[0]['final'].split(',');
            var camp = response.data[0]['camp'];
            var name = response.data[0]['name'];

            self.setState({
                octavos: octavos,
                cuartos: cuartos,
                semis: semis,
                final: final,
                camp: camp,
                id: id,
                name: name
            });
         })
        .catch(function (error) {
           console.log(error);
        });
    }

    nuevo(){
        this.setState({
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            camp: 'vacio',
            id: 0,
            name: "Nuevo prode",
            editar: 0
        });
    }

    limpiar(){
        this.setState({
                        cuartos: ["", "", "", "", "", "", "", ""],
                        semis: ["", "", "", ""],
                        final: ["", ""],
                        camp: 'vacio',
                    });
    
    }
     



}

   

