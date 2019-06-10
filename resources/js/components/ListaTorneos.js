import React, { Component } from 'react';

export default class Campeon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var torneos

        if (this.props.cargarResponse)
            torneos = this.props.cargarResponse.data.map(($torneo) =>
                <div key={$torneo.id}>
                    <button id={$torneo.id} type="button" onClick={this.props.handleClickCargarTorneo} className="btn btn-default mr-1">
                        {$torneo.id}
                    </button>
                    <button id={$torneo.id} type="button" onClick={this.props.handleClickEliminarTorneo} className="btn btn-danger mr-1">
                        Eliminar Torneo {$torneo.id}
                    </button>
                    <br/>
                </div>
            )

        return (
            <div className="row justify-content-left">
                <div className="col-md-8">
                    <h3>Lista de Torneos</h3>
                    <ul>{torneos? torneos:"No hay torneos que mostrar"}</ul>
                </div>
            </div>
        )
    }
}