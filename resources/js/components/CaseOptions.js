import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import '../../../public/css/caseOptions.css';

export default class CaseOptions extends Component {
    constructor(){
        super()
    }
    
    buttonClick(id){
        this.props.onClick(id)
    }

    render() {
        return (
            <div className="hover-btn">
                <button onClick={() =>this.buttonClick(1)} className="btn btn-style">iPhone 7/8</button>
                <button onClick={() =>this.buttonClick(2)} className="btn btn-style">iPhone X</button>
                <button onClick={() =>this.buttonClick(3)} className="btn btn-style">iPhone XR</button>
                <button onClick={() =>this.buttonClick(4)} className="btn btn-style">Samsung S8</button>
                <button onClick={() =>this.buttonClick(5)} className="btn btn-style">Xiaomi F1</button>
            </div>
        );
    }
}