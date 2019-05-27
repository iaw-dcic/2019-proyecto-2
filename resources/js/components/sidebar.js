import React, { Component } from 'react'
import cara from './RecursosGraficos/Caras/Cara1.png'
import axios from 'axios'
import avatar from './Avatar'

export default class SideBar extends Component{
    
  saevAvatar(event){
    event.preventDefault();
    //guardar el avatar, deberia de buscar los componentes usados a través del estado de Avatar!
    axios.post('api/' + userID + '/avatars', {avatar}).then(res => {console.log(res);}) //hago el POST por Axios a la API que yo creé
  }
  
  render(){
        return (
        <nav className="navbar fixed-bottom  navbar-dark bg-dark">
            <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Piel
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" href="#"><img src={cara}/></button>
              
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cabello
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" href="#">Action</button>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ojos
            </button>
            <div className="dropdown-menu ">
              <button className="dropdown-item" href="#">Action</button>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Boca
            </button>
            <div className="dropdown-menu ">
              <button className="dropdown-item" href="#">Action</button>
            </div>
          </div>

          <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar" onClick="saveAvatar"/>
        </nav>
        )
    }
}