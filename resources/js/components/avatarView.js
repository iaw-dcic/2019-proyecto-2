import React, { Component } from 'react';
import axios from 'axios';


export default class AvatarView extends Component{
    state = {
        name : '',
        body : '',
        userID : 1,
        errors : []
    };
    
   
   /* constructor(props) {

        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleCreateNewAvatar = this.handleCreateNewAvatar.bind(this);
    }

    handleBodyChange(event){
        this.setState({
            [event.target.body] : event.target.value
        })
    }

    handleCreateNewAvatar(event){
        event.preventDefault(); //evito que la página reaccione e intente hacer un POST convencional para yo manejarlo por la API
        const avatar = {
            name = this.state.name
        }
        axios.post('api/' + userID + '/avatars', {avatar}).then(res => {console.log(res);}) //hago el POST por Axios a la API que yo creé
        //el then(...) es lo que hace la página una vez que el pedido AJAX vuelve con al respuesta (recordar que esto se hace en background)

    }*/

    render(){
        return (
            <>
                <SideBar/>
                <div>
                    <Example/>
                </div>
            </>
        )
    }
}