import React, { Component } from 'react';
import API from './api';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
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
    this.state = {
      features: [], // con las opciones
      current_options: {}, // {'feature1':'current_option', 'feature2':'current_option', ... }
      alert_message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  delayAlertState() {
    setTimeout(() => {
        this.setState({
        alert_message: false
      })
    }, 2000);
  }

  componentDidMount() {
    axios.get('/avatar/caracteristicas-con-opciones')
      .then(res => {
        const features = res.data;
        this.setState({ features });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('user/avatar')
      .then((res) => {
        const current_options = res.data;
        this.setState({ current_options });
        // console.log("axios current_options",current_options);
      })
      .catch(function (error) {
        console.log(error);
      })
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
    // console.log(this.state.current_options);
    axios.put('/user/avatar', { data: this.state.current_options })
      .then(response => {
        this.setState({ alert_message: "success" });
        // this.delayAlertState();
      })
      .catch(error => {
        // console.log(error);
        this.setState({ alert_message: "error" })
      });
    event.preventDefault();
  }

  armarImgUrl() {
    const imgBaseUrl = window.location.origin + "/avatar?";
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
    features.forEach((element) => {
      formRows.push(
        <RenderFormRow
          feature={element.feature} key={element.feature} current_option={this.state.current_options[element.feature]}
          options={element.options} onChange={(e) => this.handleChange(e)}
        />);
    });

    return (
      <div>
        {this.state.alert_message == 'success' ? <SuccessAlert /> : null}
        {this.state.alert_message == 'error' ? <ErrorAlert /> : null}
        <h2 className="">Personaliza tu avatar</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src={this.armarImgUrl()}
              className="mx-auto d-block w-75"
            />
          </div>
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit} className="pt-4">
              {formRows}
              <div className="form-group row">
                <div className="col-sm-9 offset-sm-3">
                  <input type="submit" value="Guardar" className="btn btn-primary" />
                </div>
              </div>
            </form>

          </div>
        </div>
        <br />
      </div>
    );
  }
}


