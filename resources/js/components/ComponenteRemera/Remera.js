import React, { Component } from 'react'
import './Remera.css'
import ListaColores from '../ComponenteColor/ListaColores'
import {ConsumidorLogica} from '../Logica'
import ListaTipo from '../ComponenteTipo/ListaTipo';
import ListaCuello from '../ComponenteCuello/ListaCuello';
import Creacion from '../ComponenteCreaciones/Creacion';
import Button from 'react-bootstrap/Button'
import Modal from './Modal'
import Axios from 'axios';
 
export default class Remera extends Component{
    state={
        creaciones:[],
        modal: false,
        id_remera:null,
    }

    componentWillMount () {  
        this.obtenerRemeras()
    }

    obtenerRemeras=()=>{
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/creaciones').then((response) => {
          this.setState({
            creaciones: response.data
          })
        })
    }
    selectModal=()=>{
        this.setState({modal: !this.state.modal})
        };

    setRemeraID=(id)=>{
        this.setState({id_remera: id})
        this.eliminarRemera(id)
        }

    eliminarRemera=(id)=>{
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        Axios.post(`/api/eliminarRemera/${id}`, {
            id_remera: id,
        }).then (res=> {console.log(res); console.log(res.data)
        });
    }
      render () {
        return (
          <React.Fragment>
          <div className="container-fluid text-center d-none d-lg-block PanelGeneral">
              <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-6 panelBotones">
                      <ListaTipo />
                      <ListaColores />
                      <ListaCuello />
                </div>

                <div className="col-10 mx-auto col-lg-6 PanelImagen">
                        <ConsumidorLogica>
                            {(value) => {
                                return (
                                    <div >
                                        <img src={"img/"+value.color+value.cuello+value.tipo+".png"} alt="modeloRemera" className="imagen" />
                                        <div>
                                             <button className="BotonGeneral" onClick={value.guardarRemera}>Guardar Remera</button>
                                        </div>
                                    </div>
                                )}}
                        </ConsumidorLogica>
                </div>
             </div>
          </div>

          <div className="col-10 mx-auto col-lg-12 panelControlador">
            <label className="titulo">
                   Estas son sus creaciones, si desea editar alguna, presione en la imagen!
            </label>

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

            <div className="col-10 mx-auto col-lg-12 panelControlador">       
                <label className="tituloEliminarEditar">
                    Para eliminar alguna de sus remera, presione aqui 
                </label>

                <div className="py-5 panelModificar">
                    <div className="container">
                        <div className="row">                          
                               <Button variant="primary" size="lg" active className="botonModificar" onClick={ this.selectModal }>
                                    Eliminar Remera
                                </Button>     
                                <Modal
                                    remeras={this.state.creaciones}
                                    displayModal={this.state.modal}
                                    closeModal={this.selectModal}
                                    onClick={this.setRemeraID}
                                />
                        </div>
                    </div>
                 </div>
            </div>
        </div>
          </React.Fragment>
    )}
}