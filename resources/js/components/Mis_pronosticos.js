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
            })
            console.log(response.data)
          });
  

       } 


      handleEliminarPronostico(id) {
        
        if(id != '') {
            try {
                axios.delete('api/eliminar_pronostico/'+id)
                    .then(res => {
                        console.log(res);

                    })
            }
            catch (event) {
                console.log('Axios request failed', event);
            }
        }
    }

     handleModificarPronostico(id) {//id de la posicion en el arreglo de mysql
       localStorage.setItem('modificar',id);
        this.setState({
            content: <Mi_pronostico />
        });
    
    }



    render() {

         
        return(
                        <div className="container">   
                         <Row>
                             <div className="card-body center">
                                
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
                       </Row>  
                         <br/>
                         <br/>
                       
                        <Row>  
                            {this.state.content}
                        </Row>  
                  
                           </div> 
  
          )
            
          
          
    };

      
         
}