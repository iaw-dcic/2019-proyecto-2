import React, { Component } from 'react'

class AvatarShower extends Component{
    
    // Este componente solo se encarga de mostrar un avatar que le pasen como propiedad

    constructor(props){
        super(props);
        // Espero que me pasen un avatar
    }

    renderAvatar(){
      let body,head,ubody,lbody,extra;      
      const items = this.props.items

      body=this.props.avatar.body_id;
      head=this.props.avatar.head_id;
      ubody=this.props.avatar.upperbody_id;
      lbody=this.props.avatar.lowerbody_id;
      extra=this.props.avatar.extra_id;

      if(this.props.useIDs){
        // Si uso ids entonces tengo que calcular los indices de los arreglos
        body=parseInt(body/10);
        head=parseInt(head/10);
        ubody=parseInt(ubody/10);
        lbody=parseInt(lbody/10);
        extra=parseInt(extra/10);
      }
      return(
        <div name="avatar-frame" className="avatar-frame">                  
          {this.renderName()}
          <img className="img-avatar avatar-body" 
            src={items.bodyitems[body].resource}></img>
          <img className="img-avatar avatar-head" 
            src={items.headitems[head].resource}></img>
          <img className="img-avatar avatar-upperbody" 
            src={items.upperbodyitems[ubody].resource}></img>
          <img className="img-avatar avatar-lowerbody" 
            src={items.lowerbodyitems[lbody].resource}></img>
          <img className="img-avatar avatar-extra" 
            src={items.extraitems[extra].resource}></img>        
        </div>
      );
    }

    renderName(){
      const avatar = this.props.avatar;
      if(this.props.renderName){
        return(
          <p className="avatar-name">{avatar.name}</p>
        )
      }
      else{
        return null;
      }
    }


    renderApp(){        
        if (this.props.avatar){
          return(
            this.renderAvatar()
          );
        }
        else{
          return(
            <div className="avatar-frame">
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