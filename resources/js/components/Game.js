import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Game extends Component {
    render() {
        return (
                <div className="card">
                  <div className="list-group">
                    <button className="list-group-item list-group-item-action" id = {this.props.id1}
                    onClick={this.props.onClick}>{this.props.teamA}</button>
                    <button className="list-group-item list-group-item-action" id = {this.props.id2}
                    onClick={this.props.onClick}>{this.props.teamB}</button>
                  </div>
                </div>
        );
    }
}
