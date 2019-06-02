import React, { Component } from 'react';
import { EQUIPO_ND } from './Torneo';

export default class Campeon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color:  "black"
        }
    }

    componentDidMount() {
        this.timerID = setInterval (
            () => this.tick(),
            200
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <h2>
                Campeon: <p style={{color:this.state.color}}>
                            {this.props.nombre == EQUIPO_ND? "No se sabe":this.props.nombre}
                        </p>
            </h2>
        )
    }

    tick() {
        if (this.props.nombre != EQUIPO_ND)
            if (this.state.color == "red")
                this.setState({color: "green"})
            else if (this.state.color == "green")
                this.setState({color: "blue"})
            else
                this.setState({color: "red"})
    }
}