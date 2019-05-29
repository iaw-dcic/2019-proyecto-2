import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Colors extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    Elegir color de remera
                    <ul class="list-group list-group-horizontal-lg">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                    </ul>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Colors />, document.getElementById('seccion-colores'))