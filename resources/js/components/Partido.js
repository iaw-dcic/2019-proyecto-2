import React, { Component } from 'react';
import Equipo from './Equipo';
import { ON } from './Torneo';

export default class Partido extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( 
            <div className="container" style={{backgroundColor: this.props.highlight==ON? "#457DDA":"white",
            borderRadius: "100%"}}>
                <div className="btn-group">
                    <Equipo nombre={this.props.equipo1} 
                            id={this.props.id} 
                            habilitado={this.props.habilitado} 
                            handlerClick={this.props.handlerClick}
                            handlerMouseOver={this.props.handlerMouseOver}
                            handlerMouseOut={this.props.handlerMouseOut}/>

                    <Equipo nombre={this.props.equipo2} 
                            id={this.props.id} 
                            habilitado={this.props.habilitado} 
                            handlerClick={this.props.handlerClick}
                            handlerMouseOver={this.props.handlerMouseOver}
                            handlerMouseOut={this.props.handlerMouseOut}/>
                </div>
            </div>
        )
    }
}