import React, { Component } from 'react'

class AvatarEditor extends Component{

    constructor(props){
        super(props);
        // Espero que me pasen un avatar
        this.state={
            isLoaded: false,
            error: null,
            items: [],
            a_body: 0,
            a_head: 0,
            a_extra: 0,
            a_upperbody: 0,
            a_lowerbody: 0,
        }
    }

    fetchResources(){
        // Obtengo recursos de avatares
        console.log("AVATAREDITOR: fetching resources");
        fetch('/api/resources')
        .then( (response) => {
          return response.json();
        })
        .then(
          (result) => {
            console.log("AVATAREDITOR: fetching resources finished");
            this.setState({
              isLoaded: true,
              items: result.items,              
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error,            
            });
          }
        )
      }

    setAvatarIndices(avatar){
      // obtengo los id de los items del avatar
      const { body_id,head_id,extra_id,upperbody_id,lowerbody_id}=avatar;  
      
      // Mapeo del id del recurso de la base de datos
      // al indice del arreglo json que recibi
      // Los id de la base de datos son: 01, 11, 21, 31, 41, etc
      // (division entera por 10)
      this.setState({
        a_body: parseInt(body_id/10),
        a_head: parseInt(head_id/10),
        a_upperbody: parseInt(upperbody_id/10),
        a_lowerbody: parseInt(lowerbody_id/10),
        a_extra: parseInt(extra_id/10),
      })   
    }


    componentDidMount(){
        // hago fetch de todos los recursos
        this.fetchResources();

        // seteo los indices de los recursos 
        const avatar=this.props.avatar;
        if (avatar){
          this.setAvatarIndices(avatar);
        }
    }

    renderApp(){
        const { isLoaded, items } = this.state;        
        if (isLoaded){
          return(
              <div className="avatar-frame testing">
                  <img className="img-avatar avatar-body" 
                  src={items.bodyitems[this.state.a_body].resource}></img>
                  <img className="img-avatar avatar-head" 
                  src={items.headitems[this.state.a_head].resource}></img>
                  <img className="img-avatar avatar-upperbody" 
                  src={items.upperbodyitems[this.state.a_upperbody].resource}></img>
                  <img className="img-avatar avatar-lowerbody" 
                  src={items.lowerbodyitems[this.state.a_lowerbody].resource}></img>
                  <img className="img-avatar avatar-extra" 
                  src={items.extraitems[this.state.a_extra].resource}></img>
              </div>
          );
        }
        else{
          return(
            <div className="avatar-frame testing">
              Obteniendo recursos de avatares 
              <i className="fa fa-spinner fa-spin loading"></i>
            </div>
          );
        }

    }

    render(){
      return(this.renderApp());
    }

}

export default AvatarEditor