import React, { Component } from 'react';

export default class Partido extends Component {
  
  allowNumbersOnly = (e) => {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
  }

  render() {
    return (
      <tr>
        <th scope="row"></th>
        <td>{this.props.nombre_equipo1}</td>
        <td>
          <div className="hidden-sm hidden-md hidden-lg">
            <input onKeyPress={this.allowNumbersOnly} value={this.props.resultadoEquipo1} id={'resultado_equipo1_partido' + this.props.clave} type="text" className="form-control input-sm" onChange={this.props.onChanges}></input>
          </div>
        </td>
        <td> - </td>
        <td>{this.props.nombre_equipo2}</td>
        <td>
          <input onKeyPress={this.allowNumbersOnly} value={this.props.resultadoEquipo2} id={'resultado_equipo2_partido' + this.props.clave} type="text" className="form-control input-sm" onChange={this.props.onChanges}></input>
        </td>
      </tr>
    );
  }
}