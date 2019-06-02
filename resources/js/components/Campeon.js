import React, { Component } from 'react';
import { EQUIPO_ND } from './Torneo';

export default class Campeon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color:  "#ff0000"
        }
    }

    componentDidMount() {
        if (this.props.nombre != EQUIPO_ND) 
            this.timerID = setInterval(
                () => this.tick(),
                20
            )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <h2 style={{color:this.state.color}}>
                Campeon: {this.props.nombre == EQUIPO_ND? "No se sabe":this.props.nombre}
            </h2>
        )
    }

    tick() {

    }
}