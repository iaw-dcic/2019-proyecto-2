import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main.js';
import Mi_pronostico from './Mi_pronostico';
import { Link } from 'react-router-dom'

import { Row, Column } from 'react-foundation';

export default class Mis_pronosticos extends Component {
    constructor(){
      super();
      this.state={
        
        pronosticos: [],
        PanelVisible:true,
        content:"",

      };


    }  

    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
     


        
          axios.get('/api/get_pronosticos').then(response => {
            this.setState({
                pronosticos: response.data,
                PanelVisible:true,
            })
            console.log(response.data)
          });
  

       } 


      handleEliminarPronostico(id) {
        
        
            try {
                localStorage.setItem('eliminar',id);
                console.log('Eliminar '+ id);
                axios.delete('api/eliminar_pronostico/'+id)
                    .then(res => {
                        console.log(res);

                    })
            }
            catch (event) {
                console.log('Axios request failed', event);
            }
              window.location.reload();
        
    }

     handleModificarPronostico(id) {//id de la posicion en el arreglo de mysql

       localStorage.setItem('modificar',id);
        this.setState({
             PanelVisible:false,
            content: <Mi_pronostico />
        });
      
    }

    pintarPanel(){
      return <div className="card-body center">
                                
                                    { 
                                      this.state.pronosticos.map((name,id) => 
                                            ( <div className='row'>
                                               <div className="col-sm-4">
                                                    <button className="btn" onClick={(event) => this.handleModificarPronostico(id)}
                                                     key = {id} >Pronostico {id+1} Modificar</button>
                                               </div> 
                                               <div className="col-sm-4">
                                                    <button className="btn" onClick={(event) => this.handleEliminarPronostico(id)}
                                                     key = {id} >Pronostico {id+1} Eliminar </button>
                                               </div> 
                                              </div>   
                                             )
                                      )
                                    }
              </div>
    }


    render() {

    const PanelVisible = this.state.PanelVisible;
    let panel;

    if (PanelVisible) {
      panel =  <div className="card-body center">
                                
                                    { 
                                      this.state.pronosticos.map((name,id) => 
                                            ( <div className='row'>
                                               <div className="col-sm-4">
                                                    <button className="btn" onClick={(event) => this.handleModificarPronostico(id)}
                                                     key = {id} >Pronostico {id+1} Modificar</button>
                                               </div> 
                                               <div className="col-sm-4">
                                                    <button className="btn" onClick={(event) => this.handleEliminarPronostico(id)}
                                                     key = {id} >Pronostico {id+1} Eliminar </button>
                                               </div> 
                                              </div>   
                                             )
                                      )
                                    }
              </div>
                                             
    } else {
      panel = ""                             
    }

        return(
                        <div className="container">   
                         <Row>
                          {panel}

                         </Row> 
                        
                        <Row>  
                        <div className="row justify-content-center">
                            <div className="col-md-20">        
                                {this.state.content}
                            </div>
                         </div>       
                        </Row>  
                  
                           </div> 
  
          )
            
          
          
    };


   
      
         
}