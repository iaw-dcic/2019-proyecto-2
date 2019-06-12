import React, { Component } from 'react'

export default class Card extends Component {

    state = {
        seleccionNombre: "",
        seleccionCodigo: "",
        urlImagen: ""
    }

    render() {
        var url="img/"+this.props.codigo +".jpg";
      return (
        <div className="card tamanio">
            <div className="row">
                <div className="col-md-4">
                    <img className="card-img tamanio-img" src={url}></img>
                    
                </div>
                <div className="col-md-8">
                    <p className="centrar">{this.props.nombre}</p>
                </div>
            </div>
        </div>
      );
    }
    
  }