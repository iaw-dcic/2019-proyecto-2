import React, { Component } from 'react';
import './TShirt.css'


export default class Example extends Component {

    functionToSaveImage(){
        return true;
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center tshirt-container">
                    <div id="tshirt_image" className="tshirt-contents color red image"></div>
                    <img className="tshirt-contents" src="/storage/uploads/basic_tee_foreground.png"/>
                </div>
            </div>
        );
    }
}
