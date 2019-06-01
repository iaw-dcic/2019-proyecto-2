import React, { Component } from 'react'
import './ComponentCSS/superponer.css'
import './ComponentCSS/Sidebar.css'
import axios from 'axios'
import avatar from './Avatar'
;

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

  getRecurso(){
    axios.get('api/recursos/').then((response)=>{
      response.data.map
    })
  }

  

  render(){
        return (
          <>
            <nav className="navbar fixed-bottom avataresPrevios">
              <a className="navbar-brand" >Tus Avatares</a>
              {this.props.AllAvatars.map(avatar=>(
                  
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card  text-center">
                                
                                <div>
                                    
                                    <div className="hair superponer"><img src={window.location.origin + '/RecursosGraficos/Caras/' + avatar.face + '.png'}/> </div>
                                    <div className="skin superponer"><img src={window.location.origin + '/RecursosGraficos/Ojos/' + avatar.eyes + '.png'}/></div>
                                    <div className="eyes superponer"><img src={window.location.origin + '/RecursosGraficos/Pelo/' + avatar.hair + '.png'}/></div>
                                    <div className="mouth superponer"><img src={window.location.origin + '/RecursosGraficos/Boca/' + avatar.mouth + '.png'}/></div>
                                </div>
                                    <button className="btn btn-outline-info btn-lg" value={"Cargar" + avatar.name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                  
              ) ) }
            </nav>

            <nav className="navbar fixed-bottom  navbar-dark bg-dark">
              <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Piel
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name="Cara1" src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'}/></button>
                
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cabello
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" href="#" onClick={this.changeHair}><img name="Pelo1" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo1.png'}/></button>
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ojos
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" href="#" onClick={this.changeEyes}><img name="Ojos1" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos1.png'}/></button>
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Boca
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" href="#" onClick={this.changeMouth}><img name="Boca1" src={window.location.origin + '/RecursosGraficos/Bocas/Boca1.png'}/></button>
              </div>
            </div>

                <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar" onClick={this.saveAvatar}/>
          </nav>
        </>
        )
    }
}