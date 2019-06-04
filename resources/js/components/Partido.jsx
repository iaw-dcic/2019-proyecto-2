import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Equipo from './Equipo';

export default class  extends Component {
    state = {  }
    render() { 
        return (  
            <div className="m-3 border border-dark">
                <div>
                    <Equipo 
                        onSeleccionEquipo = {this.props.onSeleccionEquipo} 
                        nombre = {this.props.equipo1}
                        id = {this.props.equipo1id}
                        disable = {this.props.disable}
                    ></Equipo> 
                </div>
                <div>
                <Equipo 
                        onSeleccionEquipo = {this.props.onSeleccionEquipo} 
                        nombre = {this.props.equipo2}
                        id = {this.props.equipo2id}
                        disable = {this.props.disable}
                    ></Equipo> 
                </div>
            </div>
            
        );
    }
}
 
