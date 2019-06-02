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
        AllAvatars : new Array(),
        userID : -1,
        avatarID : -1,
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
          
            this.setState({
                userID : response.data
            })
            
            axios.get(
                'api/' + this.state.userID + '/avatars'
                
            ).then((response) =>{
               
                this.setState({
                    AllAvatars : this.state.AllAvatars.push(response.data)
                })
                console.log(this.state.AllAvatars);
            })
            return
        }).catch((error) => {
          console.log(error)
        });

    }

    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFaceChange = this.handleFaceChange.bind(this);
        this.handleHairChange = this.handleHairChange.bind(this);
        this.handleEyesChange = this.handleEyesChange.bind(this);
        this.handleMouthChange = this.handleMouthChange.bind(this);
        this.handleCreateNewAvatar = this.handleCreateNewAvatar.bind(this);
    }
    
  

    handleCreateNewAvatar(event){
        event.preventDefault(); //evito que la página reaccione e intente hacer un POST convencional para yo manejarlo por la API
    
         if(this.state.name == "")
            alert("No se puede tener un avatar SIN nombre, por favor, ingrese un nombre")
        else{
            const avatar = {
                name : this.state.name,
                skin : this.state.face,
                hair : this.state.hair,
                eyes : this.state.eyes,
                mouth : this.state.mouth,
                userID : this.state.userID,
                avatarID : this.state.avatarID 
            }
         

            axios.post('api/' + this.state.userID + '/avatars', avatar).then(res => {
                console.log(res);
                if(this.state.avatarID == -1){
                    this.setState({
                        avatarID : res.data,
                        allAvatars : this.state.AllAvatars.push(avatar) 
                    })


                }
            }) //hago el POST por Axios a la API que yo creé
            //el then(...) es lo que hace la página una vez que el pedido AJAX vuelve con al respuesta (recordar que esto se hace en background)
            alert("Tu avatar ha sido guardado con exito");
        }
     

    }

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
                            handleCreateNewAvatar = {this.handleCreateNewAvatar}
                        />
                    </div>
                </div>

            </>
        )
    }
}