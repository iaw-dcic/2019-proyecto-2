import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
    <div className="table-responsive-sm">
      <Table className="table table-borderless">
        <thead>
          <tr>
            <th>Octavos</th>
            <th>Cuartos</th>
            <th>Semis</th>
            <th>Final</th>
            <th>Semifinal</th>
            <th>Cuartos</th>
            <th>Octavos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>River</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ganador</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cruzeiro</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>ganador</td>
            <td></td>
          </tr>
          <tr>
            <td>San Lorenzo</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ganador</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cerro Porteño</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>ganador</td>
          </tr>
          <tr>
            <td>Liga de Quito</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ganador</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Olimpia</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>ganador</td>
            <td></td>
          </tr>
             <tr>
            <td>Paranaense</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ganador</td>
            <td></td>
            <td></td>
          </tr>
             <tr>
            <td>Boca Junioers</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>



        </tbody>
      </Table>
    </div>
    );
  }
}
