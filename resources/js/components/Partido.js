import React, { Component } from 'react';
import Equipo from './Equipo';

export default class Partido extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <div className="container" id={this.props.jugado}>
                <div className="btn-toolbar">
                    <Equipo nombre={this.props.equipo1}/>
                    <Equipo nombre={this.props.equipo2}/>
                </div>
            </div>
        )
    }
}