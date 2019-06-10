import React, { Component } from 'react'
import './Remera.css'
import ListaColores from '../ComponenteColor/ListaColores'
import {ConsumidorLogica} from '../Logica'
import ListaTipo from '../ComponenteTipo/ListaTipo';
import ListaCuello from '../ComponenteCuello/ListaCuello';
 
export default class Remera extends Component{
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
                                    <div>
                                        <img src={"img/"+value.color+value.cuello+value.tipo+".png"} alt="modeloRemera" className="imagen" />
                                        <button className="BotonGeneral" onClick={value.guardarRemera}>Guardar Remera</button>
                                    </div>
                                )}}
                        </ConsumidorLogica>
                  </div>
              </div>
          </div>
          </React.Fragment>
    )}
}