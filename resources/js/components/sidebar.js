import React, { Component } from 'react'
import './ComponentCSS/superponer.css'
import './ComponentCSS/Sidebar.css'
import axios from 'axios'
import avatar from './Avatar'


export default class SideBar extends Component{
  state={
    caras: [],
    pelos: [],
    ojos: [],
    bocas: [],
    bandera: 0
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
  
  cargarRecurso(tipo){
    axios.get('api/recursos?tipo='+ tipo ).then((response)=>{

    switch(tipo){
      case "skin":
      
      
        this.setState({
          caras : response.data
        })
       
          
        this.setState({
          bandera: this.state.bandera + 1
        })
      break;

      case "eyes":
          this.setState({
            ojos : response.data
          })
      
        
        this.setState({
          bandera: this.state.bandera + 1
        })
      break;

      case "hair":
          this.setState({
            pelos : response.data
          })
        this.setState({
          bandera: this.state.bandera + 1
        })
      break;

      case "mouth":
          this.setState({
            bocas : response.data
          })
        this.setState({
          bandera: this.state.bandera + 1
        })
      break;
    }
      
  })

  }

  componentDidMount(){
    this.cargarRecurso("skin")
    this.cargarRecurso("eyes")
    this.cargarRecurso("hair")
    this.cargarRecurso("mouth")
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
    if(this.state.bandera != 4){
     
      return(
        <h1>LOADING...</h1>
      
      )
    }
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
                Pigmentacion
              </button>
              <div className="dropdown-menu">
              
                {this.state.caras.map((cara,index) =>(
  
                  <button  key={cara+"-"+index} className="dropdown-item" name={cara} onClick={this.changeSkin}><img className="size" name={cara} src={window.location.origin + '/RecursosGraficos/Caras/' + cara +'.png'}/></button>
                ))}
                
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cabello
              </button>
              <div className="dropdown-menu">
              {this.state.pelos.map((pelo,index) =>(
                
                <button  key={pelo+"-"+index} className="dropdown-item" name={pelo} onClick={this.changeHair}><img className="size" name={pelo} src={window.location.origin + '/RecursosGraficos/Pelos/' + pelo +'.png'}/></button>
              ))}
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ojos
              </button>
              <div className="dropdown-menu ">
              {this.state.ojos.map((ojo,index) =>(
  
                <button  key={ojo+"-"+index} className="dropdown-item" name={ojo} onClick={this.changeEyes}><img className="size" name={ojo} src={window.location.origin + '/RecursosGraficos/Ojos/' + ojo +'.png'}/></button>
              ))}
              </div>
            </div>

            <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Boca
              </button>
              <div className="dropdown-menu ">
              {this.state.bocas.map((boca,index) =>(
                
                <button  key={boca+"-"+index} className="dropdown-item" name={boca} onClick={this.changeMouth}><img className="size" name={boca} src={window.location.origin + '/RecursosGraficos/Bocas/' + boca +'.png'}/></button>
              ))}
              </div>
            </div>

                <input className="btn btn-outline-success btn-lg" type="submit" value="Guardar Avatar" onClick={this.saveAvatar}/>
                <button className="btn btn-outline-warning btn-lg" onClick={this.nuevoAvatar}>resetear Avatar</button>
          </nav>
        </>
        )
    }
}