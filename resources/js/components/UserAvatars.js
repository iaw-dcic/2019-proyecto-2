import React, { Component } from 'react'

import AvatarEditor from './Avatars/AvatarEditor'
import AvatarShower from './Avatars/AvatarShower'

class UserAvatars extends Component{

    constructor(props){
        super(props);
        this.state= {
            status: null,
            error: false,
            isLoaded: false,

            avatars: [],
            selectedAvatar: null,
            isCreating: false,
            isEditing: false,
        }
        this.fetchAvatars();
    }

    fetchAvatars(){
        const bearer = 'Bearer ' + this.props.api_token
        console.log("USERAVATARS: Fetching user avatars");        
        fetch('/api/avatars', { 
            method: 'GET',
            headers: {
                'Authorization': bearer, 
                'Accept': 'application/json'  
            }
        }) 
        .then( 
            (response) => { 
                return response.json();
            }
        )
        .then(
            (result) => {
                if (result.message){
                    this.setState({
                            status: result.message,
                            error: true,
                            isLoaded: true,
                        }
                    );
                }
                else{
                    this.setState({
                            status: result.status,
                            isLoaded: true,
                            avatars: result.data.avatars,
                            selectedAvatar: result.data.avatars[0],
                        }
                    );
                }
                console.log("USERAVATARS: Fetching user avatars finished");
            },
        );        
    }   


    handleAvatarClick = (e) =>{
        e.preventDefault();
        const indice= e.target.id
        const avatar= this.state.avatars[indice];        
        this.setState({
            selectedAvatar: avatar,
        });
    }

    addAvatar = (newAvatar) => {        
        this.setState(state => ({
            avatars : state.avatars.concat(newAvatar),
            selectedAvatar: newAvatar,
        }));
    }
    

    renderAvatarList(){
        if(this.state.avatars.length>0){
            return(
                <div className="col-md-4 testing">
                    <h5>Tus avatares: </h5>
                    <ul>
                        {this.state.avatars.map((item,index) => 
                        <li key={index}>
                            <a href="#" id={index} onClick={this.handleAvatarClick}>{item.name}</a>
                        </li>
                        )}
                    </ul>
                    {this.renderButtonNewAvatar('Nuevo','btn btn-primary')}
                </div>
            );
        }
        else{
            // User no tiene avatares
            return(
                <div className="col-md-4 testing">
                    <div className="jumbotron testing">
                        <h1 className="display-4">:(</h1>
                        <p className="lead">Aún no tienes avatares.</p>
                        <p className="lead">Por qué no creas uno?.</p>
                        <p className="lead">
                            {this.renderButtonNewAvatar('Crear avatar!','btn btn-primary btn-lg')}
                        </p>
                    </div>                    
                </div>
            );
        }
    }

    handleButtonNewAvatar = (e) =>{
        e.preventDefault();
        this.setState({
            isCreating: true,
            isEditing: false,
        });
    }

    renderButtonNewAvatar(label,classN){
        return(
            <button onClick={this.handleButtonNewAvatar} type="button" className={classN}>
                {label}
            </button>
        );
    }

    handleButtonEditAvatar = (e) =>{
        e.preventDefault();
        this.setState({
            isEditing: true,
            isCreating: false,
        });
    }

    renderButtonEditAvatar(){
        return(
            <button onClick={this.handleButtonEditAvatar} 
                type="button" className="btn btn-secondary">
                Editar
            </button>
        );
    }

    handleButtonDeleteAvatar = (e) =>{
        e.preventDefault();
        // TODO
    }

    renderButtonDeleteAvatar(){
        return(
            <button onClick={this.handleButtonDeleteAvatar} 
                type="button" className="btn btn-danger">
                Eliminar
            </button>
        );
    }

    renderAvatarShower(){
        return(
            <div className="col-md-8 justify-content-center testing">
                {this.renderButtonEditAvatar()}
                {this.renderButtonDeleteAvatar()}
                <AvatarShower 
                    items={this.props.items}
                    avatar={this.state.selectedAvatar}
                    renderName={false}
                    useIDs={true}
                />
            </div>
        );
    }


    renderMode(){
        if(this.state.isCreating){        
            return(
                <AvatarEditor 
                    items={this.props.items}
                    api_token={this.props.api_token}
                    mode={'create'}                                        
                />
            );
        }
        else if(this.state.isEditing){
            return(
                <AvatarEditor 
                    items={this.props.items}
                    api_token={this.props.api_token}
                    avatar={this.state.selectedAvatar}
                    mode={'edit'}                                        
                />
            );
        }
        else{
            return(
                // No esta editando ni creando
                <div className="row justify-content-center testing">
                        {this.renderAvatarList()}
                        {this.renderAvatarShower()}
                </div>
            )
        }
    }


    renderApp(){
        if (this.state.isLoaded){
            // Avatares cargados
            if(this.state.avatars.length>0){
                // Tiene avatares
                return(
                    this.renderMode()
                );
            }
            else{
                // No tiene avatares
                return(
                    <div className="row justify-content-center testing">
                        {this.renderAvatarList()}
                    </div>
                );
            }
        }
        else{
            // Avatares no cargados
            return(
                <div className="row justify-content-center testing">
                    <div className="col-md-1 testing">
                        <i className="fa fa-spinner fa-spin loading"/>
                    </div>
                </div>
            );
        }
    }


    render(){
        return (
            this.renderApp()
        );
    }

}


export default UserAvatars;