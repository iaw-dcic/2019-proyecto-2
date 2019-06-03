import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class ConfirmBtn extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {}
    }

    render(){
      return(
        <div>
          <button onClick={this.props.handler}>Confirm</button>
        </div>
      )
    }

}
