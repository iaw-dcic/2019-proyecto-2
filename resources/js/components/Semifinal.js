import React, { Component } from 'react';
import Partido from './Partido';

export default class Semifinal extends Component {

  constructor() {
    super();
  }
  
  handleSubmit = (event) => {
    event.preventDefault();    
    this.props.crearGanadoresSemifinales();
    
  };

  crearSemifinales() {
    let partidosSemifinales = [];
    let primerSemifinal = {
      id: 4,
      nombre_equipo1: this.props.ganadoresCuartos.ganador_partido1,
      nombre_equipo2: this.props.ganadoresCuartos.ganador_partido2
    }
    partidosSemifinales.push(primerSemifinal);
    let segundaSemifinal = {
      id: 5,
      nombre_equipo1: this.props.ganadoresCuartos.ganador_partido3,
      nombre_equipo2: this.props.ganadoresCuartos.ganador_partido4
    }
    partidosSemifinales.push(segundaSemifinal);
    return partidosSemifinales;
  }


  renderEquipos() {
    var partidosSemifinales = this.crearSemifinales();
    return partidosSemifinales.map(partido => {
      let resultadoEquipo1 = this.props.resultados['resultado_equipo1_partido' + partido.id];
      let resultadoEquipo2 = this.props.resultados['resultado_equipo2_partido' + partido.id];
      return <Partido resultadoEquipo1={resultadoEquipo1} resultadoEquipo2={resultadoEquipo2} onChanges={this.props.handleChanges} clave={partido.id} key={partido.id} nombre_equipo1={partido.nombre_equipo1} nombre_equipo2={partido.nombre_equipo2} resultados={this.props.resultados} actualizarResultadosBotones={this.props.actualizarResultadosBotones}></Partido>
    })
  } 

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <h1 className="col-xs-12 text-center">Semifinal</h1>
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
                  Actualizar la final
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
