import React, { Component } from 'react';
import axios from 'axios';

export default class PanelDerecho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            telas: [],
            talles: [],
            colores: []

        }
    }

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');

        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/telas').then(response => {
            this.setState({ telas: response.data })
        })
        axios.get('/api/talles').then(response => {
            this.setState({ talles: response.data })
        })
        axios.get('/api/colores').then(response => {
            this.setState({ colores: response.data })
        })

    }

    cambiarTalle(e) {
        var talleAux = e.target.value;
        this.props.cambiarTalle(talleAux);
    }

    cambiarTela(e) {
        var telaAux = e.target.value;
        this.props.cambiarTela(telaAux);
    }


    cambiarColorRemera(e, id) {
        this.props.cambiarColorRemera(id);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Colores disponibles</h5>
                    <hr width="100%"></hr>
                    <h2 id="tittle">Seleccione un color </h2>
                    <hr></hr>
                    <div className="btn-toolbar mb-2" role="toolbar">
                        <div id="listColours" className="btn-color" role="toolbar">
                            <div className="btn-group" >
                                {
                                    this.state.colores.map((item) => (
                                        <button key={item.color} id={item.color} value={item.color} onClick={(e) => this.cambiarColorRemera(e, item.color)} className="btn-item-color">  </button>

                                    ))
                                }
                            </div>
                        </div>
                        <hr width="100%"></hr>
                        <h5 className="card-title text-muted text-uppercase text-center">Listado de talles</h5>
                        <hr width="100%"></hr>
                        <h2 id="tittle">Talle {this.props.talleActual} </h2>

                        <select className="form-control" value={this.props.talleActual} onChange={(e) => this.cambiarTalle(e)}>
                            {
                                this.state.talles.map((item) => (
                                    <option key={item.tipo} value={item.tipo}>{item.tipo}</option>
                                ))

                            }
                        </select>

                        <hr width="100%"></hr>

                        <h5 className="card-title text-muted text-uppercase text-center">Listado de Telas</h5>
                        <hr width="100%"></hr>
                        <h2 id="tittle">Tela {this.props.telaActual} </h2>

                        <select className="form-control" value={this.props.telaActual} onChange={(e) => this.cambiarTela(e)}>
                            {
                                this.state.telas.map((item) => (
                                    <option key={item.nombre} value={item.nombre}>{item.nombre}</option>
                                ))
                            }
                        </select>

                    </div>
                    <hr></hr>
                </div>
            </div>
        )
    }
}