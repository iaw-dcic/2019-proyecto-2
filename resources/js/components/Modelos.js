import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './page.css'
import ModeloBtn from './ModeloBtn'

export default class Modelos extends Component {
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {
          modelos: []
        }

    }
    render() {
        return (
            <div className="container">
              <h3>Modelos</h3>
              {this.state.modelos.map(modelo => <ModeloBtn valor={modelo} handler={this.props.handler}/>)}
            </div>
        );
    }
    componentWillMount(){
      fetch('/api/v1/modelo').then(
           (response)=>{
               return response.json();
           }   )
       .then(m => {
           this.setState({ modelos: m });
       });
    }

}
