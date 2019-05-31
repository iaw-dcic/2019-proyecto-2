import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Game extends Component {
    render() {
        var child1 = <button className="list-group-item list-group-item-action" id = {this.props.id1}
                    onClick={this.props.onClick} disabled = {this.props.disable}>{this.props.teamA}</button>
        var child2 =  <button className="list-group-item list-group-item-action" id = {this.props.id2}
                    onClick={this.props.onClick} disabled = {this.props.disable}>{this.props.teamB}</button>
        return (
                <div className="card">
                  <div className="list-group">{child1}{child2}</div>
                </div>
        );
    }
}
