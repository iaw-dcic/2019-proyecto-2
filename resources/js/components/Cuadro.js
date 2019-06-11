import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import  "./css/cuadro.scss";
import Main from './Main'
import { Link } from 'react-router-dom'

/* Main Component */
export default class Cuadro extends Component {

  constructor(){
         super();
          this.state = {

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

           pronosticoActual :null,
  }

  this.addNewProduct=this.addNewProduct.bind(this);
  this.todos=this.todos.bind(this);
  this.octavos=this.octavos.bind(this);
  this.setPronostico=this.setPronostico.bind(this);
  this.getEditProductToEdit=this.getEditProductToEdit.bind(this);
  this.editProduct=this.editProduct.bind(this);
  this.initToken= this.initToken.bind(this);
}

setPronostico = (pronost) => {
       this.setState({
           predictions: pronost
       });
   }

componentWillMount() { //LOCAL STORAGE
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
        console.log('teams',response);
             return response.json();
         })
         .then(matches => {
             //Fetched product is stored in the state
             this.setState({ matches });
         });
  //       this.todos();

  }


  initToken(){ //para no reescribir mil veces
      window.axios = require('axios');
      let api_token = document.querySelector('meta[name="api-token"]');
      if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
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
      //      alert("Partidos agregados correctamente");
    });
  //   this.todos();


    for (let key in this.state) {

     if (localStorage.hasOwnProperty(key))
       localStorage.removeItem(key);
  }

    window.location.reload(); //refresh
  }

  async addPronostico(){ //necesito crearlo primero pq no puedo tener el id!!!!!!!!!!!
    this.initToken();

    await axios.post('/api/predictions/add')
      .then(response => {
        this.setState({
          pronosticoActual: response.data
        });
        console.log('el id es', response);
              alert("Pronostico creado correctamente");
      });

     localStorage.setItem("pronosticoActual", JSON.stringify(this.state.pronosticoActual));
  }

  getEditProductToEdit(pronost_id){
       this.initToken();
       const path="/api/predictions/"+pronost_id;

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
           ganador: response.data[7]['team1_id'],
         })
       });

  }

  editProduct(){
      this.initToken();

        const prediction={
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
            alert("pronostico editado !")
        });

    //    window.location.reload();

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

  onClick1(event, newcuartos, i){
      console.log(event.target.id);
      let arregloConTodos= ["cuartos0", "cuartos1", "cuartos2", "cuartos3", "cuartos4", "cuartos5", "cuartos6", "cuartos7"];
      var indice = arregloConTodos[i];
       this.setState({
           [indice]: newcuartos
       });

       localStorage.setItem(indice, JSON.stringify(newcuartos));
  }

  onClick2(event, newsemi, i){
    let arregloConTodos= ["semifinal0", "semifinal1", "semifinal2", "semifinal3"];
    var indice = arregloConTodos[i];
     this.setState({
         [indice]: newsemi
     });

     localStorage.setItem(indice, JSON.stringify(newsemi));
  }

  onClick3(event, newfinal, i){
    let arregloConTodos= ["final0", "final1"];
    var indice = arregloConTodos[i];
     this.setState({
         [indice]: newfinal
     });
     localStorage.setItem(indice, JSON.stringify(newfinal));
  }


  onClick4(event, winner){
  this.setState({
          ganador: winner
      });
      localStorage.setItem("ganador", JSON.stringify(winner));
  }


  octavos(){
      return this.state.matches.map(match => {
       return(
              <li key={match.id}  className="team-item">
                    <button id={match.team1_id} type="button" className= "btn btn-info" onClick={(e) => this.onClick1(e,match.team1_id, match.id-1)}>{match.team1_id}</button>
                      <time>vs</time>
                    <button  id={match.team2_id} type="button" className= "btn btn-info" onClick={(e) => this.onClick1(e,match.team2_id,match.id-1)} type="button">{match.team2_id}</button>
              </li>
          );
      })
    }

  semis(){
    let arregloConTodos= ["cuartos0", "cuartos1", "cuartos2", "cuartos3", "cuartos4", "cuartos5", "cuartos6", "cuartos7"];

    return this.arregloConTodos.map(match => {
     return(
            <li key={match.id}  className="team-item">
                  <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e,match.id, match.id)}>{match.id}</button>
                    <time>vs</time>
                  <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e,match.id,match.id)} type="button">{match.id}</button>
            </li>
        );
    }
  )}

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
                      <li className="team-item">
                          <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos0, 0)}>{this.state.cuartos0}</button>
                      <time>vs</time>
                          <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos1, 0)}>{this.state.cuartos1}</button>
                      </li>

                      <li className="team-item">
                            <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos2, 1)}>{this.state.cuartos2}</button>
                      <time>vs</time>
                            <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos3, 1)}>{this.state.cuartos3}</button>
                      </li>

                      <li className="team-item">
                          <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos4, 2)}>{this.state.cuartos4}</button>
                        <time>vs</time>
                          <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos5, 2)}>{this.state.cuartos5}</button>
                      </li>

                        <li className="team-item">
                        <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos6, 3)}>{this.state.cuartos6}</button>
                          <time>vs</time>
                        <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos7, 3)}>{this.state.cuartos7}</button>
                        </li>
                    </ul>

                <ul className="bracket bracket-3">
                 <li className="team-item">
                      <button type="button" className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal0, 0)}>{this.state.semifinal0}</button>
                      <time>vs</time>
                        <button type="button"className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal1, 0)}> {this.state.semifinal1}</button>
                  </li>

                  <li className="team-item">
                      <button type="button" className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal2, 1)}>{this.state.semifinal2}</button>
                    <time>vs</time>
                      <button type="button" className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal3, 1)}>{this.state.semifinal3}</button>
                  </li>
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
                      <button type="submit" onClick={this.addNewProduct} className="btn-changes btn btn-primary">Guardar nuevo</button>
                      <button type="submit" onClick={this.editProduct} className="btn-changes btn btn-primary">Editar</button>
                    </ul>
            </div>
            </div>

            <Main predictions={this.state.predictions} onClickA={this.setPronostico} onClickB={this.getEditProductToEdit}/>

            </div>


      }

  }
