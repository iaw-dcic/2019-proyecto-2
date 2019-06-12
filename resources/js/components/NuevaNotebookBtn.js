import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'

export default class NuevaNotebookBtn extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {
        msg: "Estas seguro que queres crear una nueva notebook?",
      }
    }

    render(){
      return(
        <div>
          <button className="btn-info btn-sm" data-toggle="modal" data-target="#nuevaModal" >Nueva</button>
            <div class="modal fade" id="nuevaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Crea Nueva Notebook</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                      {this.state.msg}
                      <button className="btn" onClick={this.props.handler} data-dismiss="modal" >Crear Nueva Notebook</button>


                  </div>

                </div>
              </div>
            </div>



        </div>
      )
    }

}
