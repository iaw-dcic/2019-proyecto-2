import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css'

export default class Save extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary">Guardar cambios</button>
                <button type="button" className="btn btn-primary">Mis fundas</button>
            </div>
        );
    }
}