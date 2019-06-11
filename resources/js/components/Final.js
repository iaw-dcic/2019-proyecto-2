import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import  "./css/cuadro.scss";

export default class Final extends Component {

constructor(props){
  super(props);
}

onClickEquipo(e, newc, id){
  this.props.onClick2(e, newc);
}


      render() {
          return (

                  <li className="team-item">
                  <button className="btn btn-info" id = {this.props.id1}
                        onClick= {(e) =>this.onClickEquipo(e, this.props.teamA)}>{this.props.teamA}</button>
                    <time>vs</time>
                    <button className="btn btn-info" id = {this.props.id2}
                        onClick={(e) =>this.onClickEquipo(e, this.props.teamB)}>{this.props.teamB}</button>
                  </li>
          );

      }
}
