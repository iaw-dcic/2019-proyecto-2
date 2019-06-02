import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class ColorBtn extends Component{
  render(){
    return(
      <div>
      {this.props.colo.color}
      {this.props.colo.id}
      </div>
    )
  }
}
