import React, { Component } from 'react';
import API from './api';
// import axios from 'axios';
// axios.defaults.baseURL = 'http://iaw-proy2.test';

const imgStyle = {
  width: '250px',
};

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
    this.state = {
      features: [],
      current_options: {} // {'feature':'current_option'}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/avatar/caracteristicas-con-opciones')
      .then(res => {
        const features = res.data;
        const current_options = {};
        // this.setState({ features });
        features.forEach(element => {
          // Elijo la primera opcion de cada feature como la current option
          current_options[element.feature] = element.options[0] ? element.options[0] : '';
        });
        this.setState({ features, current_options });
      })
      .catch(function (error) {
        // handle error
        console.log("Ocurrio el siguiente error:");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  handleChange(event) {
    const target = event.target;
    const option = target.value;
    const feature = target.name;
    const current_options = this.state.current_options;
    current_options[feature] = option;
    this.setState({ current_options })
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  armarImgUrl() {
    const imgBaseUrl = "http://iaw-proy2.test/avatar?";
    const options = this.state.current_options;
    let url = imgBaseUrl;
    if (Object.values(options).length == 0) {
      url = imgBaseUrl + "wait=loading";
      return url;
    }
    const features = this.state.features;
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

    const features = this.state.features;
    const formRows = [];
    features.forEach( (element) => {
      formRows.push(
        <RenderFormRow
          feature={element.feature} key={element.feature} current_option={this.state.current_options[element.feature]}
          options={element.options} onChange={(e) => this.handleChange(e)}
      />);
    });

    return (
      <div>
        <img
          src={this.armarImgUrl()}
          className="mx-auto mb-2 d-block" style={imgStyle}
        />
        <br />
        <form onSubmit={this.handleSubmit}>
          {formRows}
          <div className="form-group row">
            <div className="col-sm-9 offset-3">
              <input type="submit" value="Guardar" className="btn btn-primary" />
            </div>
          </div>
        </form>

      </div>
    );
  }
}
