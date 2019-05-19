import React, { Component } from 'react';
import Partido from './Partido';

export default class Final extends Component {

  constructor() {
    super();
  }
  
  handleSubmit(event) {
    event.preventDefault();    
  };

  crearFinal() {
    let partidoFinal = [];
    let final = {
      id: 6,
      nombre_equipo1: this.props.ganadoresSemifinales.ganador_semifinal1,
      nombre_equipo2: this.props.ganadoresSemifinales.ganador_semifinal2
    }
    partidoFinal.push(final);
    return partidoFinal;
  }


  renderEquipos() {
    var partidosFinal = this.crearFinal();
    return partidosFinal.map(partido => {
      let resultadoEquipo1 = this.props.resultados['resultado_equipo1_partido' + partido.id];
      let resultadoEquipo2 = this.props.resultados['resultado_equipo2_partido' + partido.id];
      return <Partido resultadoEquipo1={resultadoEquipo1} resultadoEquipo2={resultadoEquipo2} onChanges={this.props.handleChanges} clave={partido.id} key={partido.id} nombre_equipo1={partido.nombre_equipo1} nombre_equipo2={partido.nombre_equipo2} resultados={this.props.resultados}></Partido>
    })
  } 

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <h1 className="col-xs-12 text-center">Final</h1>
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
