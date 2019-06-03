import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './page.css';
import ColorBtn from './ColorBtn.js'

export default class Colores extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {
          col: []
        }


    }
    componentWillMount(){
      fetch('/api/v1/color').then(
           (response)=>{
               return response.json();
           }   )
       .then(colors => {
           this.setState({ col: colors });
       });
    }
  render(){
    return(
      <div ClassName="container">

        <h3>Color</h3>
        {
          this.state.col.map(color => <ColorBtn valor={color} handler={this.props.handler}/>)
        }

      </div>
    );
  }
}
