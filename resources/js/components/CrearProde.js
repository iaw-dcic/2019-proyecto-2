import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { EXITED } from 'react-transition-group/Transition';

import MisProdes from './MisProdes';
import { Router } from 'react-router';


export default class CrearProde extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: ""
        }
        //this.context= this.context.bind(this);
    }


    registrar(){
        var prode;
        let  axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 
        //realizo el post
        axios.post('/api/prodes/create', {
            nombre: this.state.nombre
          })
          .then( (response) => {
            prode= response.data;
            //redirijo a IndexProde y le creo los cruces iniciales
            let url= '/prodes/'+prode.id;
            this.props.history.push(url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    nombreProde(e){
        //set state para cambiar nombre del prode
        this.setState({
            nombre: e.target.value
          });
    }


    render() {
        return (
            <div>
                <h1>Crear Prode</h1>
                <div >
                    <label>
                        Nombre:
                        <input type="text" onChange={this.nombreProde.bind(this)}/>
                    </label>
                    <button  className=" btn btn-success" onClick={this.registrar.bind(this)}>Registrar</button>
                </div>
            </div>
        )
    }
}
