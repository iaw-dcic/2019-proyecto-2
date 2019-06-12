import React, { Component } from 'react'
import Partido from './Partido'
import PartidoSemi from './PartidoSemi'
import PartidoFinal from './PartidoFinal'
import PartidoTercero from './PartidoTercero'

export default class Pronostico extends Component {

    state = {
        id: -1,
        selecciones: [],
        partidosCuartos: [],
        ganadorCuarto1: null,
        ganadorCuarto2: null,
        ganadorCuarto3: null,
        ganadorCuarto4: null,
        ganadorSemi1: null,
        ganadorSemi2: null,
        perdedorSemi1: null,
        perdedorSemi2: null,
        ganadorFinal: null,
        ganadorTercero: null,
        partidosSemis: [],
        final: [],
        tercerPuesto: []
    }
    constructor(props){
        super(props);
        this.state.id = this.props.idPronostico;
    }
    
    render() {
      return (
        <div className="row colorFondo">
            <div className="col-4" id="cuartos">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Cuartos</span></h3>
                    <Partido insta='4' partido={this.state.partidosCuartos[0]} ganador={this.setGC1.bind(this)}/>
                    <Partido insta='4' partido={this.state.partidosCuartos[1]} ganador={this.setGC2.bind(this)}/>
                    <Partido insta='4' partido={this.state.partidosCuartos[2]} ganador={this.setGC3.bind(this)}/>
                    <Partido insta='4' partido={this.state.partidosCuartos[3]} ganador={this.setGC4.bind(this)}/>
            </div>

          

            <div className="col-4 ubicacion-semi" id="semi">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Semis</span></h3>
                    <PartidoSemi insta='2' seleccion1={this.state.ganadorCuarto1} seleccion2={this.state.ganadorCuarto2} ganador={this.setGS1.bind(this)} perdedor={this.setPS1.bind(this)}/>
                    <div className="ubicacion-semi-2"><PartidoSemi insta='2' seleccion1={this.state.ganadorCuarto3} seleccion2={this.state.ganadorCuarto4} ganador={this.setGS2.bind(this)} perdedor={this.setPS2.bind(this)}/></div>
                
            </div>
            
           

            <div className="col-4 ubicacion-final" id="final">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Final</span></h3>
                 <PartidoFinal insta='1' seleccion1={this.state.ganadorSemi1} seleccion2={this.state.ganadorSemi2} ganador={this.setCampeon.bind(this)}/>
                <h5 className="text-center ubicacion-tercero"><span className="badge badge-info text-wrap">Tercer Puesto</span></h5>

                <PartidoTercero insta='3' seleccion1={this.state.perdedorSemi1} seleccion2={this.state.perdedorSemi2} ganador={this.setTercero.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">Guardar</button>
        </div>
      );

    }
    async componentWillReceiveProps(newProps){
        this.setState({
            id: newProps.idPronostico
        });
        var idProno = newProps.idPronostico;
        this.resetEstado();
        
        if(idProno!=-1){
            fetch('http://127.0.0.1:8000/api/partidos/4/'+ idProno)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        partidosCuartos: json.items
                    })
                });
            fetch('http://127.0.0.1:8000/api/partidos/2/'+ idProno)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        partidosSemis: json.items
                    })
                });
            fetch('http://127.0.0.1:8000/api/partidos/1/'+ idProno)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        final: json.items
                    })
                });

            fetch('http://127.0.0.1:8000/api/partidos/3/'+ idProno)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        tercerPuesto: json.items
                    })
                });
                console.log(idProno);

            }
    }

    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/selecciones')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    selecciones: json.items
                })
            });
    }

   async setGC1(ganador){
        this.setState({
            ganadorCuarto1: ganador
        })
    }
    
    async setGC2(ganador){
        this.setState({
            ganadorCuarto2: ganador
        })
    }
    
    async setGC3(ganador){
        this.setState({
            ganadorCuarto3: ganador
        })
    }
    
    async setGC4(ganador){
        this.setState({
            ganadorCuarto4: ganador
        })
    }
    async setGS2(ganador){
        this.setState({
            ganadorSemi1: ganador
        })
    }

    async setGS1(ganador){
        this.setState({
            ganadorSemi2: ganador
        })
    }

    async setPS1(perdedor){
        this.setState({
            perdedorSemi1: perdedor
        })
    }
    
    async setPS2(perdedor){
        this.setState({
            perdedorSemi2: perdedor
        })
    }

    async setCampeon(ganador){
        this.setState({
            ganadorFinal: ganador
        })
    }

    async setTercero(ganador){
        this.setState({
            ganadorTercero: ganador
        })
    }

    async resetEstado(){
        this.setState({
            ganadorCuarto1: null,
            ganadorCuarto2: null,
            ganadorCuarto3: null,
            ganadorCuarto4: null,
            ganadorSemi1: null,
            ganadorSemi2: null,
            perdedorSemi1: null,
            perdedorSemi2: null,
            ganadorFinal: null,
            ganadorTercero: null
        });
        console.log(this.state);
    }
  }