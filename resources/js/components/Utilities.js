import React, { Component } from 'react';
import "./css/utilities.css";

//Seccion de botones y nombre del avatar

export default class Utilities extends Component {

    render () {
        return (
            <>
                <div className="d-flex justify-content-center" id="textFlex">
                    <input type="text" className="form-control" id="avatarName" placeholder="Avatar Name" defaultValue={this.props.name} onChange={this.updateName}>
                    </input>
                </div>
                <div className="d-flex justify-content-center" id="buttonsFlex">
                    <button className="btn btn-secondary" id="cancelButton" onClick={this.props.returnToDefault}>
                        Cancel Changes
                    </button>
                    <button className="btn btn-primary" id="saveButton" onClick={this.saveAvatar}>
                        Save Avatar
                    </button>
                </div>
            </>
        );
    }

    updateName = (event) => {
        this.props.updateName (event.target.value);
    }

    saveAvatar = () => {
        this.props.saveChanges ();
    }

}