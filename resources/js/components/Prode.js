import React, { Component } from 'react'
import Panel from './Panel'

export default class Prode extends Component {

  constructor() {
    super();
    this.state = {
      idPartido: 6,
      equipos: [],
      partidos: [],
    }
  }

  siguienteEtapa = {
    cuartos: "semifinal",
    semifinal: "final"
  }

  componentDidMount() {
    const partidosEnLS = localStorage.getItem('partidos');
    fetch('http://localhost:8000/equipos')
      .then(response => {
        return response.json();
      })
      .then(equipos => {
        this.setState({ equipos }, () => this.inicializarPartidos(partidosEnLS));
      });

  }

  inicializarPartidos = (partidosEnLS) => {
    if (partidosEnLS && partidosEnLS.length > 2) {
      var partidos = JSON.parse(partidosEnLS);
      this.setState({ partidos });
    }
    else {
      this.inicializarPartidos();
    }
  }

  componentDidUpdate() {
    localStorage.setItem('partidos', JSON.stringify(this.state.partidos));
  }

  actualizarPartidos = (partido) => {
    console.log(partido);
    let partidos = { ...this.state.partidos };
    let partidoActualizar = { ...this.state.partidos[partido.id] }
    partidoActualizar = partido;
    partidos[partido.id] = partidoActualizar;
    this.setState({ partidos });
  }

  crearGanadoresSiguienteEtapa = (etapaActual, siguienteEtapa) => {
    var partidos = { ...this.state.partidos }
    var partidosValues = Object.values(this.state.partidos);
    partidosValues.filter(partido =>
      partido.etapa === etapaActual
    ).map(partido => {
      let idSiguienteEtapa = Math.floor(partido.id / 2) + 4;
      let equipoActualizar = "equipo" + (Math.floor(partido.id % 2) + 1);
      let partidoSiguienteEtapa = { ...partidos[idSiguienteEtapa] };
      partidoSiguienteEtapa.etapa = this.siguienteEtapa[etapaActual];
      partidoSiguienteEtapa.id = idSiguienteEtapa;
      if (partido.boton1 || (partido.resultado1 > partido.resultado2)) {
        partidoSiguienteEtapa[equipoActualizar] = partido.equipo1
      }
      else if (partido.boton2 || (partido.resultado1 < partido.resultado2)) {
        partidoSiguienteEtapa[equipoActualizar] = partido.equipo2
      }
      else {
        partidoSiguienteEtapa[equipoActualizar] = "N/A"
      }
      partidos[idSiguienteEtapa] = partidoSiguienteEtapa;
    });
    this.setState({ partidos });
  }

  inicializarPartidos = () => {
    var partidos = { ...this.state.partidos };
    partidos = [];
    var equiposDup = [... this.state.equipos];
    var arregloIzquierda = equiposDup.splice(0, Math.floor(equiposDup.length / 2));
    var arregloDerecha = equiposDup;
    var partidoCuartos = arregloIzquierda.map(equipo => {
      let cuartos = {
        id: equipo.id,
        etapa: "cuartos",
        equipo1: equipo.nombre_equipo,
        equipo2: arregloDerecha[equipo.id].nombre_equipo,
        boton1: false,
        boton2: false,
        resultado1: 0,
        resultado2: 0,
      }
      partidos.push(cuartos);
    })
    console.log("ENTRO");

    //Agregar semifinales
    var id = 4;
    for (var i = 0; i < 2; i++) {
      let semifinal = {
        id: id++,
        etapa: "semifinal",
        equipo1: "N/A",
        equipo2: "N/A",
        boton1: false,
        boton2: false,
        resultado1: 0,
        resultado2: 0,
      }
      partidos.push(semifinal);
    }

    let final = {
      id: 6,
      etapa: "final",
      equipo1: "N/A",
      equipo2: "N/A",
      boton1: false,
      boton2: false,
      resultado1: 0,
      resultado2: 0,
    }
    partidos.push(final);

    this.setState({ partidos });
  }

  guardarCambios = (e) => {
    axios.post("/partidos", this.state.partidos).then(response => {
      console.log(response);
    }).catch(error => {
      console.log("this is error", error);
    });
  }  

  actualizarCambios = (e) => {
    axios.put("/partidos", this.state).then(response => {
      console.log(response);
    }).catch(error => {
      console.log("this is error", error);
    });
  }  

  render() {
    return (
      <div>
        <Panel etapa="cuartos" siguienteEtapa={this.siguienteEtapa["cuartos"]} equipos={this.state.equipos} partidos={this.state.partidos} actualizarPartidos={this.actualizarPartidos} crearGanadoresSiguienteEtapa={this.crearGanadoresSiguienteEtapa} />
        <Panel etapa="semifinal" siguienteEtapa={this.siguienteEtapa["semifinal"]} equipos={this.state.equipos} partidos={this.state.partidos} actualizarPartidos={this.actualizarPartidos} crearGanadoresSiguienteEtapa={this.crearGanadoresSiguienteEtapa} />
        <Panel etapa="final" siguienteEtapa="" equipos={this.state.equipos} partidos={this.state.partidos} actualizarPartidos={this.actualizarPartidos} crearGanadoresSiguienteEtapa={this.crearGanadoresSiguienteEtapa} />
        <div className="col-xs-12 text-center">
          <button type="button" onClick={this.actualizarCambios} className="btn btn-primary text-center center">
            Guardar
          </button>
        </div>
      </div>
    )
  }
}