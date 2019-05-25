import React, { Component } from 'react'

import axios from 'axios'
import avatar from './Avatar'

export default class SideBar extends Component{
    
  saevAvatar(event){
    event.preventDefault();
    //guardar el avatar, deberia de buscar los componentes usados a través del estado de Avatar!
    alert('guardé el avatar!');
    //axios.post('api/' + userID + '/avatars', {avatar}).then(res => {console.log(res);}) //hago el POST por Axios a la API que yo creé
     /*APi Token Laravel */
  }
  
  render(){
        return (

          <div className="row accordion d-flex justify-content-center back">
         
            <div className="col-md-10 col-xl-6 py-5">
          

              <div className="accordion md-accordion accordion-2" id="accordionEx7" role="tablist"
                aria-multiselectable="true">
          

                <div className="card">
          

                  <div className="card-header rgba-stylish-strong z-depth-1 mb-1" role="tab" id="heading1">
                    <a data-toggle="collapse" data-parent="#accordionEx7" href="#collapse1" aria-expanded="true"
                      aria-controls="collapse1">
                      <h5 className="mb-0 white-text text-uppercase font-thin">
                        Piel <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>
          

                  <div id="collapse1" className="collapse" role="tabpanel" aria-labelledby="heading1"
                    data-parent="#accordionEx7">
                    <div className="card-body mb-1 rgba-grey-light white-text">
                      <button className="btn btn-outline-primary"><img src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'} /></button>
                    </div>
                  </div>
                </div>

          

                <div className="card">
          

                  <div className="card-header rgba-stylish-strong z-depth-1 mb-1" role="tab" id="heading2">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx7" href="#collapse2"
                      aria-expanded="false" aria-controls="collapse2">
                      <h5 className="mb-0 white-text text-uppercase font-thin">
                        Ojos <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>
          

                  <div id="collapse2" className="collapse" role="tabpanel" aria-labelledby="heading2"
                    data-parent="#accordionEx7">
                    <div className="card-body mb-1 rgba-grey-light white-text">

                    </div>
                  </div>
                </div>

                <div className="card">
          

                  <div className="card-header rgba-stylish-strong z-depth-1 mb-1" role="tab" id="heading3">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx7" href="#collapse3"
                      aria-expanded="false" aria-controls="collapse3">
                      <h5 className="mb-0 white-text text-uppercase font-thin">
                        Boca <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>
          

                  <div id="collapse3" className="collapse" role="tabpanel" aria-labelledby="heading3"
                    data-parent="#accordionEx7">
                    <div className="card-body mb-1 rgba-grey-light white-text">
                      
                    </div>
                  </div>
                </div>

              </div>

          
            </div>

          
          </div>

        )
    }
}