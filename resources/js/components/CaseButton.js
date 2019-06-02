import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/caseOptions.css'
import '../../../public/css/layout.css'


export default class CaseButton extends Component {
    constructor(){
        super()
    }
    
    buttonClick(id){
        this.props.onClick(id)
    }

    render() {
        return (
            <button onClick={() =>this.buttonClick(this.props.funda.id)} className="btn btn-style">{this.props.funda.name}</button>
        );
    }
}