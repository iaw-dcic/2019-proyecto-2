import React, { Component } from 'react';
import "./css/utilities.css";

//Seccion de botones y nombre del avatar

//Poner un estado nombre, y que valga el props. reemplazar todo lo del props con el state

export default class Utilities extends Component {
    
    state = {
        currentName: this.props.name
    }

    render () {
        return (
            <>
                <div className="d-flex justify-content-center" id="textFlex">
                    <input type="text" className="form-control" id="avatarName" placeholder="Avatar Name" value={this.state.currentName}>
                    </input>
                </div>
                <div className="d-flex justify-content-center" id="buttonsFlex">
                    <button className="btn btn-secondary" id="cancelButton" onClick={this.props.returnToDefault}>
                        Cancel Changes
                    </button>
                    <button className="btn btn-primary" id="saveButton" onClick={this.props.saveChanges.bind (this.state.currentName)}>
                        Save Avatar
                    </button>
                </div>
            </>
        );
    }

}