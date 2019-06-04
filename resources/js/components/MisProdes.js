import React, { Component } from 'react';
import {getProdes} from './getProdes'

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

    async componentWillMount() {

        //obtengo todos los prodes
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

    irAProde(prode){
        const axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 

        let axiosConfig={
            headers:{
                'Accept': 'application/json',
            }
        }
        //obtengo todos los encuentros
        axios.get(`/api/prodes/${prode.id}`, axiosConfig).then((response) => {
            //recibo las eliminatorias en un arreglo de 0 a 15

            //aca recibo correctamente las eliminatorias
            this.props.history.push({
                pathname: `/prodes/${prode.id}`,
                state: { eliminatorias: response.data,
                         prode: prode }
              })
            });
    }


    render() {
        return (
            <div className="container">
                <h1>Mis prodes</h1>
                <ul>
                    {this.state.prodes.map((prode) => 
                        <div key={prode.id}>
                            <br/>
                            <li >
                                <td>
                                    <h3> {prode.nombre}</h3> 
                                   

                                    <button className="btn btn-secondary" onClick={()=> this.irAProde(prode)}>
                                        Acceder
                                    </button>
                                  
                                   


                                    <button className="btn btn-light"  onClick={() => this.editarProde(prode)}>
                                        <img src="https://img.icons8.com/material/16/000000/edit.png"/>
                                    </button>
                                    

                                    <button className="btn btn-light" onClick={() => this.eliminarProde(prode)}>
                                        <span  aria-hidden="true" className="glyphicon glyphicon-trash"/>
                                        <img src="https://img.icons8.com/material/16/000000/trash.png"/>
                                    </button>
                                </td>
                            </li>
                        </div>
                        )}
                </ul>
                <br/><br/><br/>
            </div>
        )
    }

}