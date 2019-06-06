import React, { Component } from 'react';
import {ConsumidorLogica} from '../Logica'

class Cuello extends Component {
    render() {
        const {nombre,id}=this.props.cuello;
        
        return (
            <div className="Botones">
                <ConsumidorLogica>
                    {(value) => ( 
                        <button className="BotonGeneral" onClick={() => value.cambiarCuello(this.props.cuello)}>{nombre}</button>
                    )}
                </ConsumidorLogica>
            </div>
        );
    }
}

export default Cuello;