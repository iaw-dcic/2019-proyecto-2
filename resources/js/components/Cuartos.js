import React, { Component } from 'react';
import Partido from './Partido';

export default class Cuartos extends Component {

  constructor() {

    super();
    //Initialize the state in the constructor
    this.state = {
      equipos: [],
      partidoCuartos: [],
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  componentDidMount() {
    /* fetch API in action */
    fetch('http://localhost:8000/equipos')
      .then(response => {
        return response.json();
      })
      .then(equipos => {
        //Fetched product is stored in the state
        this.setState({ equipos });
      });

  }

  renderEquipos() {
    var partidoCuartos = this.crearCuartos();
    return partidoCuartos.map(partido => {
      return <Partido clave={partido.id} key={partido.id} nombre_equipo1={partido.nombre_equipo1} nombre_equipo2={partido.nombre_equipo2}></Partido>
    })
  }

  crearCuartos() {
    var equiposDup = [... this.state.equipos];
    var arregloIzquierda = equiposDup.splice(0, Math.floor(equiposDup.length / 2));
    var arregloDerecha = equiposDup;
    var partidoCuartos = arregloIzquierda.map(equipo => {
      return {
        id: equipo.id,
        nombre_equipo1: equipo.nombre_equipo,
        nombre_equipo2: arregloDerecha[equipo.id].nombre_equipo
      }
    })
    return partidoCuartos;
  }

  render() {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipo 1</th>
                    <th scope="col">Resultado 1</th>
                    <th scope="col"> - </th>
                    <th scope="col">Equipo 2</th>
                    <th scope="col">Resultado 2</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.renderEquipos()
                  }
                </tbody>
              </table>
              <div className="col-xs-12 text-center">                  
                <button type="submit" className="btn btn-primary text-center center">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
