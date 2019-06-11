import React, { Component } from 'react';
import API from './api';

// import axios from 'axios';
// axios.defaults.baseURL = 'http://iaw-proy2.test';

function RenderFormRow(props) {
  return (
    <div className="form-group row">
      <label htmlFor={props.feature} className="col-sm-3 col-form-label">{props.feature}</label>
      <div className="col-sm-9">
        <select id={props.feature} name={props.feature} value={props.current_option} onChange={props.onChange} className="form-control">
          {
            props.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default class AvatarForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   current_options: props.current_options, // {'feature1':'current_option', 'feature2':'current_option', ... }
    // };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.current_options !== prevProps.current_options) {
  //     this.setState({ 'current_options': this.props.current_options});
  //   }
  // }

  // componentDidMount() {
  //   axios.get('/avatar/caracteristicas-con-opciones')
  //     .then(res => {
  //       const features = res.data;
  //       this.setState({ features });
  //       this.defaultOptions();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   // axios.get('user/avatar')
  //   //   .then((res) => {
  //   //     const current_options = res.data;
  //   //     this.setState({ current_options });
  //   //     // console.log("axios current_options",current_options);
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   })
  // }

  // handleChange(event) {
  //   const target = event.target;
  //   const option = target.value;
  //   const feature = target.name;
  //   const current_options = this.state.current_options;
  //   current_options[feature] = option;
  //   this.setState({ current_options })
  // }

  // handleSubmit(event) {
  //   // console.log(this.state.current_options);
  //   axios.put('/user/avatar', { avatar_id: 1, data: this.state.current_options })
  //     .then(response => {
  //       this.setState({ alert_message: "success" });
  //       // this.delayAlertState();
  //     })
  //     .catch(error => {
  //       // console.log(error);
  //       this.setState({ alert_message: "error" })
  //     });
  //   event.preventDefault();
  // }

  armarImgUrl() {
    const imgBaseUrl = window.location.origin + "/avatar?";
    const options = this.props.current_options;
    let url = imgBaseUrl;
    if (Object.values(options).length == 0) {
    // if (options == null) {
      url = imgBaseUrl + "wait=loading";
      return url;
    }
    let aux;
    const optionsKeys = Object.keys(options);
    for (let i = 0; i < optionsKeys.length; i++) {
      let aux = optionsKeys[i] + "=" + options[optionsKeys[i]] + "&";
      url += aux;
    }
    url = encodeURI(url);
    // console.log(url);
    return url;
  }


  render() {
    const features = this.props.features;
    const formRows = [];
    let current_options = this.props.current_options;
    features.forEach((element) => {
      formRows.push(
        <RenderFormRow
          feature={element.feature} key={element.feature} current_option={current_options[element.feature]}
          options={element.options} onChange={(e) => this.props.onChange(e)}
        />);
    });
    // Por ultimo se agrega el boton de submit
    if (formRows.length > 0) {
      formRows.push(
        (
          <div key="button" className="form-group row">
            <div className="ml-auto pr-3">
              { this.props.isAvatarUpdate ? (<button className="btn btn-secondary mr-2" onClick={this.props.onClickEndUpdate}>Finalizar edición</button>) : ''}
              <input type="submit" value={ this.props.isAvatarUpdate ? 'Guardar cambios' : 'Crear avatar'} className={this.props.isAvatarUpdate ? 'btn btn-primary' : 'btn btn-success'} />
            </div>
          </div>
        )
      );
    }
    if (Object.values(features).length == 0) {
      formRows.push((<p key="cargando">Cargando...</p>));
    }


    return (
      <div>
        <h2 className="">Personaliza tu avatar</h2>
        <div className="row pb-0 mb-0">
          <div className="col-md-4">
            <img
              src={this.armarImgUrl()}
              className="mx-auto d-block w-75"
            />
          </div>
          <div className="col-md-8">
            <form onSubmit={this.props.onSubmit} className="pt-4">
              {formRows}
            </form>

          </div>
        </div>
        <br />
      </div>
    );
  }
}


