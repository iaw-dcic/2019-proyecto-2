import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Equipo extends Component {

    render() { 
        return ( 
            <button type="button" className="btn btn-primary m-1"
                id={this.props.id}
                onClick={this.props.onSeleccionEquipo}
                disabled = {this.props.disable}
            >
               {this.props.nombre}
            </button>
        );
    }
}
 