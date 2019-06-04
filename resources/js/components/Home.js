import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';



export default class Home extends Component {
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }
  
    routeChange() {
        let path = '/prodes/create';
        this.props.history.push(path);
      }

   


    render() {
        return (
            <div className="container" >
                 <br/>   
               <button className="btn btn-success"  onClick={this.routeChange}> Crear Nuevo Prode</button>
                   
                <br/>   
                <br/>   
                <br/>   
                <br/>   
                <h1>Bienvenido!</h1>
                
            </div>
        )
    }
}
