import React, { Component } from 'react';
import Equipo from './Equipo';

export default class Partido extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <div className="container">
                <div className="btn-toolbar">
                    <Equipo nombre={this.props.equipo1} habilitado={this.props.habilitado}/>
                    <Equipo nombre={this.props.equipo2} habilitado={this.props.habilitado}/>
                </div>
            </div>
        )
    }
}