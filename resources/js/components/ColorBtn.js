import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class ColorBtn extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
    }
    componentWillMount(){
    }
  render(){
    const stylee={
      'background-color': this.props.valor.color,
    }

    return(
      <div class="col-sm">
           <button type="button" class="btn btn-default btn-circle" style={stylee} onClick={()=>this.props.handler(this.props.valor.id)}></button>
      </div>


    )
  }
}
