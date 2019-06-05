import React, { Component } from 'react';
import "./css/utilities.css";

//Seccion de botones y nombre del avatar

export default class Utilities extends Component {

    render () {
        return (
            <>
                <div className="d-flex justify-content-center nameFlex">
                    <div>Current Name:</div>
                </div>
                <div className="d-flex justify-content-center textFlex">
                    <input type="text" className="form-control avatarName" placeholder="Avatar Name" value={this.props.name} onChange={this.updateName}>
                    </input>
                </div>
                <div className="d-flex justify-content-center buttonsFlex">
                    <button className="btn btn-secondary cancelButton" onClick={this.props.returnToDefault}>
                        Reset
                    </button>
                    <button className="btn btn-primary saveButton" onClick={this.saveAvatar}>
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