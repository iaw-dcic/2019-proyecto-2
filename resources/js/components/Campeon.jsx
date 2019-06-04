import React, { Component } from 'react';

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
            500
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <h2>
                Campeon: <p style={{color:this.state.color}}>
                            {this.props.nombre == 'empty'? "No se sabe":this.props.nombre}
                        </p>
            </h2>
        )
    }

    tick() {
        if (this.props.nombre != "empty")
            if (this.state.color == "red")
                this.setState({color: "green"})
            else if (this.state.color == "green")
                this.setState({color: "blue"})
            else
                this.setState({color: "red"})
    }
}