import React, { Component } from 'react';
import "./css/avatarView.css";

//Ventana principal del avatar actual

export default class AvatarView extends Component {

    render() {
        return (
            <div className="mx-auto">
                <div>
                    <img src={process.env.PUBLIC_URL + '/avatar_elements/BaseModel.png'} id="basePicture"/>
                    {this.props.avatar.hair}
                    {this.props.avatar.shirt}
                    {this.props.avatar.beard}
                </div>
            </div>
        );
    }

}