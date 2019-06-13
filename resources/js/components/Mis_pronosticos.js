import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main.js';
import { Link } from 'react-router-dom'

export default class Mis_pronosticos extends Component {
    constructor(){
      super();
      this.state={
        
        pronosticos: [],   
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




    render() {

         
        return(
                            
                             <div className="card-body center">
                                
                                  
                                    { 
                                      this.state.pronosticos.map((name,id) => 
                                            ( <div className='row'>
                                               <div className="col-sm-4">
                                                    <button className="btn" key = {id} >Pronostico {id+1} Modificar</button>
                                               </div> 
                                               <div className="col-sm-4">
                                                    <button className="btn" onClick={(event) => this.handleEliminarPronostico(id+1)}
                                                     key = {id} >Pronostico {id+1} Eliminar </button>
                                               </div> 
                                              </div>   
                                             )
                                      )
                                    }
                              </div>
                                








                             
               
          )
            
          
          
    };

      
         
}