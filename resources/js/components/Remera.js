import React, { Component } from 'react';

export default class Remera extends Component {

    render() {
        return (
            <div className="container container-absolute">
                <img className={"img-fluid remera-"+this.props.size} src={this.props.color} width={this.props.widthR} height={this.props.heightR} alt=""/>
                <img className={"img-fluid stampa-"+this.props.size} src={this.props.stampa} width={this.props.widthS} height={this.props.heightS} alt="" />
            </div>
        );
    }
}
