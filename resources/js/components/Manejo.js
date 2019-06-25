import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Manejo extends Component {
    render() {
        var child1 = <button key={this.props.id1+""+this.props.EquipoA} className="list-group-item list-group-item-action myButton" id = {this.props.id1}
                    onClick={this.props.onClick} disabled = {this.props.disable}> {this.props.EquipoA} </button>

        var child2 =  <button key={this.props.id1+""+this.props.EquipoB}  className="list-group-item list-group-item-action myButton" id = {this.props.id2}
                    onClick={this.props.onClick} disabled = {this.props.disable} >{this.props.EquipoB}</button>


        return (
         
            
                <tr >
                  <td>{child1}</td>
                  <td className="p-3 mb-2 bg-dark text-white">VS</td>
                  <td>{child2}</td>
                </tr>
                        
               
        );
    }
}