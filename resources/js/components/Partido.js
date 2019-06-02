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
                    <Equipo nombre={this.props.equipo1} 
                            id={this.props.id} 
                            habilitado={this.props.habilitado} 
                            handler={this.props.handler}/>

                    <Equipo nombre={this.props.equipo2} 
                            id={this.props.id} 
                            habilitado={this.props.habilitado} 
                            handler={this.props.handler}/>
                </div>
            </div>
        )
    }
}