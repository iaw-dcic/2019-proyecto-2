import React, { Component } from 'react';
import './Colores.css'
import {ConsumidorLogica} from '../Logica'


class Colores extends Component {
    
    render() {

        const {nombre,id}=this.props.color;

        return (
            <div className="panelColores">
                <ConsumidorLogica>
                    {(value) => ( 
                         <button  className={nombre} onClick={() => value.cambiarColor(this.props.color)}></button>
                    )}
                </ConsumidorLogica>
            </div>
        );
    }
}

export default Colores;