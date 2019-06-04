import React, { Component } from 'react'

import "./../css/Body.css"

export default class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let eyesStyles = {left: this.props.eyes.position_x, top: this.props.eyes.position_y}
        let hairStyles = {left: this.props.hair.position_x, top: this.props.hair.position_y}
        let mouthStyles = {left: this.props.mouth.position_x, top: this.props.mouth.position_y}
        let noseStyles = {left: this.props.nose.position_x, top: this.props.nose.position_y}
        
        return (
            <div id="content-avatar">
                <img id="body" src={this.props.body.url}/>
                <img id="eyes" style={eyesStyles} src={this.props.eyes.url}/>
                <img id="hair" style={hairStyles} src={this.props.hair.url}/>
                <img id="mouth" style={mouthStyles} src={this.props.mouth.url}/>
                <img id="nose" style={noseStyles} src={this.props.nose.url}/>
            </div>
        );
    }
}
