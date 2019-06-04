import React, { Component } from 'react'
import './ComponentCSS/superponer.css'
import './ComponentCSS/Sidebar.css'
import axios from 'axios'
import avatar from './Avatar'


export default class SideBar extends Component{
  state={
    caras: [],
    Pelos: [],
    Ojos: [],
    Bocas: []
  }
  saveAvatar(event){
    event.preventDefault();
    this.props.handleCreateNewAvatar(event);
  }

  cargarAvatar(event){
    event.preventDefault()
    
    this.props.loadAvatar(event)
    
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

  //Esta función no se usa, queda como placeholder para la obtención de los recursos desde la BD
  //se presentan problemas de renderizado al usar esta alternativa
  cargarRecurso(tipo){
    axios.get('api/recursos', tipo).then((response)=>{

    switch(tipo){
      case "skin":
          response.data.map(recurso => 
        
            this.setState({
              caras : this.state.caras.concat(recurso.source)
            })
          
        
        )
      break;

      case "eyes":
        response.data.map(recurso => 
      
          this.setState({
            caras : this.state.Ojos.concat(recurso.source)
          })
        
      
        )
      break;

      case "hair":
        response.data.map(recurso => 
      
          this.setState({
            caras : this.state.Pelos.concat(recurso.source)
          })
        
      
        )
      break;

      case "mouth":
          response.data.map(recurso => 
        
            this.setState({
              caras : this.state.Bocas.concat(recurso.source)
            })
          
        
        )
        /*for(let i = 0; i < 4; i++){
          <button className="dropdown-item" name={this.state.Bocas[i]} onClick={this.changeMouth}><img className="size" name={this.state.Bocas[i]} src={window.location.origin + '/RecursosGraficos/Bocas/' + this.state.Bocas[i] + '.png'}/></button>
        }*/
      break;
    }
      
  })

  }

nuevoAvatar(event){
  this.props.defaultAvatar(event);
}

  constructor(props){
    super(props)
    this.saveAvatar = this.saveAvatar.bind(this);
    this.cargarAvatar = this.cargarAvatar.bind(this);
    this.changeSkin = this.changeSkin.bind(this);
    this.changeHair = this.changeHair.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
    this.changeMouth = this.changeMouth.bind(this);
    this.cargarRecurso = this.cargarRecurso.bind(this);
    this.nuevoAvatar = this.nuevoAvatar.bind(this);
  
  }

  render(){
        return (
          <>
            <div className="previos">
              <p className="text-center side">haz clic en tus avatares previos para editarlos!</p>
       

            {this.props.AllAvatars.map((avatar,index) =>(
                <div key={avatar.name+"-"+index} className="card  mx-auto  size-prev">
                    <img className="superponer" src={window.location.origin + '/RecursosGraficos/Caras/' + avatar.skin + '.png'}/> 
                    <img className="superponer" src={window.location.origin + '/RecursosGraficos/Ojos/' + avatar.eyes + '.png'}/>
                    <img className="superponer" src={window.location.origin + '/RecursosGraficos/Pelos/' + avatar.hair + '.png'}/>
                    <img className="superponer" src={window.location.origin + '/RecursosGraficos/Bocas/' + avatar.mouth + '.png'}/> 
                    
                <button className="btn btn-info btn-lg boton" value={index} onClick={this.cargarAvatar}>Cargar {avatar.name}</button>     
                </div>
                
            ))}

            </div>
      
            <nav className="navbar fixed-bottom  navbar-dark bg-dark">
              <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Piel
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" name="Cara1" href="#" onClick={this.changeSkin}><img className="size" name="Cara1" src={window.location.origin + '/RecursosGraficos/Caras/Cara1.png'}/></button>
                <button className="dropdown-item" name="Cara2" href="#" onClick={this.changeSkin}><img className="size" name="Cara2" src={window.location.origin + '/RecursosGraficos/Caras/Cara2.png'}/></button>
                <button className="dropdown-item" name="Cara3" href="#" onClick={this.changeSkin}><img className="size" name="Cara3" src={window.location.origin + '/RecursosGraficos/Caras/Cara3.png'}/></button>
                <button className="dropdown-item" name="Cara4" href="#" onClick={this.changeSkin}><img className="size" name="Cara4" src={window.location.origin + '/RecursosGraficos/Caras/Cara4.png'}/></button>
                
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cabello
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" name="Pelo1" onClick={this.changeHair}><img className="size" name="Pelo1" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo1.png'}/></button>
                <button className="dropdown-item" name="Pelo2" onClick={this.changeHair}><img className="size" name="Pelo2" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo2.png'}/></button>
                <button className="dropdown-item" name="Pelo3" onClick={this.changeHair}><img className="size" name="Pelo3" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo3.png'}/></button>
                <button className="dropdown-item" name="Pelo4" onClick={this.changeHair}><img className="size" name="Pelo4" src={window.location.origin + '/RecursosGraficos/Pelos/Pelo4.png'}/></button>
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ojos
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" name="Ojos1" onClick={this.changeEyes}><img className="size" name="Ojos1" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos1.png'}/></button>
                <button className="dropdown-item" name="Ojos2" onClick={this.changeEyes}><img className="size" name="Ojos2" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos2.png'}/></button>
                <button className="dropdown-item" name="Ojos3" onClick={this.changeEyes}><img className="size" name="Ojos3" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos3.png'}/></button>
                <button className="dropdown-item" name="Ojos4" onClick={this.changeEyes}><img className="size" name="Ojos4" src={window.location.origin + '/RecursosGraficos/Ojos/Ojos4.png'}/></button>
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Boca
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" name="Boca1" onClick={this.changeMouth}><img className="size" name="Boca1" src={window.location.origin + '/RecursosGraficos/Bocas/Boca1.png'}/></button>
                <button className="dropdown-item" name="Boca2" onClick={this.changeMouth}><img className="size" name="Boca2" src={window.location.origin + '/RecursosGraficos/Bocas/Boca2.png'}/></button>
                <button className="dropdown-item" name="Boca3" onClick={this.changeMouth}><img className="size" name="Boca3" src={window.location.origin + '/RecursosGraficos/Bocas/Boca3.png'}/></button>
                <button className="dropdown-item" name="Boca4" onClick={this.changeMouth}><img className="size" name="Boca4" src={window.location.origin + '/RecursosGraficos/Bocas/Boca4.png'}/></button>
              </div>
            </div>

                <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar" onClick={this.saveAvatar}/>
                <button className="btn btn-outline-warning btn-lg" onClick={this.nuevoAvatar}>resetear Avatar</button>
          </nav>
        </>
        )
    }
}