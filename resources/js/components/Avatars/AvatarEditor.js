import React, { Component } from "react";

import AvatarShower from './AvatarShower'
import Errors from '../Errors'

class AvatarEditor extends Component{

    constructor(props){
        super(props);       
        this.state={
            currentItem: 'body',
            max_items: this.props.items.bodyitems.length,

            name: this.props.avatar.name,
            body: this.props.avatar.body_id,
            head: this.props.avatar.head_id,
            upperbody: this.props.avatar.upperbody_id,
            lowerbody: this.props.avatar.lowerbody_id,
            extra: this.props.avatar.extra_id,

            error: false,
            status: null,
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

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleNewAvatar = (e) =>{
        e.preventDefault();
        // Obtengo lo ingresado en el campo
        let name = this.state.name;
        if(name.length>32){
            this.setState({
                error: true,
                status: 'El nombre no debe ser mayor que 32 caracteres',
                name: ''
            })
            return;
        }
        this.setState({ name: ''});        
        let data = new FormData();
        data.append("nombre", name);

        console.log("aca deberia hacer post de nuevo avatar");
        
        //this.fetchNuevoAvatar(data);
        //this.props.agregarAvatar();      
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
        console.log("AVATAREDITOR: handleButtonPrev()");        
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
        console.log("AVATAREDITOR: handleButtonNext()");        
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

    formNewAvatar(){
        return(
            <form onSubmit={this.handleNewAvatar}>
                <input
                    id= "avatar_name"
                    placeholder= "Nombre"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                />
            <button type="button" className="btn btn-primary">
                Crear avatar!
            </button>
        </form>)
    }

    getAvatar(){
        let avatar = {
            'body_id': this.state.body,
            'head_id':this.state.head,
            'upperbody_id':this.state.upperbody,
            'lowerbody_id':this.state.lowerbody,
            'extra_id':this.state.extra,
        };
        //console.log("AVATAREDITOR: getAvatar()");
        //console.log(avatar);        
        return avatar;
    }


    render(){
        return(
            <div>
                {this.formNewAvatar()}
                {this.buttonsChangeItems()}
                {this.buttonsAvatarItems()}
                <AvatarShower 
                    avatar={this.getAvatar()}
                    items={this.props.items}                    
                />
            </div>
        )
    }

}

export default AvatarEditor