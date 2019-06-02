import React, { Component } from 'react'

import AvatarEditor from './Avatars/AvatarEditor'

class UserAvatars extends Component{

    constructor(props){
        super(props);
        this.state= {
            nombre_avatar: '',
            status_nuevo: null,
    
            status: null,
            error: false,
            isLoaded: false,
            avatars: [],
            selectedAvatar: null,
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
                if (result.status == 'success'){
                    this.setState(state => ({
                        avatars: state.avatars.concat(result.data.avatar),                        
                    }));
                }
            }
        );
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
                    this.setState(
                        {
                            status: result.message,
                            error: true,
                            isLoaded: true,
                        }
                    );
                }
                else{
                    this.setState(
                        {
                            status: result.status,
                            isLoaded: true,
                            avatars: result.data.avatars,
                        }
                    );
                }
                console.log("USERAVATARS: Fetching user avatars finished");
            },
        );        
    }   

    componentDidMount(){
        this.fetchAvatars();
    }

    handleChange = (e) => {
        this.setState({ nombre_avatar: e.target.value });
    }

    handleAvatarClick = (e) =>{
        e.preventDefault();
        const id=parseInt(e.target.id/10);
        const avatar= this.state.avatars[id];
        this.setState({
            selectedAvatar: avatar,
        });
    }

    nuevoAvatar = (e) =>{
        e.preventDefault();

        const nombre = this.state.nombre_avatar;
        this.setState({ nombre_avatar: ''});
        
        let data = new FormData();
        data.append("nombre", nombre);

        this.fetchNuevoAvatar(data);        
    }

    renderApp(){
        const { error, isLoaded, } = this.state;
        if (error){         
            return (
                <span>
                    Error: {this.state.status}
                </span>
            )
        }
        else if (isLoaded){            
            const av= this.state.selectedAvatar;            
            if(this.state.avatars.length>0){
                return(
                    <div>
                        Tus avatares: 
                        <ul>
                        {this.state.avatars.map(item => 
                            <li key={item.id}>
                               <a href="#" id={item.id} onClick={this.handleAvatarClick}>{item.name}</a>
                            </li>
                        )}
                        </ul>
                        <form onSubmit={this.nuevoAvatar}>
                            <label htmlFor="nombre_avatar">
                                Nombre: 
                            </label>
                            <input
                                id="nombre_avatar"
                                onChange={this.handleChange}
                                value={this.state.nombre_avatar}
                            />
                            <button>
                                Nuevo
                            </button>
                        </form>                        
                        <AvatarEditor 
                            api_token={this.props.api_token}
                            avatar={av}
                            setAvatar={this.setAvatar}
                        />
                    </div>
                );
            }
            else{
                return(
                    <div>
                        Aún no tienes un avatar :( 
                        <form onSubmit={this.nuevoAvatar}>
                            <label htmlFor="nombre_avatar">
                                Nombre: 
                            </label>
                            <input
                                id="nombre_avatar"
                                onChange={this.handleChange}
                                value={this.state.nombre_avatar}
                            />
                            <button>
                                Crear avatar!
                            </button>
                        </form>
                        <AvatarEditor 
                            api_token={this.props.api_token}
                            avatar={av}
                            setAvatar={this.setAvatar}
                        />
                    </div>
                );
            }
        }else{
            return(
                <span>
                    Cargando avatares de usuario 
                    <i className="fa fa-spinner fa-spin loading"></i>
                </span>
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