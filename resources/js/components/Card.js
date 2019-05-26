import React, { Component } from 'react'

export default class Card extends Component {
    render() {
      return (
        <div className="card tamanio">
            <div className="row">
                <div className="col-md-4">
                    <img className="card-img tamanio-img" src="img/ARG.jpg"></img>
                    
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">
                            Argentina
                        </div>
                    </div>

                </div>
            </div>
        </div>
      );
    }
  }

