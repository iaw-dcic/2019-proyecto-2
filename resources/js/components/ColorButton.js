import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/colors.css'
import '../../../public/css/layout.css'


export default class ColorButton extends Component {
    constructor(props){

        super(props)
    }
    
    buttonClick(id){
        this.props.onClick(id)
    }

    render() {
        return (
                <label className={this.props.color.name}>
                    <input onClick={() =>this.buttonClick(this.props.color.id)} type="radio" name="color" value={this.props.color.name}/>
                    <div className="button"><span></span></div>
                </label>
        );
    }
}