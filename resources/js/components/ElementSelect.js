import React, { Component } from 'react';
import "./css/elementSelect.css";

//Avatares creados previamente

export default class ElementSelect extends Component {

    contstructor (props) {
        this.selectAvatar = this.selectAvatar.bind (this);
    }

    render () {
        return (
            <div className="auxflex">
                <div className="d-flex justify-content-center elementsFlex">
                    {this.props.avatarList.map (avatar => (
                        <div className="card text-center savedCard" key={avatar.avatar_id}>
                            <div className="card-body avatarImage">
                                <img src={window.location.origin + '/avatar_elements/BaseModel.png'} className="savedBase"/>
                                <img src={window.location.origin + '/avatar_elements/' + avatar.hair + '.png'} className="savedHair"/>
                                <img src={window.location.origin + '/avatar_elements/' + avatar.shirt + '.png'} className="savedShirt"/>
                                <img src={window.location.origin + '/avatar_elements/' + avatar.beard + '.png'} className="savedBeard"/>
                            </div>
                            <div className="card-text selectButtonContainer">
                                <button className="btn btn-primary selectButton" onClick={() => this.selectAvatar(avatar)}>
                                    {avatar.avatar_name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    selectAvatar (avatar) {
        this.props.setSavedAvatar (avatar);
    }

}