import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import  "./css/cuadro.scss";

export default class Equipo extends Component {

constructor(props){
  super(props);
  this.onClickEquipo = this.onClickEquipo.bind(this);
  this.getNombre = this.getNombre.bind(this);

}

onClickEquipo(e, newc, id){
  this.props.onClick2(e, newc, id);
}

getNombre(id){
  this.props.nombreop(id);
}

      render() {
          return (

                  <li className="team-item">
                  <button className="btn btn-info" id = {this.props.id1}
                        onClick= {(e) =>this.onClickEquipo(e, this.props.team1, this.props.it)}>{this.props.team1}</button>
                    <time>vs</time>
                    <button className="btn btn-info" id = {this.props.id2}
                        onClick={(e) =>this.onClickEquipo(e, this.props.team2, this.props.it)}>{this.props.team2}</button>
                  </li>
          );

      }
}
