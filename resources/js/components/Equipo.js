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
                style={{width: "110px", color: this.props.ganador==1? "yellow":"white"}}
                onClick={this.props.handlerClick}
                onMouseOver={this.props.handlerMouseOver}
                onMouseOut={this.props.handlerMouseOut}
                className="btn btn-success mr-1">
                    {this.props.nombre==EQUIPO_ND? "No Definido":this.props.nombre}
            </button>
        )
    }

    renderDisabledButton() {
        return (
            <button type="button" 
                id={this.props.id}
                style={{width: "110px", color: this.props.ganador==1? "yellow":"white"}}
                onClick={this.props.handler}
                onMouseOver={this.props.handlerMouseOver}
                onMouseOut={this.props.handlerMouseOut}
                className="btn btn-success mr-1 disabled"
                disabled>
                    {this.props.nombre==EQUIPO_ND? "No Definido":this.props.nombre}
            </button>
        )
    }
}