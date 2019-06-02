import React, { Component } from 'react'
import './ComponentCSS/superponer.css'
import './ComponentCSS/Sidebar.css'
import axios from 'axios'
import avatar from './Avatar'
;

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
    alert('avatar cargado');
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

  
  cargarCaras(){
    axios.get('api/recursos').then((response)=>{

      response.data.map(recurso => 
        
        this.setState({
          caras : this.state.caras.concat(recurso.source)
        })
      
    
    )
   
    console.log(this.state.caras) 
    return 
  })

  }
  

  cargarPelos(){
    axios.get('api/recursos').then((response)=>{

      response.data.map(recurso => 
        
        this.setState({
          caras : this.state.Pelos.concat(recurso.source)
        })
      
    
    )
    for(let i = 0; i < 4; i++){
      <button className="dropdown-item" name={this.state.Pelos[i]} onClick={this.changeHair}><img className="size" name={this.state.Pelos[i]} src={window.location.origin + '/RecursosGraficos/Pelos/' + this.state.Pelos[i] + '.png'}/></button>
    }
    console.log(this.state.caras) 
  })
  }

  cargarOjos(){
    axios.get('api/recursos').then((response)=>{

      response.data.map(recurso => 
        
        this.setState({
          caras : this.state.Ojos.concat(recurso.source)
        })
      
    
    )
    for(let i = 0; i < 4; i++){
     
      <button className="dropdown-item" name={this.state.Ojos[i]} onClick={this.changeEyes}><img className="size" name={this.state.Ojos[i]} src={window.location.origin + '/RecursosGraficos/Ojos/' + this.state.Ojos[i] + '.png'}/></button>
    }
    console.log(this.state.caras) 
  })
  }

  cargarBocas(){
    axios.get('api/recursos').then((response)=>{

      response.data.map(recurso => 
        
        this.setState({
          caras : this.state.Bocas.concat(recurso.source)
        })
      
    
    )
    for(let i = 0; i < 4; i++){
      <button className="dropdown-item" name={this.state.Bocas[i]} onClick={this.changeMouth}><img className="size" name={this.state.Bocas[i]} src={window.location.origin + '/RecursosGraficos/Bocas/' + this.state.Bocas[i] + '.png'}/></button>
    }
    console.log(this.state.caras) 
  })
  }

  /*componentDidMount(){
    axios.get('api/recursos').then((response)=>{

      response.data.map(recurso => 
        
        this.setState(state =>{
          const caras = [... state.caras, recurso.source]
          return {
            caras
          }
        } )
      
    
    )
    console.log(this.state.caras) 
  })
  console.log(this.state.caras)
    /*  {this.props.caras.map(cara =>(
                <button className="dropdown-item" href="#" onClick={this.changeSkin}><img name={cara} src={window.location.origin + '/RecursosGraficos/Caras/'+ cara +'.png'}/></button>
              ))} } */
  

  constructor(props){
    super(props)
    this.saveAvatar = this.saveAvatar.bind(this);
    this.cargarAvatar = this.cargarAvatar.bind(this);
    this.changeSkin = this.changeSkin.bind(this);
    this.changeHair = this.changeHair.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
    this.changeMouth = this.changeMouth.bind(this);
    this.cargarCaras = this.cargarCaras.bind(this);
    this.cargarPelos = this.cargarPelos.bind(this);
    this.cargarOjos = this.cargarOjos.bind(this);
    this.cargarBocas = this.cargarBocas.bind(this);
  }

  render(){
        return (
          <>
            <div className="avataresPrevios">
            holaaaaaa
            {console.log(this.props.AllAvatars)}
            {this.props.AllAvatars.map(avatar=>( 
              <>
              <div className="card  text-center">
                  <img src={window.location.origin + '/RecursosGraficos/Caras/' + avatar.face + '.png'}/> 
                  <img src={window.location.origin + '/RecursosGraficos/Ojos/' + avatar.eyes + '.png'}/>
                  <img src={window.location.origin + '/RecursosGraficos/Pelos/' + avatar.hair + '.png'}/>
                  <img src={window.location.origin + '/RecursosGraficos/Bocas/' + avatar.mouth + '.png'}/>
                
              </div>
              <div>
                <button onClick={cargarAvatar} className="btn btn-outline-info btn-lg" value={"Cargar" + avatar.name}/>
              </div>
              </>
              ) ) }
            </div>
      
            <nav className="navbar fixed-bottom  navbar-dark bg-dark">
              <div className="btn-group dropup">
              <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Piel
              </button>
              <div className="dropdown-menu">

                
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
          </nav>
        </>
        )
    }
}