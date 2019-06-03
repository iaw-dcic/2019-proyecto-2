import React, { Component } from 'react'

import AvatarEditor from './Avatars/AvatarEditor'
import Errors from './Errors'

class UserAvatars extends Component{

    constructor(props){
        super(props);
        this.state= {
            status: null,
            error: false,
            isLoaded: false,

            avatars: [],
            selectedAvatar: null,
            
            nombre_avatar: '',
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
                        }
                    );
                    
                    console.log("USERAVATARS fetching: luego de setear selectedAvatar");
                }
                console.log("USERAVATARS: Fetching user avatars finished");
            },
        );        
    }   

    componentDidMount(){
        // Obtengo avatares de usuario
        //this.fetchAvatars();
    }

    handleAvatarClick = (e) =>{
        e.preventDefault();
        //const id=parseInt(e.target.id/10);
        const indice= e.target.id
        const avatar= this.state.avatars[indice];        
        this.setState({
            selectedAvatar: avatar,
        });
    }

    addAvatar = (newAvatar) => {
        this.setState(state => ({
            avatars : state.avatars.concat(newAvatar)
        }));
    }
    

    renderApp(){
        if (this.state.isLoaded){
            console.log("USERAVATARS: renderApp() Loaded!");             
            if(this.state.avatars.length>0){
                console.log("USERAVATARS: renderApp() lenght>0");
                console.log("USERAVATARS: selectedAvatar");
                console.log(this.state.selectedAvatar);                
                return(
                    <div>
                        Tus avatares: 
                        <ul>
                        {this.state.avatars.map((item,index) => 
                            <li key={item.id}>
                               <a href="#" id={index} onClick={this.handleAvatarClick}>{item.name}</a>
                            </li>
                        )}
                        </ul>
                        <Errors 
                            error={this.state.error}
                            message={this.state.status}
                        />                      
                        <AvatarEditor
                            api_token={this.props.api_token}
                            avatar={this.state.avatars[0]}
                            hasAvatars={true}
                            addAvatar= {this.addAvatar}
                            items={this.props.items}
                        />                        
                    </div>
                );
            }
            else{
                console.log("USERAVATARS: renderApp() lenght=0");
                return(
                    <div>
                        Aún no tienes un avatar :(
                        <AvatarEditor
                            api_token={this.props.api_token}
                            avatar={this.state.selectedAvatar}
                            hasAvatars={false}
                            items={this.props.items}
                        />
                    </div>
                );
            }
        }else{
            console.log("USERAVATARS: renderApp() not loaded");
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