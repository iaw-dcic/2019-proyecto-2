import React, { Component } from 'react'
import Card from './Card';

export default class Partido extends Component {

    state ={
        instancia: "",
        id: -1,
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
        this.state.instancia = props.insta;
    }

    render() {
      return (
        <div className="jumbotron">
            <button className="btn" id={this.state.seleccion1.nombre} onClick={(e)=>this.handleGanador1()}>
                <Card nombre={this.state.seleccion1.nombre} codigo={this.state.seleccion1.codigo}/>
            </button>
            <button className="btn" id={this.state.seleccion2.nombre} onClick={(e)=>this.handleGanador2()}>
                <Card nombre={this.state.seleccion2.nombre} codigo={this.state.seleccion2.codigo}/>
            </button>
        </div>
      );
    }

    async componentWillReceiveProps(newProps){
        if(newProps.partido != null){
        this.setState({
            instancia: newProps.insta,
            id: newProps.partido.id,
            seleccion1: {
                nombre: newProps.partido.seleccion_A.name,
                codigo: newProps.partido.seleccion_A.codigo,
                goles: newProps.partido.seleccion_A.goles
            },
            seleccion2: {
                nombre: newProps.partido.seleccion_B.name,
                codigo: newProps.partido.seleccion_B.codigo,
                goles: newProps.partido.seleccion_B.goles
            }
        });
    }
}

    async handleGanador1(){
        document.getElementById(this.state.seleccion1.nombre).setAttribute("disabled","");
        document.getElementById(this.state.seleccion2.nombre).setAttribute("disabled","");
        this.setState({
            instancia: this.state.instancia,
            id: this.state.id,
            seleccion1: {
                nombre: this.state.seleccion1.nombre,
                codigo: this.state.seleccion1.codigo,
                goles: 1
            },
            seleccion2: {
                nombre: this.state.seleccion2.nombre,
                codigo: this.state.seleccion2.codigo,
                goles: 0
            }

        });
        this.props.ganador(this.state.seleccion1);
    }
    
   async handleGanador2(){
        document.getElementById(this.state.seleccion1.nombre).setAttribute("disabled","");
        document.getElementById(this.state.seleccion2.nombre).setAttribute("disabled","");
        this.setState({
            instancia: this.state.instancia,
            id: this.state.id,
            seleccion1: {
                nombre: this.state.seleccion1.nombre,
                codigo: this.state.seleccion1.codigo,
                goles: 1
            },
            seleccion2: {
                nombre: this.state.seleccion2.nombre,
                codigo: this.state.seleccion2.codigo,
                goles: 0
            }

        });
        this.props.ganador(this.state.seleccion2);
    }
  }