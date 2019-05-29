import React, { Component } from 'react';
import axios from 'axios';
import "./css/componentApp.css";
import AvatarView from './AvatarView'
import AvatarComponents from './AvatarComponents'
import ElementSelect from './ElementSelect'
import Utilities from './Utilities'

//Clase base de la aplicacion

export default class ComponentApp extends Component {
    
    state = { 
        currentAvatar: {
            "avatar_name": "", 
            "hair": "Hair1", 
            "shirt": "Shirt1", 
            "beard": "Beard1"
        },
        allAvatar: []
    };

    render () {
        return (
            <>
                <div className="d-flex justify-content-center" id="topFlex">
                    <div className="col-md-9" id="editor">
                        <AvatarView avatar={this.state.currentAvatar}/>
                    </div>
                    <div className="col-md-3" id="options">
                        <AvatarComponents avatar={this.state.currentAvatar}
                                          componentChange={this.componentChange}/>
                    </div>
                </div>
                <div className="d-flex justify-content-center" id="bottomFlex">
                    <div className="col-md-9" id="previous">
                        <ElementSelect avatarList={this.state.allAvatar} 
                                       setSavedAvatar={this.setSavedAvatar}/>
                    </div>
                    <div className="col-md-3" id="buttons">
                        <Utilities name={this.state.currentAvatar.avatar_name} 
                                   returnToDefault={this.returnToDefault} 
                                   saveChanges={this.saveChanges}/>
                    </div>
                </div>
            </>
        );
    }

    componentChange = (avatar) => {
        this.setState ({
            currentAvatar: {
                "avatar_id": this.state.currentAvatar.avatar_id,
                "avatar_name": this.state.currentAvatar.avatar_name, 
                "owner": this.state.currentAvatar.owner,
                "hair": avatar.hair,
                "shirt": avatar.shirt,
                "beard": avatar.beard
            }
        });
    }

    saveChanges = (name) => {
        this.setState ({
            currentAvatar: {
                "avatar_id": this.state.currentAvatar.avatar_id,
                "avatar_name": name,
                "owner": this.state.currentAvatar.owner,
                "hair": this.state.currentAvatar.hair,
                "shirt": this.state.currentAvatar.shirt,
                "beard": this.state.currentAvatar.beard
            },
            allAvatar: this.state.allAvatar.concat (this.state.currentAvatar)
        });
        axios.post ('/app/avatars', {
            avatar_id: this.state.currentAvatar.avatar_id,
            avatar_name: this.state.currentAvatar.avatar_name,
            owner: this.state.currentAvatar.owner,
            hair: this.state.currentAvatar.hair,
            shirt: this.state.currentAvatar.shirt,
            beard: this.state.currentAvatar.beard
        }).then(response => {
            console.log('from handle submit', response);
        });;
    }

    returnToDefault = () => {
        this.setState ({
            currentAvatar: {
                "avatar_id": this.state.currentAvatar.avatar_id,
                "avatar_name": this.state.currentAvatar.avatar_name, 
                "owner": this.state.currentAvatar.owner,
                "hair": "Hair1",
                "shirt": "Shirt1",
                "beard": "Beard1"
            }
        });
    }

    setSavedAvatar = (avatar) => {
        this.setState ({
            currentAvatar: {
                "avatar_id": avatar.avatar_id,
                "avatar_name": avatar.avatar_name,
                "owner": avatar.owner,
                "hair": avatar.hair,
                "shirt": avatar.shirt,
                "beard": avatar.beard
            }
        });
    }

}