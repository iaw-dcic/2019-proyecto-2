import React, { Component } from 'react';
import Partido from './Partido';

export default class Cuartos extends Component {

  constructor() {
    super();
  }

  handleSubmit= (event) => {
    event.preventDefault();    
    this.props.crearGanadoresCuartos();
  };

  renderEquipos() {
    var partidoCuartos = this.crearCuartos();
    return partidoCuartos.map(partido => {
      let resultadoEquipo1 = this.props.state.resultados['resultado_equipo1_partido' + partido.id];
      let resultadoEquipo2 = this.props.state.resultados['resultado_equipo2_partido' + partido.id];
      return <Partido resultadoEquipo1={resultadoEquipo1} resultadoEquipo2={resultadoEquipo2} onChanges={this.props.handleChanges} clave={partido.id} key={partido.id} nombre_equipo1={partido.nombre_equipo1} nombre_equipo2={partido.nombre_equipo2}></Partido>
    })
  }

  crearCuartos() {
    var equiposDup = [... this.props.state.equipos];
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
