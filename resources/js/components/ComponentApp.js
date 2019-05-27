import React, { Component } from 'react';
import axios from 'axios';
import "./css/componentApp.css";
import AvatarView from './AvatarView'
import AvatarComponents from './AvatarComponents'
import ElementSelect from './ElementSelect'
import Utilities from './Utilities'

//en el saveChanges llamo al axios para que le diga al controlador que metodo usar
//tengo que usar un setstate para que, lo que trae el avatarcomponents, lo guarde en el avatar actual aca, y eso se refleja automaticamente en el avatarview

//Clase base de la aplicacion

export default class ComponentApp extends Component {
    
    state = { 
        avatarActual: {"hair":"Hair1.png", "shirt":"Shirt1.png", "beard":"Beard1.png"},
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
                        <AvatarComponents/>
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

    saveChanges = (event, name) => {
        const newActual = {
            avatar_name: name,
            owner: this.state.avatarActual.owner,
            hair: name,
            shirt: this.state.avatarActual.shirt,
            beard: this.state.avatarActual.beard,
        }
        this.setState (state => ({
            avatarActual: newActual,
            avataresTotales: state.avataresTotales.concat (state.avatarActual)
        }));
        event.preventDefault ();
        axios.post ('/avatars', {
            avatarActual: this.state.avatarActual
        });
    }

    returnToDefault = () => {
        this.setState ({
            avatarActual: {"hair":"Hair2.png", "shirt":"Shirt2.png", "beard":"Beard2.png"}
        });
    }

    setSavedAvatar = (avatar) => {
        this.setState (state => ({
            avatarActual: avatar
        }));
    }

}