import React, { Component } from 'react';
import Equipo from './Equipo';

export default class Partido extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Equipo nombre={this.props.equipo1}/>
                        <Equipo nombre={this.props.equipo2}/>
                    </div>
                </div>
            </div>
        )
    }
}