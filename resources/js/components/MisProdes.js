import React, { Component } from 'react';
import Axios from 'axios';
import { EXITED } from 'react-transition-group/Transition';
import {Link} from 'react-router-dom';
import {getProdes} from './getProdes'
import IndexProde from './IndexProde';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MisProdes extends Component {

    constructor(props){
        super(props);
        this.state = {
            prodes: []
        }
    }
   
     obtenerProdes(){
        var responseData=  getProdes();

        return responseData;
    }

    async componentDidMount() {
        var responseData =  await this.obtenerProdes();

        this.setState((estadoActual)=> {
            var prodes= responseData;
            return ({ prodes })
        })
    }
   
    eliminarProde(prode){
        let  axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 
        //realizo el delete
        axios.delete(`/api/prodes/${prode.id}`, { data: { prodeId: prode.id } }).then( 
            (response) => {
                location.reload();
            });
    }

    editarProde(prode){
        this.props.history.push(`/prodes/${prode.id}/edit`, {prode});

    }


    render() {
        var url;
        return (
            <div className="container">
                <h1>Mis prodes</h1>
                <ul>
                    {this.state.prodes.map((prode) => 
                            <li key={prode.id}>
                                <td>

                                    <Link to={{
                                        pathname: `/prodes/${prode.id}`,
                                        state: {
                                        prode: prode
                                        }
                                    }}>  
                               
                                   <h3> {prode.nombre}</h3> 
                                   </Link>


                                    <button   onClick={() => this.editarProde(prode)}>
                                        <img src="https://img.icons8.com/material/16/000000/edit.png"/>
                                    </button>
                                    

                                    <button  onClick={() => this.eliminarProde(prode)}>
                                        <span  aria-hidden="true" className="glyphicon glyphicon-trash"/>
                                        <img src="https://img.icons8.com/material/16/000000/trash.png"/>
                                    </button>
                                </td>
                            </li>
                        )}
                </ul>
            </div>
        )
    }

}