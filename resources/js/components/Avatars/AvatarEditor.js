import React, { Component } from "react";

import AvatarShower from './AvatarShower'
import Errors from '../Errors'

class AvatarEditor extends Component{

    constructor(props){
        super(props);
        //Si estoy editando seteo los valores iniciales al avatar que me pasaron
        if(this.props.mode=='edit'){
            this.state={
                currentItem: 'body',
                max_items: this.props.items.bodyitems.length,

                field_name: '',

                name: this.props.avatar.name,
                body: parseInt(this.props.avatar.body_id/10),
                head: parseInt(this.props.avatar.head_id/10),
                upperbody: parseInt(this.props.avatar.upperbody_id/10),
                lowerbody: parseInt(this.props.avatar.lowerbody_id/10),
                extra: parseInt(this.props.avatar.extra_id/10),

                error: false,
                status: null,
            }        
        }else{
            this.state={
                currentItem: 'body',
                max_items: this.props.items.bodyitems.length,

                field_name: '',

                name: '',
                body: 0,
                head: 0,
                upperbody: 0,
                lowerbody: 0,
                extra: 0,

                error: false,
                status: null,
            }
        }
    }


    fetchNuevoAvatar(data){
        const bearer = 'Bearer ' + this.props.api_token
        fetch('/api/avatars', { 
            method: 'POST',
            headers: {
                'Authorization': bearer, 
                'Accept': 'application/json'  
            },
            body: data
        })
        .then( 
            (response) => {                        
                return response.json();
            }
        )
        .then(
            (result) => {
                if (result.errors){
                    this.setState({
                        error: true,
                        status: result.errors.nombre[0],
                    })                  
                }
                else if (result.status == 'success'){
                    this.setState({
                        status: result.status,
                    });
                }
            }
        );
    }

    getAvatar(){
        let avatar = {
            'name': this.state.name,
            'body_id': this.state.body,
            'head_id': this.state.head,
            'upperbody_id': this.state.upperbody,
            'lowerbody_id': this.state.lowerbody,
            'extra_id': this.state.extra,
        };
        //console.log("AVATAREDITOR: getAvatar()");
        //console.log(avatar);        
        return avatar;
    }

    handleFieldNameChange = (e) => {
        this.setState({ field_name: e.target.value });
    }   

    handleSaveAvatar = (e) =>{
        e.preventDefault();

        console.log("AVATAREDITOR: handleSaveAvatar()");
    }

    handleDeleteAvatar = (e) =>{
        e.preventDefault();

        console.log("AVATAREDITOR: handleDeleteAvatar()");
    }

    handleNewAvatar = (e) =>{
        e.preventDefault();
        console.log("AVATAREDITOR: handleNewAvatar()");
        // Obtengo lo ingresado en el campo
        let new_name = this.state.field_name;     
        if(name.length>32){
            this.setState({
                error: true,
                status: 'El nombre no debe ser mayor que 32 caracteres',
                field_name: ''
            })
            return;
        }
        // Limpio campo nombre
        this.setState({field_name: ''});
        // Creo avatar nuevo
        let newAvatar = {
            'name': new_name,
            'body_id': 0,
            'head_id': 0,
            'upperbody_id': 0,
            'lowerbody_id': 0,
            'extra_id': 0,
        };
        // Uso funcion recibida de padre para agregar avatar a la lista
        this.props.addAvatar(newAvatar);        
    }

    handleButtonBody = (e) =>{
        this.setState({
            currentItem: 'body',
            max_items: this.props.items.bodyitems.length,
        });
    }

    handleButtonExtra = (e) =>{
        this.setState({
            currentItem: 'extra',
            max_items: this.props.items.extraitems.length,
        });
    }

    handleButtonHead = (e) =>{
        this.setState({
            currentItem: 'head',
            max_items: this.props.items.headitems.length,
        });
    }

    handleButtonUpperbody = (e) =>{
        this.setState({
            currentItem: 'upperbody',
            max_items: this.props.items.upperbodyitems.length,
        });
    }

    handleButtonLowerbody = (e) =>{
        this.setState({
            currentItem: 'lowerbody',
            max_items: this.props.items.lowerbodyitems.length,
        });
    }

    handleButtonPrev = (e) =>{
        let index;
        let max = (this.state.max_items-1);
        switch(this.state.currentItem){
            case 'body':
                index=this.state.body;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    body: index,
                });
                break;
            case 'head':
                index=this.state.head;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    head: index,
                });
                break;
            case 'upperbody':
                index=this.state.upperbody;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    upperbody: index,
                });
                break;
            case 'lowerbody':
                index=this.state.lowerbody;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    lowerbody: index,
                });
                break;
            case 'extra':
                index=this.state.extra;
                if (index==0)
                    index=max;
                else
                    index=index-1;
                this.setState({
                    extra: index,
                });
                break;
        }
        //console.log("AVATAREDITOR: handleButtonPrev()");        
        console.log(this.state.currentItem+": "+index);           
    }

    handleButtonNext = (e) =>{
        let index;
        let total = this.state.max_items;
        switch(this.state.currentItem){
            case 'body':
                index=this.state.body;
                index=(index+1)%total;
                this.setState({
                    body: index,
                });
                break;
            case 'head':
                index=this.state.head;
                index=(index+1)%total;
                this.setState({
                    head: index,
                });
                break;
            case 'upperbody':
                index=this.state.upperbody;
                index=(index+1)%total;
                this.setState({
                    upperbody: index,
                });
                break;
            case 'lowerbody':
                index=this.state.lowerbody;
                index=(index+1)%total;
                this.setState({
                    lowerbody: index,
                });
                break;
            case 'extra':
                index=this.state.extra;
                index=(index+1)%total;
                this.setState({
                    extra: index,
                });
                break;
        }
        //console.log("AVATAREDITOR: handleButtonNext()");        
        console.log(this.state.currentItem+": "+index);        
    }
   
    buttonsAvatarItems(){
        return(
            <div className="btn-group" role="group" aria-label="Avatar items">
            <button type="button" className="btn btn-secondary"
                onClick={this.handleButtonBody}>Body</button>
            <button type="button" className="btn btn-secondary"
                onClick={this.handleButtonHead}>Head</button>
            <button type="button" className="btn btn-secondary"
                onClick={this.handleButtonUpperbody}>Upperbody</button>
            <button type="button" className="btn btn-secondary"
                onClick={this.handleButtonLowerbody}>Lowerbody</button>
            <button type="button" className="btn btn-secondary"
                onClick={this.handleButtonExtra}>Extra</button>
            </div>
        );
    }

    buttonsChangeItems(){
        return(
            <div className="btn-group" role="group" aria-label="Avatar items changers">
                <button type="button" className="btn btn-secondary"
                    onClick={this.handleButtonPrev}>←</button>
                <button type="button" className="btn btn-secondary"
                    onClick={this.handleButtonNext}>→</button>
            </div>
        );
    }

    formNewSaveDeleteAvatar(){
        return(
            <div className="form-group">
                <form onSubmit={this.handleNewAvatar} >
                    <input
                        placeholder= "Nombre"
                        onChange={this.handleFieldNameChange}
                        value={this.state.field_name}
                    />
                    <button type="submit" className="btn btn-primary">
                        Nuevo
                    </button>            
                </form>
                <button onClick={this.handleSaveAvatar} 
                    type="button" className="btn btn-primary">
                    Guardar
                </button>
                <button onClick={this.handleDeleteAvatar}
                    type="button" className="btn btn-primary">
                    Eliminar
                </button>
            </div>
        )
    }
    renderApp(){
        return(
            <div>
                {this.formNewSaveDeleteAvatar()}
                {this.buttonsChangeItems()}
                {this.buttonsAvatarItems()}
                <AvatarShower 
                    avatar={this.getAvatar()}
                    items={this.props.items}                  
                />
            </div>
        );
    }

    render(){
        return(
            this.renderApp()
        );
    }

}

export default AvatarEditor
