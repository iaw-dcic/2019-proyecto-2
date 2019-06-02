import React, { Component } from 'react'
import Partido from './Partido'
import { Script } from 'vm';

export default class Pronostico extends Component {

    state = {
        id: 0,
        selecciones: [],
        partidosCuartos: [],
        partidosSemis: [],
        final: any,
        tercerPuesto: any
    }
    constructor(props){
        super(props);
        this.state.id = this.props.id;
    }
    
    render() {
      return (
        <div className="row colorFondo">
            <div className="col-4" id="cuartos">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Cuartos</span></h3>
                if(this.state.partidosCuartos[0] != null){
                    <Partido instancia="cuartos1" partido={this.state.partidosCuartos[0]}/>
                }
                if(this.state.partidosCuartos[1] != null){
                    <Partido instancia="cuartos2" partido={this.state.partidosCuartos[1]}/>
                }
                if(this.state.partidosCuartos[2] != null){
                    <Partido instancia="cuartos3" partido={this.state.partidosCuartos[2]}/>
                }
                if(this.state.partidosCuartos[3] != null){
                    <Partido instancia="cuartos4" partido={this.state.partidosCuartos[3]}/>
                }
            </div>

          

            <div className="col-4 ubicacion-semi" id="semi">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Semis</span></h3>
                <Partido instancia="semi1" partido={this.state.partidosSemis[0]}/>
                <div className="ubicacion-semi-2"><Partido instancia="semi2" partido={this.state.partidosSemis[1]}/></div>
            </div>
            
           

            <div className="col-4 ubicacion-final" id="final">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Final</span></h3>
                <Partido instancia="final"/>
                <h5 className="text-center ubicacion-tercero"><span className="badge badge-info text-wrap">Tercer Puesto</span></h5>
                <Partido instancia="tercero"/>
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">Guardar</button>
        </div>
      );

    }

    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/selecciones')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    selecciones: json.items
                })
            });
        fetch('http://127.0.0.1:8000/api/partidosCuartos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    partidosCuartos: json.items
                })
            });
        }
  }