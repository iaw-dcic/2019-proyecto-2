import React, { Component } from 'react'

import axios from 'axios'
import avatar from './Avatar'

export default class SideBar extends Component{
    
  saveAvatar(event){
    event.preventDefault();
    //guardar el avatar, deberia de buscar los componentes usados a través del estado de Avatar!
    alert('guardé el avatar!');
    //axios.post('api/' + userID + '/avatars', {avatar}).then(res => {console.log(res);}) //hago el POST por Axios a la API que yo creé
     /*APi Token Laravel */
  }

  changeSkin(event){

    this.props.handleFaceChange(event);
  }
  changeHair(event){

    this.props.handleHairChange(event);
  }
  changeEyes(event){

    this.props.handleEyesChange(event);
  }
  changeMouth(event){

    this.props.handleMouthChange(event);
  }

  constructor(props){
    super(props)
    this.saveAvatar = this.saveAvatar.bind(this);
    this.changeSkin = this.changeSkin.bind(this);
    this.changeHair = this.changeHair.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
    this.changeMouth = this.changeMouth.bind(this);
  }

  

  render(){
        return (

          <nav className="navbar fixed-bottom  navbar-dark bg-dark">
            <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Piel
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name="Cara20" src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'}/></button>
              
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cabello
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" href="#" onClick={this.changeHair}><img name="Cabello20" src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'}/></button>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ojos
            </button>
            <div className="dropdown-menu ">
              <button className="dropdown-item" href="#" onClick={this.changeEyes}><img name="Ojos20" src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'}/></button>
            </div>
          </div>

          <div className="btn-group dropup">
            <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Boca
            </button>
            <div className="dropdown-menu ">
              <button className="dropdown-item" href="#" onClick={this.changeMouth}><img name="Boca20" src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'}/></button>
            </div>
          </div>

              <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar" onClick={this.saveAvatar}/>
        </nav>

        )
    }
}