import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Manejo extends Component {
    render() {
        var child1 = <button className="list-group-item list-group-item-action myButton" >{this.props.teamA} </button>
        var child2 =  <button className="list-group-item list-group-item-action myButton" >{this.props.teamB}</button>
        return (
         
            
                <tr >
                  <td>{child1}</td>
                  <td className="p-3 mb-2 bg-dark text-white">VS</td>
                  <td>{child2}</td>
                </tr>
                        
               
        );
    }
}