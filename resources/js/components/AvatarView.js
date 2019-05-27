import React, { Component } from 'react';
import "./css/avatarView.css";

//Ventana principal del avatar actual

export default class AvatarView extends Component {

    render() {
        return (
            <div className="mx-auto">
                <div>
                    <img src={window.location.origin + '/avatar_elements/BaseModel.png'} id="basePicture"/>
                    <img src={window.location.origin + '/avatar_elements/' + this.props.avatar.hair + '.png'} id="hairPicture"/>
                    <img src={window.location.origin + '/avatar_elements/' + this.props.avatar.shirt + '.png'} id="shirtPicture"/>
                    <img src={window.location.origin + '/avatar_elements/' + this.props.avatar.beard + '.png'} id="beardPicture"/>
                </div>
            </div>
        );
    }

}