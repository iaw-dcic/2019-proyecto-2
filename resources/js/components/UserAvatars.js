import React, { Component } from 'react'

import AvatarEditor from './Avatars/AvatarEditor'
import AvatarShower from './Avatars/AvatarShower'
import Errors from './Errors'
import Loading from './Loading'

class UserAvatars extends Component{

    constructor(props){
        super(props);
        this.state= {
            status: null,
            error: false,
            isLoaded: false,

            avatars: [],
            selectedAvatar: null,
            selectedAvatarIndex: 0,
            isCreating: false,
            isEditing: false,
        }
        this.fetchAvatars();
    }

    fetchDeleteAvatar(url){
        const bearer = 'Bearer ' + this.props.api_token
        console.log("USERAVATARS: deleting avatar");
        fetch(url, { 
            method: 'DELETE',
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
                            didDelete: false,
                        }
                    );
                }
                else{
                    this.setState({
                            status: result.status,
                            didDelete: true,
                        }
                    );
                }
                console.log("USERAVATARS: deleting avatar finished");
            },
        ); 
    }

    fetchAvatars(){
        const bearer = 'Bearer ' + this.props.api_token
        console.log("USERAVATARS: fetching user avatars");        
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
                console.log("USERAVATARS: fetching user avatars finished");
            },
        );        
    }

    handleAvatarClick = (e) =>{
        e.preventDefault();
        const indice= e.target.id
        const avatar= this.state.avatars[indice];        
        this.setState({
            selectedAvatar: avatar,
            selectedAvatarIndex: indice,
        });
    }

    handleButtonNewAvatar = (e) =>{
        e.preventDefault();
        this.setState({
            isCreating: true,
            isEditing: false,
        });
        console.log("boton nuevo");        
        console.log(this.state);
        
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
        if (this.state.selectedAvatar){
            return(            
                <button onClick={this.handleButtonEditAvatar} 
                    type="button" className="btn btn-success">
                    Editar
                </button>
            );
        }
        else{
            return null;
        }
    }

    handleButtonDeleteAvatar = (e) =>{
        e.preventDefault();

        let url= 'api/avatars/'+this.state.selectedAvatar.id;
        let index=this.state.selectedAvatarIndex
        let newAvatars= [...this.state.avatars];
        newAvatars.splice(index, 1);
        this.fetchDeleteAvatar(url);
        this.setState( (prevState) =>({
            avatars: newAvatars,
            selectedAvatar: null,
            selectedAvatarIndex: -1,
        }))


    }

    modeCancel = () =>{
        this.setState({
            isCreating: false,
            isEditing: false,
        })
    }

    resetMode = (avatar) => {
        if(this.state.isCreating){
            this.setState( prevState => ({
                isCreating: false,
                isEditing: false,
                avatars: prevState.avatars.concat(avatar),
                selectedAvatar: avatar,
                selectedAvatarIndex: prevState.avatars.length,
            }));
        }
        else{
            let newAvatars = this.state.avatars;
            newAvatars[this.state.selectedAvatarIndex] = avatar;            
            this.setState( prevState => ({
                    isCreating: false,
                    isEditing: false,
                    avatars: newAvatars,
                    selectedAvatar: avatar,
            }));
        }
    }

    getActive(index){
        if (index==this.state.selectedAvatarIndex){
            return " active";
        }
        else{
            return " ";
        }
    }

    renderAvatarList(){
        return(
            <div className="col-md-4 borde-lista m-3 h-100">
                <div className="row-fluid">
                    <div className="mb-3 mt-3 text-center">
                        <h4>Tus snoovatares </h4>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="mb-3 lista p-2">
                        <div className="list-group list-group-flush">
                            {this.state.avatars.map((item,index) => 
                            <a className={"list-group-item list-group-item-light list-group-item-action"+this.getActive(index)}
                            href="#avatar-frame" id={index} onClick={this.handleAvatarClick}>{item.name}</a>
                            )}
                        </div>
                    </div>
                </div>                
                <div className="row-fluid">
                    <div className="mb-3 boton-panel-izq">
                        {this.renderButtonNewAvatar('Nuevo','btn btn-primary btn-block')}
                    </div>        
                </div>
                
                <div className="row-fluid">
                    <div className="errores">
                        <Errors 
                            error={this.state.error}
                            message={this.state.status}
                        />  
                    </div>
                </div>                
            </div>
        );        
    }

    renderButtonDeleteAvatar(){
        if (this.state.selectedAvatar){
            return(
                <button onClick={this.handleButtonDeleteAvatar} 
                    type="button" className="btn btn-danger">
                    Eliminar
                </button>
            );
        }
        else{
            return null;
        }
    }

    renderAvatarShower(){
        return(
            <div className="col-md-7 borde-lista m-3 pt-3">
                <div className="row justify-content-center ">
                    <div className="btn-toolbar" role="toolbar" aria-label="Botones editar y eliminar">
                        <div className="btn-group mr-2" role="group" aria-label="Boton editar">
                            {this.renderButtonEditAvatar()}
                        </div>
                        <div className="btn-group ml-2" role="group" aria-label="Boton eliminar">
                            {this.renderButtonDeleteAvatar()}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <AvatarShower 
                        items={this.props.items}
                        avatar={this.state.selectedAvatar}
                        renderName={false}
                        useIDs={true}
                    />
                </div>
            </div>
        );
    }

    renderAvatars(){
        // No esta editando ni creando
        if (this.state.avatars.length>0){
            // Tiene avatares
            return(
                
                <div className="row justify-content-center">
                    {this.renderAvatarList()}                        
                    {this.renderAvatarShower()}
                </div>
            )
        }
        else{
            // No tiene avatars
            return(
                <div className="row justify-content-center ">
                    <div className="col-md-6 ">
                        <div className="jumbotron">
                            <h1 className="display-4">:(</h1>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="lead ">Aún no tienes snoovatares.</p>
                                    <p className="lead ">
                                        {this.renderButtonNewAvatar('Crear avatar!','btn btn-success btn-lg text-white')}
                                    </p>
                                </div>
                                <div className="col-md-2 ">
                                    <div className="jumbo-avatar ">
                                        <img className="sad-avatar " src="/avatars/sad.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            );
        }
    }
    
    renderMode(){
        if(this.state.isCreating){        
                return(
                    <AvatarEditor 
                        items={this.props.items}
                        api_token={this.props.api_token}
                        mode={'create'}
                        resetMode={this.resetMode}
                        modeCancel={this.modeCancel}
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
                    resetMode={this.resetMode}
                    modeCancel={this.modeCancel}
                />
            );
        }
        else{
            return(
                // No esta editando ni creando
                this.renderAvatars()
            )
        }
    }

    renderApp(){
        if (this.state.isLoaded){
            // Avatares cargados
            return(
                this.renderMode()
            );
        }
        else{
            // Avatares no cargados
            return(
                <Loading/>
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