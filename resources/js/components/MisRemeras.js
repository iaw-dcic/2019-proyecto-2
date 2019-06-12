import React, { Component } from 'react';
import Remera from './Remera';

export default class MisRemeras extends Component {

    /*componentDidMount = () =>{

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/MisRemeras/{remera_id}').then(response => { //IMPLEMENTAR ACA ESTO IMPORTANTE.
            console.log(response.data);
        })
    }*/
    
    /*eliminar(e, remera) {
        this.props.eliminarRemera(remera);
    }*/

    render() {

        return (
            <div className="container">
                    <div className="row flex-row flex-nowrap">
                        {
                            this.props.misremeras.map((item) => ( //ESTO  NO ANDA
                                <Remera 
                                key={item.id}
                                color={item.colour}
                                stampa={item.stampa}
                                widthR="60" heightR="70"
                                widthS="30" heightS="70"
                                size = "small"
                                />
                                //<button onclick={(e) => this.eliminar(e,item.id)}>X</button>
                            ))
                        }
                </div>
            </div>

        );
    }

}