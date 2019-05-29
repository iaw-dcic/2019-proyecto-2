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
        avatarActual: {"hair":"Hair1", "shirt":"Shirt1", "beard":"Beard1"},
        avataresTotales: []
    };

    render () {
        return (
            <>
                <div className="d-flex justify-content-center" id="topFlex">
                    <div className="col-md-9" id="editor">
                        <AvatarView avatar={this.state.avatarActual}/>
                    </div>
                    <div className="col-md-3" id="options">
                        <AvatarComponents avatar={this.state.avatarActual}
                                          componentChange={this.componentChange}/>
                    </div>
                </div>
                <div className="d-flex justify-content-center" id="bottomFlex">
                    <div className="col-md-9" id="previous">
                        <ElementSelect avatarList={this.state.avataresTotales} selectAvatar={this.setSavedAvatar}/>
                    </div>
                    <div className="col-md-3" id="buttons">
                        <Utilities name={this.state.avatarActual.avatar_name} 
                                   returnToDefault={this.returnToDefault} 
                                   saveChanges={this.saveChanges}/>
                    </div>
                </div>
            </>
        );
    }

    componentChange = (avatar) => {
        this.setState ({
            avatarActual: {
                "avatar_name":this.state.avatarActual.avatar_name, 
                "owner":this.state.avatarActual.owner,
                "hair":avatar.hair,
                "shirt": avatar.shirt,
                "beard": avatar.beard
            }
        });
    }

    saveChanges = (event, name) => {
        const newActual = {
            avatar_name: name,
            owner: this.state.avatarActual.owner,
            hair: this.state.avatarActual.hair,
            shirt: this.state.avatarActual.shirt,
            beard: this.state.avatarActual.beard
        }
        this.setState (state => ({
            avatarActual: newActual,
            avataresTotales: state.avataresTotales.concat (state.avatarActual)
        }));
        event.preventDefault ();
        axios.post ('/avatars', 
            this.state.avatarActual
        );
    }

    returnToDefault = () => {
        this.setState ({
            avatarActual: {"hair":"Hair2", "shirt":"Shirt4", "beard":"Beard4"}
        });
    }

    setSavedAvatar = (avatar) => {
        this.setState (state => ({
            avatarActual: avatar
        }));
    }

}