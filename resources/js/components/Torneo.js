import React, { Component } from 'react';
import Partido from './Partido';
import ListaTorneos from './ListaTorneos';
import Campeon from './Campeon';
import BrowserStorage from './BrowserStorage';
import TraductorJSON from './TraductorJSON';
import axios from 'axios';

export const OCTAVOS       = 0,
             CUARTOS       = 1,
             SEMIFINALES   = 2,
             FINAL         = 3,
             EQUIPO1       = 0,
             EQUIPO2       = 1,
             ESTADO        = 2,
             HIGHLIGHT     = 3,
             GANADOR       = 4,
             ON            = 1,
             OFF           = 0,
             JUGADO        = 0,
             POR_JUGAR     = 1,
             EQUIPO_ND     = "",
             NO_ID         = -1,
             NO_GANADOR    = -1,
             storage       = new BrowserStorage(),
             traductor     = new TraductorJSON();

export default class Torneo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:             NO_ID,
            octavos:        [],
            cuartos:        [],
            semifinales:    [],
            final:          [],
            campeon:        EQUIPO_ND,
            etapa:          OCTAVOS,
            cargarResponse: null
        }

        this.handleClickOctavos        = this.handleClickOctavos.bind(this)
        this.handleClickCuartos        = this.handleClickCuartos.bind(this)
        this.handleClickSemifis        = this.handleClickSemifis.bind(this)
        this.handleClickFinal          = this.handleClickFinal.bind(this)
        this.handleClickGuardar        = this.handleClickGuardar.bind(this)
        this.handleClickCargar         = this.handleClickCargar.bind(this)
        this.handleClickBorrar         = this.handleClickBorrar.bind(this)
        this.handleClickCargarTorneo   = this.handleClickCargarTorneo.bind(this)
        this.handleClickEliminarTorneo = this.handleClickEliminarTorneo.bind(this)
        this.handleClickNuevo          = this.handleClickNuevo.bind(this)
        this.highlight                 = this.highlight.bind(this)
        this.unhighlight                 = this.unhighlight.bind(this)
    }

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

        if (api_token != null)
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        var thisss = this
        axios.get('/api/torneoPred')
            .then(function (response) {
                thisss.setState({
                    octavos:        storage.getOctavos(response),
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
                        <h1 align="center">{this.state.id==NO_ID? "Nuevo Torneo":"Torneo "+this.state.id}</h1>
                        <Campeon nombre={this.state.campeon}/>
                    </div>
                </div>

                {this.renderPartidos()}
                
                <br/>

                {this.renderBotonera()}

                <br/>

                <ListaTorneos cargarResponse = {this.state.cargarResponse}
                              handleClickCargarTorneo = {this.handleClickCargarTorneo}
                              handleClickEliminarTorneo = {this.handleClickEliminarTorneo} />

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
            <div key={index} style={{marginTop: index%2==0 && index!=0?"12.3%":"0%"}}>    
                <Partido equipo1={partido[EQUIPO1]} 
                         equipo2={partido[EQUIPO2]} 
                         ganador={partido[GANADOR]}
                         id={index}
                         highlight = {partido[HIGHLIGHT]}
                         handlerClick={this.handleClickOctavos} 
                         handlerMouseOver={this.highlight}
                         handlerMouseOut={this.unhighlight}
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
            <div key={index} style={{marginTop:index!=0?"35%":"0%"}}>    
                <Partido equipo1={partido[EQUIPO1]} 
                         equipo2={partido[EQUIPO2]} 
                         ganador={partido[GANADOR]}
                         id={index} 
                         highlight={partido[HIGHLIGHT]}
                         handlerClick={this.handleClickCuartos} 
                         habilitado={this.state.etapa == CUARTOS && partido[ESTADO] == POR_JUGAR? "true":"false"}/>
                <br/>
            </div>
        )

        return (
            <div className="col-md-3">
                <h4 style={{marginBottom:"12.3%"}}>Cuartos de Final</h4>
                {partidos}
            </div>
        )
    }

    renderSemifinales() {
        const partidos = this.state.semifinales.map((partido, index) => 
            <div key={index} style={{marginTop:index==0?"40%":"100%"}}>    
                <Partido equipo1={partido[EQUIPO1]} 
                         equipo2={partido[EQUIPO2]}  
                         ganador={partido[GANADOR]}
                         id={index} 
                         highlight={partido[HIGHLIGHT]}
                         handlerClick={this.handleClickSemifis} 
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
                <div style={{marginTop:"100%"}}>
                <Partido equipo1={this.state.final[EQUIPO1]} 
                         equipo2={this.state.final[EQUIPO2]}  
                         id={0} 
                         highlight={this.state.final[HIGHLIGHT]}
                         handlerClick={this.handleClickFinal} 
                         habilitado={this.state.etapa == FINAL && this.state.final[ESTADO] == POR_JUGAR? "true":"false"}/>
                </div>
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
                    <button type="button" onClick={this.handleClickCargar} className="btn btn-primary mr-1">
                        Cargar Prode
                    </button>
                    <button type="button" onClick={this.handleClickBorrar} className="btn btn-default mr-1">
                        Deshacer Cambios
                    </button>
                    <button type="button" onClick={this.handleClickNuevo} className="btn btn-default mr-1">
                        Nuevo Torneo
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
        oct[nroPartido][GANADOR] = equipoGanador==oct[nroPartido][EQUIPO1]? EQUIPO1 : EQUIPO2

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
        cuar[nroPartido][GANADOR] = equipoGanador==cuar[nroPartido][EQUIPO1]? EQUIPO1 : EQUIPO2

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
        semi[nroPartido][GANADOR] = equipoGanador==semi[nroPartido][EQUIPO1]? EQUIPO1 : EQUIPO2

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

    handleClickGuardar() {
        var thisss = this

        if (this.state.id == NO_ID)
            axios.post('/api/torneos', { data: this.state }) 
                .then(function(response) {
                    thisss.setState({
                        id: response.data
                    })
                })
        else 
            axios.put('/api/torneos/'+this.state.id, { data: this.state })
    }

    handleClickCargar(e) {
        var thisss = this

        axios.get('/api/torneos')
            .then(function (response) {
                thisss.setState({
                    cargarResponse: response
                })
            })
    }

    handleClickCargarTorneo(e) {
        var thisss = this

        axios.get('/api/torneos/'+e.target.id)
            .then(function (response) {
                thisss.setState({
                    id: response.data[0].id,
                    campeon: response.data[0].campeon ? response.data[0].campeon:EQUIPO_ND,
                    etapa: response.data[0].etapa,
                    octavos: traductor.traducirOctavos(response.data[1]),
                    cuartos: traductor.traducirCuartos(response.data[2]),
                    semifinales: traductor.traducirSemifinales(response.data[3]),
                    final: traductor.traducirFinal(response.data[4])
                })
            })
    }

    handleClickBorrar() {
        storage.borrarMemoria()

        var thisss = this
        axios.get('/api/torneoPred')
            .then(function (response) {
                thisss.setState({
                    octavos:        storage.getOctavos(response),
                    cuartos:        storage.getCuartos(),
                    semifinales:    storage.getSemis(),
                    final :         storage.getFinal(),
                    campeon :       storage.getCampeon(),
                    etapa :         storage.getEtapa()
                })
            })
    }

    handleClickEliminarTorneo(e) {
        var thisss = this

        axios.delete('/api/torneos/'+e.target.id)
            .then(function(response) {
                axios.get('/api/torneos')
                    .then(function (response) {
                        thisss.setState({
                            id:             NO_ID,
                            cargarResponse: response
                        })
                    })
            })
    }

    handleClickNuevo() {
        storage.borrarMemoria()

        var thisss = this
        axios.get('/api/torneoPred')
            .then(function (response) {
                thisss.setState({
                    id:             NO_ID,
                    octavos:        storage.getOctavos(response),
                    cuartos:        storage.getCuartos(),
                    semifinales:    storage.getSemis(),
                    final :         storage.getFinal(),
                    campeon :       storage.getCampeon(),
                    etapa :         storage.getEtapa()
                })
            })
    }

    highlight(e) {
        var id = e.target.id
        var posEnCuartos = Math.floor(id/2)
        var posEnSemis = Math.floor(posEnCuartos/2)

        var oct = this.state.octavos
        oct[id][HIGHLIGHT] = ON
        var cuar = this.state.cuartos
        cuar[posEnCuartos][HIGHLIGHT] = ON
        var semi = this.state.semifinales
        semi[posEnSemis][HIGHLIGHT] = ON
        var fin = this.state.final
        fin[HIGHLIGHT] = ON

        this.setState({
            octavos: oct,
            cuartos: cuar,
            semifinales :semi,
            final: fin
        })
    }

    unhighlight(e) {
        var id = e.target.id
        var posEnCuartos = Math.floor(id/2)
        var posEnSemis = Math.floor(posEnCuartos/2)

        var oct = this.state.octavos
        oct[id][HIGHLIGHT] = OFF
        var cuar = this.state.cuartos
        cuar[posEnCuartos][HIGHLIGHT] = OFF
        var semi = this.state.semifinales
        semi[posEnSemis][HIGHLIGHT] = OFF
        var fin = this.state.final
        fin[HIGHLIGHT] = OFF

        this.setState({
            octavos: oct,
            cuartos: cuar,
            semifinales :semi,
            final: fin
        })
    }
}