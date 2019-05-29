import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/colors.css'
import '../../../public/css/layout.css'


export default class Colors extends Component {
    constructor(){
        super()
    }
    
    buttonClick(id){
        this.props.onClick(id)
    }

    render() {
        return (
            <div>
                <label className="orange">
                    <input onClick={() =>this.buttonClick(1)} type="radio" name="color" value="orange"/>
                    <div className="button"><span></span></div>
                </label>
                <label className="amber">
                    <input onClick={() =>this.buttonClick(2)} type="radio" name="color" value="amber"/>
                    <div className="button"><span></span></div>
                </label>
                <label className="lime">
                    <input onClick={() =>this.buttonClick(3)} type="radio" name="color" value="lime"/>
                    <div className="button"><span></span></div>
                </label>
                <label className="teal">
                    <input onClick={() =>this.buttonClick(4)} type="radio" name="color" value="teal"/>
                    <div className="button"><span></span></div>
                </label>
                <label className="blue">
                    <input onClick={() =>this.buttonClick(5)} type="radio" name="color" value="blue"/>
                    <div className="button"><span></span></div>
                </label>    
                <label className="indigo">
                    <input onClick={() =>this.buttonClick(6)} type="radio" name="color" value="indigo"/>
                    <div className="button"><span></span></div>
                </label>
                <label className="white">
                    <input onClick={() =>this.buttonClick(0)} type="radio" name="color" value="white"/>
                    <div className="button"><span></span></div>
                </label>
            </div>
        );
    }
}