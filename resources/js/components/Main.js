import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nuevo_pronostico from './nuevo_pronostico'
import Mis_pronosticos from './Mis_pronosticos'
import Mi_pronostico from './Mi_pronostico'
import { Row, Column } from 'react-foundation';


export default class Example extends Component {
    
    componentDidMount(){
        localStorage.clear();
    }
    constructor() {
        super()
        this.state = {
            content: <Nuevo_pronostico />
        }
        
    }

   

    Pronostico() {
        console.log("MANEJADOR PRONOSTICO")
        this.setState({
            content: <Nuevo_pronostico />
        });
    }


    MisPronosticos() {
        console.log("MANEJADOR MIS PRONOSTICO")
        this.setState({
            content: <Mis_pronosticos />
        });
    }
   
   
    render() { 

            return (
                <div className="container">
                
                  
                  <Row>  
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4"> 
                                                                  
                                    <button className="btn" onClick={(event) => this.Pronostico()} >Iniciar pronóstico </button>
                                                                                    
                                    
                                     <button className="btn" onClick={(event) => this.MisPronosticos()} >Mis pronósticos </button>
                                
                            </div>
                        </div>
                    </div>

                   
                  </Row>  
                   <br/>
                   
                       
                    <Row>  
                            {this.state.content}
                    </Row>  
                  
                </div>

        );
           
    }
}



