import React, { Component } from 'react';
import Partido from './Partido';

export default class Cuartos extends Component {

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
      }
    }
  }

  handleChanges = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    console.log(event.target.id);
    console.log(event.target.value);
    // 1. Make a shallow copy of the items
    let resultados = { ...this.state.resultados };
    console.log(resultados);
    // 2. Make a shallow copy of the item you want to mutate
    let resultado = { ...resultados[id] };
    console.log(resultado);
    // 3. Replace the property you're intested in
    resultado = value;
    console.log(resultado);
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    resultados[id] = resultado;
    console.log(resultados);
    // 5. Set the state to our new copy
    this.setState({ resultados });
    localStorage.setItem('resultados', JSON.stringify(this.state.resultados));
  }

  handleSubmit(event) {
    event.preventDefault();
  };

  componentDidMount() {
    /* fetch API in action */
    fetch('http://localhost:8000/equipos')
      .then(response => {
        return response.json();
      })
      .then(equipos => {
        //Fetched product is stored in the state
        this.setState({ equipos });
      });
    const resultadosEnLS = localStorage.getItem('resultados');
    console.log(resultadosEnLS);
    console.log(JSON.parse(resultadosEnLS));
    if (resultadosEnLS) {
      var resultados = JSON.parse(resultadosEnLS);
      this.setState({ resultados });
    }

  }

  renderEquipos() {
    var partidoCuartos = this.crearCuartos();
    return partidoCuartos.map(partido => {
      let resultadoEquipo1 = this.state.resultados['resultado_equipo1_partido' + partido.id];
      let resultadoEquipo2 = this.state.resultados['resultado_equipo2_partido' + partido.id];
      return <Partido resultadoEquipo1={resultadoEquipo1} resultadoEquipo2={resultadoEquipo2} onChanges={this.handleChanges} clave={partido.id} key={partido.id} nombre_equipo1={partido.nombre_equipo1} nombre_equipo2={partido.nombre_equipo2}></Partido>
    })
  }

  crearCuartos() {
    var equiposDup = [... this.state.equipos];
    var arregloIzquierda = equiposDup.splice(0, Math.floor(equiposDup.length / 2));
    var arregloDerecha = equiposDup;
    var partidoCuartos = arregloIzquierda.map(equipo => {
      return {
        id: equipo.id,
        nombre_equipo1: equipo.nombre_equipo,
        nombre_equipo2: arregloDerecha[equipo.id].nombre_equipo
      }
    })
    return partidoCuartos;
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipo 1</th>
                    <th scope="col">Resultado 1</th>
                    <th scope="col"> - </th>
                    <th scope="col">Equipo 2</th>
                    <th scope="col">Resultado 2</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.renderEquipos()
                  }
                </tbody>
              </table>
              <div className="col-xs-12 text-center">
                <button type="submit" className="btn btn-primary text-center center">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
