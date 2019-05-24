import React, { Component } from 'react';
import Partido from './Partido';

export default class Cuartos extends Component {

  constructor() {
    super();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.crearGanadoresCuartos();
  };

  renderEquipos() {
    var partidoCuartos = this.crearCuartos();
    return partidoCuartos.map(partido => {
      return <Partido etapa="cuartos" partido={this.props.partidos[partido.id]} actualizarPartidos={this.props.actualizarPartidos} onChanges={this.props.handleChanges} clave={partido.id} key={partido.id} nombre_equipo1={partido.nombre_equipo1} nombre_equipo2={partido.nombre_equipo2}></Partido>
    })
  }

  crearCuartos() {
    var equiposDup = [... this.props.equipos];
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
              <h1 className="col-xs-12 text-center">Cuartos</h1>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Elegir Ganador</th>
                    <th scope="col">Equipo 1</th>
                    <th scope="col">Resultado 1</th>
                    <th scope="col"> - </th>
                    <th scope="col">Equipo 2</th>
                    <th scope="col">Resultado 2</th>
                    <th scope="col">Elegir Ganador</th>
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
                  Actualizar semifinales
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
