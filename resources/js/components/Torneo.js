import React, { Component } from 'react';
import Partido from './Partido';
import Campeon from './Campeon';
import BrowserStorage from './BrowserStorage';
import axios from 'axios';

export const OCTAVOS       = 0,
             CUARTOS       = 1,
             SEMIFINALES   = 2,
             FINAL         = 3,
             EQUIPO1       = 0,
             EQUIPO2       = 1,
             ESTADO        = 2,
             JUGADO        = 0,
             POR_JUGAR     = 1,
             EQUIPO_ND     = "",
             storage       = new BrowserStorage();

export default class Torneo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            octavos:        [],
            cuartos:        [],
            semifinales:    [],
            final:          [],
            campeon:        EQUIPO_ND,
            etapa:          OCTAVOS
        }

        this.handleClickOctavos = this.handleClickOctavos.bind(this)
        this.handleClickCuartos = this.handleClickCuartos.bind(this)
        this.handleClickSemifis = this.handleClickSemifis.bind(this)
        this.handleClickFinal   = this.handleClickFinal.bind(this)
        this.handleClickGuardar = this.handleClickGuardar.bind(this)
    }

    componentDidMount() {
        var thisss = this
        axios.get('/api/torneoPred')
            .then(function (response) {
                var oct = [ ["", "", POR_JUGAR], 
                            ["", "", POR_JUGAR],
                            ["", "", POR_JUGAR],
                            ["", "", POR_JUGAR],
                            ["", "", POR_JUGAR],
                            ["", "", POR_JUGAR],
                            ["", "", POR_JUGAR],
                            ["", "", POR_JUGAR],] 

                var i = 0, j = 0
                for (var equipo of response.data) {
                    oct[i][j] = equipo.name
                    if (j==1) {
                        j=0
                        i++
                    } else
                        j++
                }
                
                thisss.setState({
                    octavos:        storage.getOctavos(oct),
                    cuartos:        storage.getCuartos(),
                    semifinales:    storage.getSemis(),
                    final :         storage.getFinal(),
                    campeon :       storage.getCampeon(),
                    etapa :         storage.getEtapa()
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Torneo</h1>
                        <Campeon nombre={this.state.campeon}/>
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
                <Partido equipo1={partido[EQUIPO1]} 
                         equipo2={partido[EQUIPO2]} 
                         key={index} 
                         id={index}
                         handler={this.handleClickOctavos} 
                         habilitado={this.state.etapa == OCTAVOS && partido[ESTADO] == POR_JUGAR? "true":"false"}/>
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
                <Partido equipo1={partido[EQUIPO1]} 
                         equipo2={partido[EQUIPO2]} 
                         key={index+8} 
                         id={index} 
                         handler={this.handleClickCuartos} 
                         habilitado={this.state.etapa == CUARTOS && partido[ESTADO] == POR_JUGAR? "true":"false"}/>
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
                <Partido equipo1={partido[EQUIPO1]} 
                         equipo2={partido[EQUIPO2]} 
                         key={index+12} 
                         id={index} 
                         handler={this.handleClickSemifis} 
                         habilitado={this.state.etapa == SEMIFINALES && partido[ESTADO] == POR_JUGAR? "true":"false"}/>
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
                <Partido equipo1={this.state.final[EQUIPO1]} 
                         equipo2={this.state.final[EQUIPO2]}  
                         key={14}
                         id={0} 
                         handler={this.handleClickFinal} 
                         habilitado={this.state.etapa == FINAL && this.state.final[ESTADO] == POR_JUGAR? "true":"false"}/>
                <br/>
            </div>
        )
    }

    renderBotonera() {
        return (
            <div className="row justify-content-left">
                <div className="col-md-8">
                    <button type="button" onClick={this.handleClickGuardar} className="btn btn-primary mr-1">
                        Guardar Cambios
                    </button>
                    <button type="button" className="btn btn-primary mr-1">
                        Cargar Prode
                    </button>
                </div>
            </div>
        )
    }

    handleClickOctavos(e) {
        var oct = this.state.octavos
        var cuar = this.state.cuartos

        var equipoGanador = e.target.innerHTML
        var nroPartido = e.target.id
        var posEnCuartos = Math.floor(nroPartido/2)
        
        cuar[posEnCuartos][EQUIPO1] == EQUIPO_ND? cuar[posEnCuartos][EQUIPO1] = equipoGanador:
                                                  cuar[posEnCuartos][EQUIPO2] = equipoGanador

        oct[nroPartido][ESTADO] = JUGADO

        var nuevaEtapa = CUARTOS
        for (const partido of oct) {
            if (partido[ESTADO] == POR_JUGAR) {
                nuevaEtapa = OCTAVOS
                break
            }
        }

        storage.saveOctavos(oct)
        storage.saveCuartos(cuar)
        storage.saveEtapa(nuevaEtapa)

        this.setState({
            octavos: oct,
            cuartos: cuar,
            etapa: nuevaEtapa
        })
    }

    handleClickCuartos(e) {
        var cuar = this.state.cuartos
        var semi = this.state.semifinales

        var equipoGanador = e.target.innerHTML
        var nroPartido = e.target.id
        var posEnSemis = Math.floor(nroPartido/2)
        
        semi[posEnSemis][EQUIPO1] == EQUIPO_ND? semi[posEnSemis][EQUIPO1] = equipoGanador:
                                                semi[posEnSemis][EQUIPO2] = equipoGanador

        cuar[nroPartido][ESTADO] = JUGADO

        var nuevaEtapa = SEMIFINALES
        for (const partido of cuar) {
            if (partido[ESTADO] == POR_JUGAR) {
                nuevaEtapa = CUARTOS
                break
            }
        }

        storage.saveCuartos(cuar)
        storage.saveSemis(semi)
        storage.saveEtapa(nuevaEtapa)

        this.setState({
            cuartos: cuar,
            semifinales: semi,
            etapa: nuevaEtapa
        })
    }

    handleClickSemifis(e) {
        var semi = this.state.semifinales
        var fin = this.state.final

        var equipoGanador = e.target.innerHTML
        var nroPartido = e.target.id
        
        fin[EQUIPO1] == EQUIPO_ND? fin[EQUIPO1] = equipoGanador:
                                   fin[EQUIPO2] = equipoGanador

        semi[nroPartido][ESTADO] = JUGADO

        var nuevaEtapa = FINAL
        for (const partido of semi) {
            if (partido[ESTADO] == POR_JUGAR) {
                nuevaEtapa = SEMIFINALES
                break
            }
        }

        storage.saveSemis(semi)
        storage.saveFinal(fin)
        storage.saveEtapa(nuevaEtapa)

        this.setState({
            semifinales: semi,
            final: fin,
            etapa: nuevaEtapa
        })
    }

    handleClickFinal(e) {
        var fin = this.state.final
        var champion = e.target.innerHTML

        fin[ESTADO] = JUGADO

        storage.saveFinal(fin)
        storage.saveCampeon(champion)

        this.setState({
            final: fin,
            campeon: champion
        })
    }

    handleClickGuardar(e) {
        
    }
}