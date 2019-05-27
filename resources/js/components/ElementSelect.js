import React, { Component } from 'react';
import "./css/elementSelect.css";

//Avatares creados previamente

export default class ElementSelect extends Component {

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center" id="elementsFlex">
                    {this.props.avatarList.map (avatar => (
                        <div className="card" key={avatar.avatar_id}>
                            {avatar.hair}
                            {avatar.shirt}
                            {avatar.beard}
                            <button className="btn btn-primary" id="selectButton" 
                                    onClick={this.props.selectAvatar.bind (avatar)}>
                                {avatar.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}