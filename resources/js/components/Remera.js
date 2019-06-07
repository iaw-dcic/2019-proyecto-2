import React, { Component } from 'react';

export default class Remera extends Component {

    render() {
        return (
            <div className="container">
                <img className="img-fluid remera" src={this.props.color} width="550" height="500" alt=""/>
                <img className="img-fluid stampa" src={this.props.stampa} width="150" height="500" alt=""/>
            </div>
        );
    }
}
