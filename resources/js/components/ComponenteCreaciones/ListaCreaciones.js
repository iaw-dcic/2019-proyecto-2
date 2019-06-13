import React, { Component } from 'react';
import Creacion from './Creacion'
import Axios from 'axios';

class ListaCreaciones extends Component {
    state={
        creaciones: []
    }

    componentDidMount () {
        Axios.get('api/creaciones').then(response => {
            window.axios = require('axios');
            let api_token = document.querySelector('meta[name="api-token"]');
        
            if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
    
          this.setState({
            creaciones: response.data
          })
        })
    }

    render() {
        return (
                <div className="py-5">
                    <div className="container">
                        <div className="row">                          
                            {this.state.creaciones.map(
                                creacion =>{
                                    return <Creacion key={creacion.id} creacion={creacion} />
                                }
                            )}
                             
                        </div>
                    </div>
                </div>
        );
    }
}

export default ListaCreaciones;