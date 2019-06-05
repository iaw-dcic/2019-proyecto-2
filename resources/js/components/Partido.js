import React, { Component } from 'react'
import Card from './Card';

export default class Partido extends Component {

    state ={
        instancia: "",
        seleccion1: {
            nombre: "",
            codigo: "",
            goles: null
        },
        seleccion2: {
            nombre: "",
            codigo: "",
            goles: null
        }
    } 

    constructor(props){
        super(props);
       
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