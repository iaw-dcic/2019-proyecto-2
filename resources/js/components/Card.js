import React, { Component } from 'react'

export default class Card extends Component {

    state = {
        seleccionNombre: "",
        seleccionCodigo: "",
        urlImagen: ""
    }

    render() {
      return (
        <div className="card tamanio">
            <div className="row">
                <div className="col-md-4">
                    <img className="card-img tamanio-img" src={this.state.urlImagen}></img>
                    
                </div>
                <div className="col-md-5">
                    <p className="centrar">{this.state.seleccionNombre}</p>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control flotar" id="seleccion1"></input>
                </div>
            </div>
        </div>
      );
    }
  }