import React, { Component } from 'react'

class UserAvatars extends Component{

    state = {
        nombre_avatar: '',
        status_nuevo: null,
        isCreated: false,

        status: null,
        error: false,
        isLoaded: false,
        avatars: [],
        user: null,
    }

    fetchNuevoAvatar(){
        const bearer = 'Bearer ' + this.props.api_token;
        const nombre = this.state.nombre_avatar;
        const data = JSON.stringify({
            'nombre': nombre
        })
        console.log("UserAvatars: DATOS FORM: "+data);        
        console.log("UserAvatars: realizando fetch para creacion de nuevo avatar");
        fetch('/api/avatars', { 
            method: 'POST',
            headers: {
                'Authorization': bearer, 
                'Accept': 'application/json'  
            },
            nombre: data
        })
        .then( 
            (response) => {                        
                return response.json();
            }
        )
        .then(
            (result) => {
                console.log(result);
                console.log("UserAvatars: finalizado fetch para creacion de nuevo avatar");
            }
        )
        .then(
            (result) =>{
                this.render();
            }
        ); 
    }


    fetchAvatars(){
        const bearer = 'Bearer ' + this.props.api_token;
        console.log("UserAvatars: realizando fetch de avatares");
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
                            user: result.data.user,
                            avatars: result.data.avatars,                    
                        }
                    );
                }
                console.log("UserAvatars: finalizado fetch de avatares")
            },
        );        
    }

    renderApp(){
        const { error, isLoaded, } = this.state;
        if (error){         
            return (
                <div>
                    Error: {this.state.status}
                </div>
            )
        }
        else if (isLoaded){          
            return(
                <div>
                    Avatares de {this.state.user.name}:
                    <ul>
                    {this.state.avatars.map(item => 
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )}
                    </ul>
                    <form onSubmit={this.nuevoAvatar}>
                        <label htmlFor="nombre">
                            Nombre: 
                        </label>
                        <input
                            id="nombre_avatar"
                            onChange={this.handleChange}
                            value={this.state.campo_nombre}
                        />
                        <button>
                            Nuevo
                        </button>
                    </form>
                </div>
            );
        }else{
            return;
        }
    }

    componentDidMount(){
        this.fetchAvatars();
    }

    handleChange = (e) => {
        this.setState({ nombre_avatar: e.target.value });
    }

    nuevoAvatar = (e) =>{
        e.preventDefault();
        this.setState({ nombre_avatar: ''});
        console.log("UserAvatars: Boton nuevo avatar");
        this.fetchNuevoAvatar();        
    }

    render(){
        return (
            <div>
                {this.renderApp()}
            </div>
        );
    }

}


export default UserAvatars;