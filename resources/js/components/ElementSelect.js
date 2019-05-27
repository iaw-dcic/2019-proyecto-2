import React, { Component } from 'react';
import "./css/elementSelect.css";

//Avatares creados previamente

export default class ElementSelect extends Component {

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center" id="elementsFlex">
                    {this.props.avatarList.map (avatar => (
                        <div className="card" key={avatar.avatar_id} id="savedCard">
                            <img src={window.location.origin + '/avatar_elements/BaseModel.png'} id="savedBase"/>
                            <img src={window.location.origin + '/avatar_elements/' + avatar.hair + '.png'} id="savedHair"/>
                            <img src={window.location.origin + '/avatar_elements/' + avatar.shirt + '.png'} id="savedShirt"/>
                            <img src={window.location.origin + '/avatar_elements/' + avatar.beard + '.png'} id="savedBeard"/>
                            <div className="card-text">
                                <button className="btn btn-primary" id="selectButton" onClick={this.props.selectAvatar.bind (avatar)}>
                                    {avatar.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}