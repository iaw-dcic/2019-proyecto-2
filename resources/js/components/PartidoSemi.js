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
        var idBoton1="semi"+this.state.seleccion1.nombre;
        var idBoton2="semi"+this.state.seleccion2.nombre;
      return (
        <div className="jumbotron">
            <button className="btn" id={idBoton1} onClick={(e)=>this.handleGanadorSemi1()}>
                <Card nombre={this.state.seleccion1.nombre} codigo={this.state.seleccion1.codigo}/>
            </button>
            <button className="btn" id={idBoton2} onClick={(e)=>this.handleGanadorSemi2()}>
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
        }/*
       if((newProps.seleccion1 != null)&&(newProps.seleccion2 != null)){
            document.getElementById('semi'+this.state.seleccion1.nombre).removeAttribute("disabled");
            document.getElementById('semi'+this.state.seleccion2.nombre).removeAttribute("disabled");
        }*/
    }
/*
    async componentWillUpdate(){
        if((this.state.seleccion1.nombre!="") && (this.state.seleccion2.nombre != "")){
            
            document.getElementById('semi'+this.state.seleccion1.nombre).removeAttribute("disabled");
            document.getElementById('semi'+this.state.seleccion2.nombre).removeAttribute("disabled");
        }
    }
*/
    async handleGanadorSemi1(){
        document.getElementById('semi'+this.state.seleccion1.nombre).setAttribute("disabled","");
        document.getElementById('semi'+this.state.seleccion2.nombre).setAttribute("disabled","");
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
        this.props.perdedor(this.state.seleccion2);
    }
    
   async handleGanadorSemi2(){
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
        this.props.perdedor(this.state.seleccion1);
    }

  }