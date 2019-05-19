import React, { Component } from 'react';

export default class Partido extends Component {
  render() {
    return (
      <tr>
        <th scope="row"></th>
        <td>{this.props.nombre_equipo1}</td>
        <td>
          <div className="hidden-sm hidden-md hidden-lg">
            <input id={'resultado_equipo1_partido' + this.props.clave} type="text" className="form-control input-sm"></input>
          </div>
        </td>
        <td> - </td>
        <td>{this.props.nombre_equipo2}</td>
        <td>
          <input id={'resultado_equipo2_partido' + this.props.clave} type="text" className="form-control input-sm"></input>
        </td>
      </tr>
    );
  }
}