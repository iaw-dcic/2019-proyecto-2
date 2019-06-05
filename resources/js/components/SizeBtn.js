import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class SizeBtn extends Component{
  render(){
    return(
      <div>

      <button className="btn btn-light btn-sm" onClick={()=>this.props.handler(this.props.valor.id)}>{this.props.valor.size} "</button>

      </div>
    )
  }
}
