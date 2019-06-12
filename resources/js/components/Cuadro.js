import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import  "./css/cuadro.scss"
import Main from './Main'
import Equipo from './Equipo'
import { Link } from 'react-router-dom'

/* Main Component */
export default class Cuadro extends Component {

  constructor(){
         super();
          this.state = {
           name: '',
           matches: [],
           predictions: [],
           ganador: "",
           cuartos0: [],
           cuartos1: [],
           cuartos2: [],
           cuartos3: [],
           cuartos4: [],
           cuartos5: [],
           cuartos6: [],
           cuartos7: [],

           semifinal0: [],
           semifinal1: [],
           semifinal2: [],
           semifinal3: [],

           final0: [],
           final1: [],
           show: false,
           pronosticoActual :null,
  }

  this.addNewProduct=this.addNewProduct.bind(this);
  this.todos=this.todos.bind(this);
  this.octavos=this.octavos.bind(this);
  this.cuartos=this.cuartos.bind(this);
  this.semis=this.semis.bind(this);
  this.setPronostico=this.setPronostico.bind(this);
  this.getEditProductToEdit=this.getEditProductToEdit.bind(this);
  this.editProduct=this.editProduct.bind(this);
  this.onClick1= this.onClick1.bind(this);
  this.onClick2= this.onClick2.bind(this);
  this.onClick3= this.onClick3.bind(this);
  this.onClick4= this.onClick4.bind(this);
  this.handleFieldChange = this.handleFieldChange.bind(this);
  this.selectModal=this.selectModal.bind(this);
  this.setArreglo=this.setArreglo.bind(this);
  this.controlar=this.controlar.bind(this);
  this.controlarFinal=this.controlarFinal.bind(this);
}

setPronostico = (pronost) => {
       this.setState({
           predictions: pronost
       });
   }

componentWillMount() { //LOCAL STORAGE
      this.todos();
      for (let key in this.state) {
          if (localStorage.hasOwnProperty(key)) {
              let value = localStorage.getItem(key);
              try {
                  value = JSON.parse(value);
                  this.setState({ [key]: value });
              } catch (e) {
                  this.setState({ [key]: value });
              }
      }}
  }

  componentDidMount() { //LOS PARTIDOS DE OCTAVOS
      fetch('api/matches/16')
      .then(response => {
             return response.json();
         })
         .then(matches => {
             this.setState({ matches });
         });
  }

  initToken(){ //para no reescribir mil veces
      window.axios = require('axios');
      let api_token = document.querySelector('meta[name="api-token"]');
      if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
  }

  selectModal(info){
      this.setState({show: !this.state.show})
  }

  async addNewProduct() { //CREAR NUEVO PRONOSTICO
    await this.addPronostico();
    this.initToken();

    const prediction={
      pronostico: this.state.pronosticoActual,
      cuartos0: this.state.cuartos0,
      cuartos1: this.state.cuartos1,
      cuartos2: this.state.cuartos2,
      cuartos3: this.state.cuartos3,
      cuartos4: this.state.cuartos4,
      cuartos5: this.state.cuartos5,
      cuartos6: this.state.cuartos6,
      cuartos7: this.state.cuartos7,

      semifinal0: this.state.semifinal0,
      semifinal1: this.state.semifinal1,
      semifinal2: this.state.semifinal2,
      semifinal3: this.state.semifinal3,

      final0:  this.state.final0,
      final1: this.state.final1,
      ganador: this.state.ganador,
     };

    await axios.post('/api/predictions/partidos', prediction)
    .then(response => {
      console.log(response);
    });

this.componentWillMount();

    for (let key in this.state) { //para que me limpie el pronostico dsp de que agrego uno nuevo
     if (localStorage.hasOwnProperty(key))
       localStorage.removeItem(key);
     }

  }

  async addPronostico(){
    this.initToken();

    const nombre={name: this.state.name,}

    await axios.post('/api/predictions/add', nombre)
      .then(response => {
        this.setState({
          pronosticoActual: response.data
        });
        alert("Pronostico creado correctamente");
      });

     localStorage.setItem("pronosticoActual", JSON.stringify(this.state.pronosticoActual));
  }

  getEditProductToEdit(pronost_id){
     this.initToken();
     const path="/api/predictions/"+pronost_id;

     axios.get('/api/predictions/'+pronost_id+'/nombre')
     .then((response) =>{
       this.setState({
        name: response.data
       })
     });

     axios.get(path)
     .then((response) => {
       this.setState({
         pronosticoActual: pronost_id,
         cuartos0: response.data[0]['team1_id'],
         cuartos1: response.data[0]['team2_id'],
         cuartos2: response.data[1]['team1_id'],
         cuartos3: response.data[1]['team2_id'],
         cuartos4: response.data[2]['team1_id'],
         cuartos5: response.data[2]['team2_id'],
         cuartos6: response.data[3]['team1_id'],
         cuartos7: response.data[3]['team2_id'],
         semifinal0: response.data[4]['team1_id'],
         semifinal1: response.data[4]['team2_id'],
         semifinal2: response.data[5]['team1_id'],
         semifinal3: response.data[5]['team2_id'],
         final0: response.data[6]['team1_id'],
         final1: response.data[6]['team2_id'],
         ganador: response.data[7]['team1_id']
       })
     });
  }

  editProduct(){
    this.initToken();
      const prediction={
        name: this.state.name,
        cuartos0: this.state.cuartos0,
        cuartos1: this.state.cuartos1,
        cuartos2: this.state.cuartos2,
        cuartos3: this.state.cuartos3,
        cuartos4: this.state.cuartos4,
        cuartos5: this.state.cuartos5,
        cuartos6: this.state.cuartos6,
        cuartos7: this.state.cuartos7,

        semifinal0: this.state.semifinal0,
        semifinal1: this.state.semifinal1,
        semifinal2: this.state.semifinal2,
        semifinal3: this.state.semifinal3,

        final0:  this.state.final0,
        final1: this.state.final1,
        ganador: this.state.ganador,
      };

      const path="/api/predictions/"+this.state.pronosticoActual;

    axios.put(path,prediction)
      .then(response => {
          alert("pronostico editado !");
      })
    this.componentWillMount();
  }

  todos(){ //TODOS LOS PRONOSTICOS
    this.initToken();

      axios.get('/api/predictions')
         .then((response) => {
           console.log('predictions',response);
           this.setState({
             predictions: response.data
           });
         });
    }

  setArreglo(arregloconTodos, i){
    if([arregloconTodos[i]]!=[]){
      this.setState({[arregloconTodos[i]]: [] });
    }
  }

  controlar(i){
      let arregloConTodosSF= ["semifinal0", "semifinal1", "semifinal2", "semifinal3"];
      let arregloConTodosF= ["final0", "final1"];


      if(i==0 || i==1){
        this.setArreglo(arregloConTodosSF, 0);
        this.setArreglo(arregloConTodosF, 0);
      }
      if(i==2 || i==3){
        this.setArreglo(arregloConTodosSF, 1);
        this.setArreglo(arregloConTodosF, 0);
      }
      if(i==4 || i==5){
        this.setArreglo(arregloConTodosSF, 2);
        this.setArreglo(arregloConTodosF, 1);
      }
      if(i==6 || i==7){
        this.setArreglo(arregloConTodosSF, 3);
        this.setArreglo(arregloConTodosF, 1);
      }

      this.setState({ganador: " "});
  }

  controlarFinal(i){
        let arregloConTodosF= ["final0", "final1"];

       this.setState({ganador: " "});
        if(i==0 || i==1){
          this.setArreglo(arregloConTodosF, 0);
        }
        if(i==2 || i==3){
          this.setArreglo(arregloConTodosF, 1);
        }

  }


  onClick1(event, newcuartos, i){
    console.log(event.target.id);
    let arregloConTodos= ["cuartos0", "cuartos1", "cuartos2", "cuartos3", "cuartos4", "cuartos5", "cuartos6", "cuartos7"];
    var indice = arregloConTodos[i];
    this.setState({[indice]: newcuartos });

    this.controlar(i); //para actualizar semi, si se apreto otra opcion que se cambie

    localStorage.setItem(indice, JSON.stringify(newcuartos));
  }

  onClick2(event, newsemi, i){
    let arregloConTodos= ["semifinal0", "semifinal1", "semifinal2", "semifinal3"];
    var indice = arregloConTodos[i];
    this.setState({ [indice]: newsemi});

    this.controlarFinal(i);
    localStorage.setItem(indice, JSON.stringify(newsemi));
  }

  onClick3(event, newfinal, i){
    let arregloConTodos= ["final0", "final1"];
    var indice = arregloConTodos[i];
    this.setState({ [indice]: newfinal });

    if(this.state.ganador != "")
      this.setState({ganador: ""});
    localStorage.setItem(indice, JSON.stringify(newfinal));
  }

  onClick4(event, winner){
    console.log(event.target.id);
    this.setState({ ganador: winner });
    localStorage.setItem("ganador", JSON.stringify(winner));
  }


  octavos(){
      return this.state.matches.map(match => {
       return(
              <li key={match.num}  className="team-item">
                    <button id={match.team1_id} type="button" className= "btn btn-info" onClick={(e) => this.onClick1(e,match.team1_id, match.num-1)}>{match.team1_id}</button>
                      <time>vs</time>
                    <button  id={match.team2_id} type="button" className= "btn btn-info" onClick={(e) => this.onClick1(e,match.team2_id,match.num-1)} type="button">{match.team2_id}</button>
              </li>
          );
      })
    }


  cuartos(){ //para optimizar
    let arregloConTodos= [this.state.cuartos0, this.state.cuartos1, this.state.cuartos2, this.state.cuartos3, this.state.cuartos4, this.state.cuartos5, this.state.cuartos6, this.state.cuartos7];
    let i=0; let semis=[]; let j=0;
    while (i < 8) {
       semis.push(<Equipo team1={arregloConTodos[i]} team2={arregloConTodos[i+1]} it={j} onClick2={this.onClick2} nombreop={this.getName}/>)
       i=i+2; j=j+1;
    }
    return semis;
  }

  semis(){
    let arregloConTodos= [this.state.semifinal0, this.state.semifinal1, this.state.semifinal2, this.state.semifinal3, this.state.semifinal4];
    let i=0; let finales=[]; let j=0;
    while (i < 4) {
       finales.push(<Equipo team1={arregloConTodos[i]} team2={arregloConTodos[i+1]} it={j} onClick2={this.onClick3} nombreop={this.getName}/>)
       i=i+2; j=j+1;
   }
   return finales;
  }

  handleFieldChange (event) {
     this.setState({
      name: event.target.value
     })
 }

  render() {
    return <div>
    <div className="tournament-container">
      <div className="tournament-headers">
      <h3>Ronda de 16</h3>
      <h3>Cuartos de Final</h3>
      <h3>Semi-Finales</h3>
      <h3>Final</h3>
      <h3>Ganador</h3>
      </div>

        <div className="tournament-brackets">
            <ul className="bracket bracket-1">
              {this.octavos()}
            </ul>

            <ul className="bracket bracket-2">
              {this.cuartos()}
            </ul>

            <ul className="bracket bracket-3">
              {this.semis()}
            </ul>

            <ul className="bracket bracket-4">
            <li className="team-item">
                  <button type="button" className= "btn btn-info" onClick={(e) => this.onClick4(e, this.state.final0)}>{this.state.final0}</button>
                <time>vs</time>
                  <button type="button" className= "btn btn-info" onClick={(e) => this.onClick4(e, this.state.final1)}>
                    {this.state.final1}</button>
              </li>
            </ul>

            <ul className="bracket bracket-5">
              <li className="team-item">
                {this.state.ganador}
            </li>

            <div>
            <label htmlFor='name'>Nombre identificador de tu pronóstico </label>
            <input
              id='name'
              type='text'
              name='name'
              placeholder="Inserte nombre"
              value={this.state.name}
              onChange={this.handleFieldChange}
            />
            </div>
            <button type="submit" onClick={this.addNewProduct}  className="btn-changes btn btn-success">Guardar nuevo</button>


            <button type="submit" onClick={this.editProduct} disabled = {this.state.pronosticoActual== null} className="btn-changes btn btn-success">Grabar</button>
            <button type="button" className="btn-changes btn btn-primary" onClick={ this.selectModal }>Mis pronosticos</button>
            <Main displayModal={this.state.show} closeModal={this.selectModal} predictions={this.state.predictions} onClickA={this.setPronostico} onClickB={this.getEditProductToEdit}  />
          </ul>
      </div>
      </div>
      </div>
    }
  }
