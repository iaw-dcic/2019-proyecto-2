import React, { Component } from 'react'

class AvatarShower extends Component{
    
    // Este componente solo se encarga de mostrar un avatar que le pasen como propiedad

    constructor(props){
        super(props);
        // Espero que me pasen un avatar
    }

    renderApp(){
        const items = this.props.items
        const avatar = this.props.avatar;
        if (avatar){
          return(
              <div className="avatar-frame testing">
                  <p className="avatar-name">{avatar.name}</p>
                  <img className="img-avatar avatar-body" 
                  src={items.bodyitems[avatar.body_id].resource}></img>
                  <img className="img-avatar avatar-head" 
                  src={items.headitems[avatar.head_id].resource}></img>
                  <img className="img-avatar avatar-upperbody" 
                  src={items.upperbodyitems[avatar.upperbody_id].resource}></img>
                  <img className="img-avatar avatar-lowerbody" 
                  src={items.lowerbodyitems[avatar.lowerbody_id].resource}></img>
                  <img className="img-avatar avatar-extra" 
                  src={items.extraitems[avatar.extra_id].resource}></img>
              </div>
          );
        }
        else{
          return(
            <div className="avatar-frame testing">
              <p className="text-justify text-weight-bold">
                Seleccione un avatar...
              </p>              
            </div>
          );
        }
    }

    render(){
      return(this.renderApp());
    }

}

export default AvatarShower