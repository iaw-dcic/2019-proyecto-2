import React, { Component } from 'react';
import { EQUIPO_ND } from './Torneo';

export default class Equipo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.habilitado == "true")
            return this.renderEnabledButton()
        else
            return this.renderDisabledButton()
    }

    renderEnabledButton() {
        return (
            <button type="button" 
                id={this.props.id}
                onClick={this.props.handler}
                className="btn btn-success mr-1">
                    {this.props.nombre==EQUIPO_ND? "No Definido":this.props.nombre}
            </button>
        )
    }

    renderDisabledButton() {
        return (
            <button type="button" 
                id={this.props.id}
                onClick={this.props.handler}
                className="btn btn-success mr-1 disabled"
                disabled>
                    {this.props.nombre==EQUIPO_ND? "No Definido":this.props.nombre}
            </button>
        )
    }
}