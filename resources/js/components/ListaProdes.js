import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ListaProdes extends Component {
    render() {
      


        return (
                 <div className="row">
                    <div className="col-sm  ">
                      <div className="list-group dark">
                        <div className=" card-header list-group-item list-group-item-action  text-white bg-dark">Mis prodes :</div>
                          {this.props.prodes.map((prode, i) =>(
                            <button type="button"
                              id = {prode.id} 
                              className="list-group-item list-group-item-dark" 
                              onClick={this.props.seleccionar}>
                              {prode.name} 
                              </button>
                              ))}
                          </div>
                       </div>
                    </div>
               
              );
          }

    }