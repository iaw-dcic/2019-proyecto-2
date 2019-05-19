import React, { Component } from 'react'
import Cuartos from './Cuartos'
import Semifinal from './Semifinal'



export default class Prode extends Component {

  constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
      equipos: [],
      partidoCuartos: [],
      resultados: {
        resultado_equipo1_partido0: "",
        resultado_equipo2_partido0: "",
        resultado_equipo1_partido1: "",
        resultado_equipo2_partido1: "",
        resultado_equipo1_partido2: "",
        resultado_equipo2_partido2: "",
        resultado_equipo1_partido3: "",
        resultado_equipo2_partido3: "",
        resultado_equipo1_partido4: "",
        resultado_equipo2_partido4: "",
        resultado_equipo1_partido5: "",
        resultado_equipo2_partido5: "",
        resultado_equipo1_partido6: "",
        resultado_equipo2_partido6: "",
      },
      ganadoresCuartos: {
        ganador_partido1: "Ganador partido 1",
        ganador_partido2: "Ganador partido 2",
        ganador_partido3: "Ganador partido 3",
        ganador_partido4: "Ganador partido 4",
      },
    }
  }

  componentDidMount() {
    //Get equipos
    fetch('http://localhost:8000/equipos')
      .then(response => {
        return response.json();
      })
      .then(equipos => {
        this.setState({ equipos });
      });
    //Check local storage
    const resultadosEnLS = localStorage.getItem('resultados');
    if (resultadosEnLS) {
      var resultados = JSON.parse(resultadosEnLS);
      this.setState({ resultados });
    }
  }

  handleChanges = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    let resultados = { ...this.state.resultados };
    let resultado = { ...resultados[id] };
    resultado = value;
    resultados[id] = resultado;

    this.setState({ resultados });
    localStorage.setItem('resultados', JSON.stringify(this.state.resultados));
  }

  crearGanadoresCuartos = () => {
    console.log("entro");
    var ganadoresCuartos = { ...this.state.ganadoresCuartos };
    for (var i = 0; i < this.state.equipos.length / 2; i++) {
      let primerResultado = 'resultado_equipo1_partido' + i;
      let segundoResultado = 'resultado_equipo2_partido' + i;
      // console.log(primerResultado);
      // console.log(segundoResultado);
      if (this.state.resultados[primerResultado] && this.state.resultados[segundoResultado]) { //check not null
        var partidoActualizar = 'ganador_partido' + (i+1);
        console.log(partidoActualizar);
        if (this.state.resultados[primerResultado] > this.state.resultados[segundoResultado]) {
          var indexEquipoGanador = i;
        }
        else {
          var indexEquipoGanador = i + 4;
        }

        var ganador = { ...ganadoresCuartos[partidoActualizar] };
        ganador = this.state.equipos[indexEquipoGanador].nombre_equipo;
        console.log(ganador);
        ganadoresCuartos[partidoActualizar] = ganador;
      }
    }
    this.setState({ ganadoresCuartos });
  }

  render() {
    return (
      <div>
        <Cuartos state={this.state} handleChanges={this.handleChanges} crearGanadoresCuartos={this.crearGanadoresCuartos} />
        <Semifinal equipos={this.state.equipos} resultados={this.state.resultados} ganadoresCuartos={this.state.ganadoresCuartos} handleChanges={this.handleChanges} />
      </div>
    )
  }
}