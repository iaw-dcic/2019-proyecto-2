import React, { Component } from 'react';
import "./css/avatarView.css";

//Current avatar's main window

export default class AvatarView extends Component {

    render () {
        return (
            <div className="mx-auto">
                <div>
                    <img src={window.location.origin + '/avatar_elements/BaseModel.png'} className="basePicture"/>
                    <img src={window.location.origin + '/avatar_elements/' + this.props.avatar.hair + '.png'} className="hairPicture"/>
                    <img src={window.location.origin + '/avatar_elements/' + this.props.avatar.shirt + '.png'} className="shirtPicture"/>
                    <img src={window.location.origin + '/avatar_elements/' + this.props.avatar.beard + '.png'} className="beardPicture"/>
                </div>
            </div>
        );
    }

}