import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import './page.css'
import NotebookThumbnail from './NotebookThumbnail'

export default class LoadBtn extends Component{
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {
        not: []
      }
      this.getlist = this.getlist.bind(this);
    }
    getlist(){
        let api_token = document.querySelector('meta[name="api-token"]');


        fetch('/api/v1/notebookuser', {
          headers: new Headers({
             'Authentication': api_token.content,
           }),
        }).then(
             (response)=>{
                 return response.json();
             }   ).then(notebooks => {
            this.setState({ not: notebooks });
        });
    }
    render(){
      return(
        <div>
        <button type="button" data-toggle="modal" data-target="#editModal" class="btn btn-warning btn-sm" onClick={this.getlist}> Cargar </button>

            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Carga Tu Notebook</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    {
                      this.state.not.map(notebook => <NotebookThumbnail valor={notebook} handler={this.props.handler}/>)
                    }
                  </div>

                </div>
              </div>
            </div>



        </div>
      )
    }

}
