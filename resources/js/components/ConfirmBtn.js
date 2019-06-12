import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class ConfirmBtn extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {
        msg: "Estas seguro que queres guardar tu notebook?",
      }
    }

    render(){
      return(
        <div>
          <button className="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModal" >Guardar</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Guarda Tu Notebook</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                      {this.state.msg}
                      <button className="btn btn-success" onClick={this.props.handler} data-dismiss="modal" >Guardar Notebook</button>


                  </div>

                </div>
              </div>
            </div>



        </div>
      )
    }

}
