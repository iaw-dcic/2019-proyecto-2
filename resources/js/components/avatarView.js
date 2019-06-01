import React, { Component } from 'react';
import SideBar from './SideBar.js'
import Avatar from './Avatar.js'
import axios from 'axios';


export default class AvatarView extends Component{
    state = {
        name : 'Default',
        face : 'Cara1',
        hair : 'Pelo1',
        eyes : 'Ojos1',
        mouth : 'Boca1',
        AllAvatars : [],
        userID : -1,
        errors : []
    };
    
   handleNameChange(event){
   
        this.setState({name : event.target.value});
   }

   handleFaceChange(event){
        this.setState({
            face : event.target.name
        })

    }
    handleHairChange(event){
        this.setState({
            hair : event.target.name
        })

    }
    handleEyesChange(event){
        this.setState({
            eyes : event.target.name
        })

    }
    handleMouthChange(event){
        this.setState({
            mouth : event.target.name
        })

    }


    componentDidMount () {
        let token = document.head.querySelector('meta[name="api-token"]');
        token = token.content; //obtengo el api-token del usuario
   
        //preparo el mensaje para mandar el token
        /*var config = {
            headers: {'Authorization': "Bearer " + token}
        };
        
        var bodyParameters = {
           key: "value"
        }*/
        //intento hacer la llamada por axios
        axios.get( 
          'api/user/'
        ).then((response) => {
            console.log(response.data)
            this.setState({
                userID : response.data
            })
        }).catch((error) => {
          console.log(error)
        });

        axios.get(
            'api/' + this.state.userID + '/avatars'
            
        ).then((response) =>{
            console.log(response.data)
        })
    }

    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFaceChange = this.handleFaceChange.bind(this);
        this.handleHairChange = this.handleHairChange.bind(this);
        this.handleEyesChange = this.handleEyesChange.bind(this);
        this.handleMouthChange = this.handleMouthChange.bind(this);


        //this.handleCreateNewAvatar = this.handleCreateNewAvatar.bind(this);
    }
    
  

    /*handleCreateNewAvatar(event){
        event.preventDefault(); //evito que la página reaccione e intente hacer un POST convencional para yo manejarlo por la API
         if(event.target.value ="")
            alert("No se puede tener un avatar SIN nombre, por favor, ingrese un nombre")
        else{
            const avatar = {
                name = this.state.name
                face = this.state.face
                hair = this.state.hair
                eyes = this.state.eyes
                mouth = this.state.mouth
                userID = this.state.userID
            }
        }
        axios.post('api/' + userID + '/avatars', {avatar}).then(res => {console.log(res);}) //hago el POST por Axios a la API que yo creé
        //el then(...) es lo que hace la página una vez que el pedido AJAX vuelve con al respuesta (recordar que esto se hace en background)

    }*/

    render(){
        return (
            <>
                <div className="d-flex">
                    <div className="col-md-9">
                        <Avatar 
                            handleNameChange={this.handleNameChange}
                            face={this.state.face}
                            hair={this.state.hair}
                            eyes={this.state.eyes}
                            mouth={this.state.mouth}
                        />
                    </div>
                
                    <div className="col-md-3">
                        <SideBar
                            handleFaceChange={this.handleFaceChange}
                            handleHairChange={this.handleHairChange}
                            handleEyesChange={this.handleEyesChange}
                            handleMouthChange={this.handleMouthChange}
                            AllAvatars={this.state.AllAvatars}
                        />
                    </div>
                </div>

            </>
        )
    }
}