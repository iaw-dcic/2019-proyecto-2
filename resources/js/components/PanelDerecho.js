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
                        <h2 id="tittle">Talle {this.state.talle} </h2>
                        <h5 className="card-title text-muted text-uppercase text-center">Listado de talles</h5>
                        <select className="form-control" value={this.state.talle} onChange={(e) => this.cambiarTalle(e)}>
                            {
                                this.state.talles.map((item) => (
                                    <option key={item.tipo} value={item.tipo}>{item.tipo}</option>
                                ))

                            }
                        </select>

                        <hr width="100%"></hr>

                        <h2 id="tittle">Tela {this.state.tela} </h2>
                        <h5 className="card-title text-muted text-uppercase text-center">Listado de Telas</h5>
                        <select className="form-control" value={this.state.tela} onChange={(e) => this.cambiarTela(e)}>
                            {
                                this.state.telas.map((item) => (
                                    <option key={item.nombre} value={item.nombre}>{item.nombre}</option>
                                ))

                            }
                        </select>
                        <hr width="100%"></hr>


                    </div>
                    <hr></hr>
                </div>
            </div>
        )
    }
}