import React, { Component } from 'react';

export default class Game extends Component {
    render() {
        var child1 =<div>
                      <img className="img" src={this.props.iconA} />
                      <button className="list-group-item list-group-item-action myButton" id = {this.props.id1}
                      onClick={this.props.onClick} disabled = {this.props.disable}>
                        {this.props.teamA}
                      </button>
                    </div> 

        var child2 =<div>
                      <img className="img" src={this.props.iconB} />  
                      <button className="list-group-item list-group-item-action myButton" id = {this.props.id2}
                      onClick={this.props.onClick} disabled = {this.props.disable}>
                        {this.props.teamB}
                      </button>
                    </div> 
        return (
                <div className="card">
                  <div className="list-group">{child1}{child2}</div>
                </div>
        );
    }
}