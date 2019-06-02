import React, { Component } from 'react';

export default class Equipo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button type="button" 
                    className={this.props.habilitado=="true"?"btn btn-success mr-1":"btn btn-success mr-1 disabled"}>
                {this.props.nombre==""? "No Definido":this.props.nombre}
            </button>
        )
    }
}