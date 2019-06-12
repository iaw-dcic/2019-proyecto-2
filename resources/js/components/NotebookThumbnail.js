import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class NotebookThumbnail extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
    }
    componentWillMount(){
    }
  render(){


    return(
      <div class="col-sm thumbnailcentrado" >
           <img src={this.props.valor.stickerurl} class="img-thumbnail edit-thumbnail" onClick={()=>this.props.handler(this.props.valor)} data-dismiss="modal"></img>
      </div>


    )
  }
}
