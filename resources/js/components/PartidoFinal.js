import React, { Component } from 'react'
import Card from './Card';

export default class PartidoSemi extends Component {

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
            <button className="btn" id="final1" onClick={(e)=>this.handleGanador1()}>
                <Card nombre={this.state.seleccion1.nombre} codigo={this.state.seleccion1.codigo}/>
            </button>
            <button className="btn" id="final2" onClick={(e)=>this.handleGanador2()}>
                <Card nombre={this.state.seleccion2.nombre} codigo={this.state.seleccion2.codigo}/>
            </button>
        </div>
      );
    }

    async componentWillReceiveProps(newProps){
        if(newProps.seleccion1 != null){
            this.setState({
                seleccion1: {
                    nombre: newProps.seleccion1.nombre,
                    codigo: newProps.seleccion1.codigo,
                    goles: newProps.seleccion1.goles
                }
            });
        }
        if(newProps.seleccion2 != null){
            this.setState({
                seleccion2: {
                    nombre: newProps.seleccion2.nombre,
                    codigo: newProps.seleccion2.codigo,
                    goles: newProps.seleccion2.goles,
                }
            });
        }
    }

    

    async handleGanador1(){
        document.getElementById('final1').setAttribute("disabled","");
        document.getElementById('final2').setAttribute("disabled","");
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
        document.getElementById('final1').setAttribute("disabled","");
        document.getElementById('final1').setAttribute("disabled","");
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