import React, { Component } from 'react'
import './ComponentCSS/superponer.css'
import './ComponentCSS/Sidebar.css'
import axios from 'axios'
import avatar from './Avatar'
;

export default class SideBar extends Component{
  state={
    caras: []
  }
  saveAvatar(event){
    event.preventDefault();
    //guardar el avatar, deberia de buscar los componentes usados a través del estado de Avatar!
    alert('guardé el avatar!');
    //axios.post('api/' + userID + '/avatars', {avatar}).then(res => {console.log(res);}) //hago el POST por Axios a la API que yo creé
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

  
  getRecursos(){
    return axios.get('api/recursos').then((response)=>{

      response.data.map(recurso => 
        
        this.setState(state =>{
          const caras = [... state.caras, recurso.source]
          return {
            caras
          }
        })
      
    
    ) 
  })
    /*  {this.props.caras.map(cara =>(
                <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name={cara} src={window.location.origin + '/RecursosGraficos/Caras/'+ cara +'.png'}/></button>
              ))} */
  }

  constructor(props){
    super(props)
    this.saveAvatar = this.saveAvatar.bind(this);
    this.changeSkin = this.changeSkin.bind(this);
    this.changeHair = this.changeHair.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
    this.changeMouth = this.changeMouth.bind(this);
    this.getRecursos = this.getRecursos.bind(this);
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
                                    <div className="eyes superponer"><img src={window.location.origin + '/RecursosGraficos/Pelos/' + avatar.hair + '.png'}/></div>
                                    <div className="mouth superponer"><img src={window.location.origin + '/RecursosGraficos/Bocas/' + avatar.mouth + '.png'}/></div>
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
              <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name="Cara2" src={window.location.origin + '/RecursosGraficos/Caras/Cara2.png'}/></button>
              <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name="Cara3" src={window.location.origin + '/RecursosGraficos/Caras/Cara3.png'}/></button>
              <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name="Cara4" src={window.location.origin + '/RecursosGraficos/Caras/Cara4.png'}/></button>

                
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cabello
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" href="#" onClick={this.changeHair}><img name="Pelo1" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo1.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeHair}><img name="Pelo2" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo2.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeHair}><img name="Pelo3" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo3.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeHair}><img name="Pelo4" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo4.png'}/></button>
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ojos
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" href="#" onClick={this.changeEyes}><img name="Ojos1" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos1.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeEyes}><img name="Ojos2" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos2.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeEyes}><img name="Ojos3" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos3.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeEyes}><img name="Ojos4" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos4.png'}/></button>
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Boca
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" href="#" onClick={this.changeMouth}><img  name="Boca1" src={window.location.origin + '/RecursosGraficos/Bocas/Boca1.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeMouth}><img  name="Boca2" src={window.location.origin + '/RecursosGraficos/Bocas/Boca2.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeMouth}><img  name="Boca3" src={window.location.origin + '/RecursosGraficos/Bocas/Boca3.png'}/></button>
                <button className="dropdown-item" href="#" onClick={this.changeMouth}><img  name="Boca4" src={window.location.origin + '/RecursosGraficos/Bocas/Boca4.png'}/></button>
              </div>
            </div>

                <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar" onClick={this.saveAvatar}/>
          </nav>
        </>
        )
    }
}