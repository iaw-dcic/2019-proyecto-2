import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Colors extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    Elegir color de remera
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Colors />, document.getElementById('seccion-colores'))