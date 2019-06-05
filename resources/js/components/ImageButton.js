import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/images.css'
import '../../../public/css/layout.css'


export default class ImageButton extends Component {
    constructor(props){

        super(props)
    }
    
    buttonClick(id){
        this.props.onClick(id)
    }

    render() {
        return (
            <button onClick={() =>this.buttonClick(this.props.image.id)} className="btn btn-style"> 
                <img src={this.props.image.path} height="35"/>
            </button>
        );
    }
}