import React, { Component } from 'react';

export default class Partido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partido: {
        id: '',
        etapa: '',
        equipo1: '',
        equipo2: '',
        resultado1: '',
        resultado2: '',
        boton1: false,
        boton2: false,
      }
    }
  }

  input1Ref = React.createRef();
  input2Ref = React.createRef();

  componentDidMount() {
    console.log("entro");
    var partido = Object.assign({}, this.state.partido);
    if (this.props.partido) {
      partido = {
        id: this.props.clave,
        etapa: this.props.etapa,
        equipo1: this.props.nombre_equipo1,
        equipo2: this.props.nombre_equipo2,
        resultado1: this.props.partido.resultado1,
        resultado2: this.props.partido.resultado2,
        boton1: this.props.partido.boton1,
        boton2: this.props.partido.boton2,
      }
    }
    else {
      partido = {
        id: this.props.clave,
        etapa: this.props.etapa,
        equipo1: this.props.nombre_equipo1,
        equipo2: this.props.nombre_equipo2,
      }
    }
    this.setState({ partido });
  }

  allowNumbersOnly = (e) => {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }

  actualizarInputs = (e) => {
    let partido = Object.assign({}, this.state.partido);
    let valorInput1 = this.input1Ref.current.value;
    let valorInput2 = this.input2Ref.current.value;
    partido.equipo1= this.props.nombre_equipo1;
    partido.equipo2= this.props.nombre_equipo2;
    if (valorInput1 && valorInput1 && (valorInput1 != valorInput2)) {
      partido.boton1 = false;
      partido.boton2 = false;
    }
    if (e.target.id.includes("equipo1")) {
      partido.resultado1 = e.target.value;
    }
    else {
      partido.resultado2 = e.target.value;
    }
    this.setState({ partido }, () => this.props.actualizarPartidos(this.state.partido));
  }

  actualizarBotones = (e) => {
    let partido = Object.assign({}, this.state.partido);
    partido.equipo1= this.props.nombre_equipo1;
    partido.equipo2= this.props.nombre_equipo2;
    if (e.target.id.includes("equipo1")) {
      partido.boton1 = true;
      partido.boton2 = false;
      this.setState({ partido }, () => this.props.actualizarPartidos(this.state.partido));
    }
    else {
      partido.boton1 = false;
      partido.boton2 = true;
      this.setState({ partido }, () => this.props.actualizarPartidos(this.state.partido));
    }
  }

  handleChanges = (e) => {
    this.actualizarInputs(e);
  }

  render() {
    if (this.state.partido === "undefined") {
      return <tr></tr>
    }
    return (
      <tr>
        <th scope="row"></th>
        <td>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio"
              disabled={((this.state.partido.resultado1 || this.state.partido.resultado2) && this.state.partido.resultado1 !== this.state.partido.resultado2)}
              id={'ganador_equipo1_partido' + this.props.clave}
              name={'customRadio' + this.props.clave}
              className="custom-control-input"
              // ref={this.radio1Ref}
              onChange={this.actualizarBotones}
              checked={((this.state.partido.resultado1 || this.state.partido.resultado2) && this.state.partido.resultado1 !== this.state.partido.resultado2) ? false : this.state.partido.boton1 || false} />
            <label className="custom-control-label" htmlFor={'ganador_equipo1_partido' + this.props.clave}></label>
          </div>
        </td>
        <td>{this.props.nombre_equipo1}</td>
        <td>
          <div className="hidden-sm hidden-md hidden-lg">
            <input onKeyPress={this.allowNumbersOnly}
              value={this.state.partido.resultado1  || ''}
              id={'resultado_equipo1_partido' + this.props.clave}
              ref={this.input1Ref}
              type="text"
              className="form-control input-sm"
              onChange={this.handleChanges}></input>
          </div>
        </td>
        <td> - </td>
        <td>{this.props.nombre_equipo2}</td>
        <td>
          <input onKeyPress={this.allowNumbersOnly}
            value={this.state.partido.resultado2 || ''}
            id={'resultado_equipo2_partido' + this.props.clave}
            ref={this.input2Ref}
            type="text"
            className="form-control input-sm"
            onChange={this.handleChanges}></input>
        </td>
        <td>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio"
              disabled={((this.state.partido.resultado1 || this.state.partido.resultado2) && this.state.partido.resultado1 !== this.state.partido.resultado2)}
              id={'ganador_equipo2_partido' + this.props.clave}
              name={'customRadio' + this.props.clave}
              className="custom-control-input"
              onChange={this.actualizarBotones}
              checked={((this.state.partido.resultado1 || this.state.partido.resultado2) && this.state.partido.resultado1 !== this.state.partido.resultado2) ? false : this.state.partido.boton2 || false} />
            <label className="custom-control-label" htmlFor={'ganador_equipo2_partido' + this.props.clave}> </label>
          </div>
        </td>
      </tr>
    );
  }
}