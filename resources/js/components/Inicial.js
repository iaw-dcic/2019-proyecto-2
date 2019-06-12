import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Inicial extends Component {
    constructor(){
      super();
      
      
    }   
    render() {
        return (           
               <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-13">   
                                   
                                            
                                   <button type="button" className="btn" onClick={ ()=>{this.setState({ganador1:"Brazil"})}}>GANA</button> 
             
                                </div>
                            </div>
                        </div>
                   


                 
                                  
               )

      }
    }