import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main.js';


export default class Mis_pronosticos extends Component {
    constructor(){
      super();
      
      this.state={
        
        equipos: [],        
        ganador1:"",
        ganador2:"",
        ganador3:"",
        ganador4:"",
        ganador5:"",
        ganador6:"",
        ganador7:""
      };
    } 
}