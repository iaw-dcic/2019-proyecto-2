import React, { Component } from 'react';

export default class Partido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partido: {
        id: '',
        equipo1: '',
        equipo2: '',
        resultado1: '',
        resultado2: '',
        boton1: '',
        boton2: '',
      }
    }
  }

  input1Ref = React.createRef();
  input2Ref = React.createRef();

  componentDidMount() {
    console.log(this.props.partido)
    var partido = Object.assign({}, this.state.partido);
    if (this.props.partido) {
      partido = {
        id: this.props.clave,
        equipo1: this.props.partido.equipo1,
        equipo2: this.props.partido.equipo2,
        resultado1: this.props.partido.resultado1,
        resultado2: this.props.partido.resultado2,
        boton1: this.props.partido.boton1,
        boton2: this.props.partido.boton2,
      }
    }
    else{
      partido = {
        id: this.props.clave,
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
      let valorInput1 = this.input1Ref.current.value;;
      let valorInput2 = this.input2Ref.current.value;;
      if (valorInput1 && valorInput1 && (valorInput1 != valorInput2)) {
        partido.boton1 = false;
        partido.boton2 = false;
      }
      if (e.target.id.includes("equipo1")) {
        partido.resultado1 = e.target.value;
        const input1 = e.target.value;
        this.setState({ texto_input1: input1, partido }, () => this.props.actualizarPartidos(this.state.partido));
      }
      else {
        partido.resultado2 = e.target.value;
        const input2 = e.target.value;
        this.setState({ texto_input2: input2, partido }, () => this.props.actualizarPartidos(this.state.partido));
      }
    }

    actualizarBotones = (e) => {
      let partido = Object.assign({}, this.state.partido);
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
      this.props.actualizarResultadosBotones(e);
    }

    handleChanges = (e) => {
      this.props.onChanges(e);
      this.actualizarInputs(e);
      // let valorInput1 = this.state.resultado1;
      // let valorInput2 = this.state.resultado2;
      // if (valorInput1 && valorInput1 && (valorInput1 != valorInput2)) {
      //   this.props.desactivarBoton(this.radio1Ref['current'].id, this.radio2Ref['current'].id)
      // }
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
                disabled={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2)}
                id={'ganador_equipo1_partido' + this.props.clave}
                name={'customRadio' + this.props.clave}
                className="custom-control-input"
                // ref={this.radio1Ref}
                onChange={this.actualizarBotones}
                checked={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2) ? false : this.state.partido.boton1 || false} />
              <label className="custom-control-label" htmlFor={'ganador_equipo1_partido' + this.props.clave}></label>
            </div>
          </td>
          <td>{this.props.nombre_equipo1}</td>
          <td>
            <div className="hidden-sm hidden-md hidden-lg">
              <input onKeyPress={this.allowNumbersOnly}
                value={this.props.resultadoEquipo1}
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
              value={this.props.resultadoEquipo2}
              id={'resultado_equipo2_partido' + this.props.clave}
              ref={this.input2Ref}
              type="text"
              className="form-control input-sm"
              onChange={this.handleChanges}></input>
          </td>
          <td>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio"
                disabled={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2)}
                id={'ganador_equipo2_partido' + this.props.clave}
                name={'customRadio' + this.props.clave}
                className="custom-control-input"
                onChange={this.actualizarBotones}
                checked={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2) ? false : this.state.partido.boton2 || false} />
              <label className="custom-control-label" htmlFor={'ganador_equipo2_partido' + this.props.clave}> </label>
            </div>
          </td>
        </tr>
      );
    }
  }