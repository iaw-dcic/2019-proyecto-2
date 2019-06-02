import React, { Component } from 'react';
import Partido from './Partido';

const OCTAVOS       = 0,
      CUARTOS       = 1,
      SEMIFINALES   = 2,
      FINAL         = 3;

const JUGADO        = 0,
      POR_JUGAR     = 1;

export default class Torneo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            octavos:        [],
            cuartos:        [],
            semifinales:    [],
            final:          [],
            etapa:          OCTAVOS
        }
    }

    componentDidMount() {
        var oct = [ ["River", "Boca", POR_JUGAR], 
                    ["Hola", "Chau", POR_JUGAR],
                    ["Quehace", "Comoanda", POR_JUGAR],
                    ["Equipo 1", "Equipo 2", POR_JUGAR],
                    ["Equipo 3", "Equipo 4", POR_JUGAR],
                    ["Equipo 5", "Equipo 6", POR_JUGAR],
                    ["Equipo 7", "Equipo 8", POR_JUGAR],
                    ["Equipo 9", "Equipo 10", POR_JUGAR]]

        var cuar = [["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR],
                    ["", "", POR_JUGAR]]
        
        var semi = [["", "", POR_JUGAR],
                    ["", "", POR_JUGAR]]
        
        var fin = ["", "", POR_JUGAR]

        this.setState({
            octavos: oct,
            cuartos: cuar,
            semifinales: semi,
            final : fin
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Torneo</h1>
                    </div>
                </div>

                {this.renderPartidos()}
                
                <br/>

                {this.renderBotonera()}
            </div>
        )
    }

    renderPartidos() {
        return (
            <div className="row justify-content-left">
                {this.renderOctavos()}

                {this.renderCuartos()}

                {this.renderSemifinales()}

                {this.renderFinal()}
            </div>
        )
    }

    renderOctavos() {
        const partidos = this.state.octavos.map((partido, index) => 
            <div>    
                <Partido equipo1={partido[0]} 
                         equipo2={partido[1]} 
                         key={index} 
                         habilitado={this.state.etapa == OCTAVOS && partido[2] == POR_JUGAR? "true":"false"}/>
                <br/>
            </div>
        )

        return (
            <div className="col-md-3">
                <h4>Octavos de Final</h4>
                {partidos}
            </div>
        );
    }

    renderCuartos() {
        const partidos = this.state.cuartos.map((partido, index) => 
            <div>    
                <Partido equipo1={partido[0]} 
                         equipo2={partido[1]} 
                         key={index} 
                         habilitado={this.state.etapa == CUARTOS && partido[2] == POR_JUGAR? "true":"false"}/>
                <br/>
            </div>
        )

        return (
            <div className="col-md-3">
                <h4>Cuartos de Final</h4>
                {partidos}
            </div>
        )
    }

    renderSemifinales() {
        const partidos = this.state.semifinales.map((partido, index) => 
            <div>    
                <Partido equipo1={partido[0]} 
                         equipo2={partido[1]} 
                         key={index} 
                         habilitado={this.state.etapa == SEMIFINALES && partido[2] == POR_JUGAR? "true":"false"}/>
                <br/>
            </div>
        )

        return (
            <div className="col-md-3">
                <h4>Semifinales</h4>
                {partidos}
            </div>
        )
    }

    renderFinal() {
        return (
            <div className="col-md-3">
                <h4>Final</h4>
                <Partido equipo1={this.state.final[0]} 
                         equipo2={this.state.final[1]}  
                         habilitado={this.state.etapa == FINAL && this.state.final[2] == POR_JUGAR? "true":"false"}/>
                <br/>
            </div>
        )
    }

    renderBotonera() {
        return (
            <div className="row justify-content-left">
                <div className="col-md-8">
                    <button type="button" className="btn btn-primary mr-1">
                        Guardar Cambios
                    </button>
                </div>
            </div>
        )
    }
}