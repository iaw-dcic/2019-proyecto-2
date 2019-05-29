import React, { Component } from 'react';
import "./css/elementSelect.css";

//Avatares creados previamente

export default class ElementSelect extends Component {

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center" id="elementsFlex">
                    {this.props.avatarList.map (avatar => (
                        <div className="card savedCard" key={avatar.avatar_id}>
                            <img src={window.location.origin + '/avatar_elements/BaseModel.png'} className="savedBase"/>
                            <img src={window.location.origin + '/avatar_elements/' + avatar.hair + '.png'} className="savedHair"/>
                            <img src={window.location.origin + '/avatar_elements/' + avatar.shirt + '.png'} className="savedShirt"/>
                            <img src={window.location.origin + '/avatar_elements/' + avatar.beard + '.png'} className="savedBeard"/>
                            <div className="card-text">
                                <button className="btn btn-primary selectButton" onClick={this.props.selectAvatar.bind (avatar)}>
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