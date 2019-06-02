import React, { Component } from 'react'
import Card from './Card';

export default class Partido extends Component {

    state ={
        instancia: "",
        seleccion1: {
            nombre: "",
            codigo: "",
            goles
        },
        seleccion2: {
            nombre: "",
            codigo: "",
            goles
        }
    } 

    constructor(props){
        super(props);
        this.setState({
            intancia: this.props.instancia
        });
    }

    render() {
      return (
        <div className="jumbotron">
            <Card />
            <Card />
        </div>
      );
    }
  }