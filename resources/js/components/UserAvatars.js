import React, { Component } from 'react'

class UserAvatars extends Component{

    constructor(props){
        super(props);
        this.state= {
            nombre_avatar: '',
            status_nuevo: null,
            isCreated: false,
    
            status: null,
            error: false,
            isLoaded: false,
            avatars: [],
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
            },
        );        
    }

    

    componentDidMount(){
        this.fetchAvatars();
    }

    handleChange = (e) => {
        this.setState({ nombre_avatar: e.target.value });
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
            return(
                <div>
                    Tus avatares: 
                    <ul>
                    {this.state.avatars.map(item => 
                        <li key={item.id}>
                            {item.name}
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
                </div>
            );
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