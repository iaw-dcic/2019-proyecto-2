import React, { Component } from 'react';

export default class Partido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto_input1: '',
      texto_input2: '',
    }
  }

  radio1Ref = React.createRef();
  radio2Ref = React.createRef();
  input1Ref = React.createRef();
  input2Ref = React.createRef();


  componentDidMount() {
    const input1 = this.props.resultados['resultado_equipo1_partido' + this.props.clave];
    const input2 = this.props.resultados['resultado_equipo2_partido' + this.props.clave]
    this.setState({ texto_input1: input1, texto_input2: input2 });
  }

  allowNumbersOnly = (e) => {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }

  actualizarState = (e) => {
    if (e.target.id.includes("equipo1")) {
      const input1 = e.target.value;
      this.setState({ texto_input1: input1 });
    }
    else {
      const input2 = e.target.value;
      this.setState({ texto_input2: input2 });
    }
  }

  handleChanges = (e) => {
    this.props.onChanges(e);
    this.actualizarState(e);
    var valorInput1 = this.input1Ref['current'].value;
    var valorInput2 = this.input2Ref['current'].value
    if(valorInput1 && valorInput1 && (valorInput1!=valorInput2)){
      this.props.desactivarBoton(this.radio1Ref['current'].id, this.radio2Ref['current'].id)
    }
  }

  render() {
    if (!this.props.resultadoBotones) {
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
              ref={this.radio1Ref}
              onChange={this.props.actualizarResultadosBotones}
              checked={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2) ? false: this.props.resultadoBotones['ganador_equipo1_partido' + this.props.clave]} />
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
              ref={this.radio2Ref}
              disabled={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2)}
              id={'ganador_equipo2_partido' + this.props.clave}
              name={'customRadio' + this.props.clave}
              className="custom-control-input"
              onChange={this.props.actualizarResultadosBotones}
              checked={((this.state.texto_input1 || this.state.texto_input2) && this.state.texto_input1 != this.state.texto_input2) ? false : this.props.resultadoBotones['ganador_equipo2_partido' + this.props.clave]} />
            <label className="custom-control-label" htmlFor={'ganador_equipo2_partido' + this.props.clave}> </label>
          </div>
        </td>
      </tr>
    );
  }
}