import React, { Component } from 'react';

export default class Equipo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button type="button" className="btn btn-success mr-1">
                {this.props.nombre}
            </button>
        )
    }
}