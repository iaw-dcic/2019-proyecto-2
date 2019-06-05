import React, { Component } from 'react'
import Partido from './Partido'
import { Script } from 'vm';

export default class Pronostico extends Component {

    state = {
        id: 0,
        selecciones: [],
        partidosCuartos: [],
        partidosSemis: [],
        final: [],
        tercerPuesto: []
    }
    constructor(props){
        super(props);
        this.state.id = this.props.id;
        console.log(this.state.id);
    }
    
    render() {
      return (
        <div className="row colorFondo">
            <div className="col-4" id="cuartos">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Cuartos</span></h3>
                    <Partido />
                    <Partido />
                    <Partido />
                    <Partido />
            </div>

          

            <div className="col-4 ubicacion-semi" id="semi">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Semis</span></h3>
                    <Partido />
                    <div className="ubicacion-semi-2"><Partido /></div>
                
            </div>
            
           

            <div className="col-4 ubicacion-final" id="final">
                <h3 className="text-center"><span className="badge badge-info text-wrap">Final</span></h3>
                 <Partido />
                <h5 className="text-center ubicacion-tercero"><span className="badge badge-info text-wrap">Tercer Puesto</span></h5>

                <Partido />
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
        fetch('http://127.0.0.1:8000/api/partidos/4')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    partidosCuartos: json.items
                })
            });
        }
  }