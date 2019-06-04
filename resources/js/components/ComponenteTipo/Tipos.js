import React, { Component } from 'react';
import {ConsumidorLogica} from '../Logica'

class Tipos extends Component {
    render() {
        const {nombre,id}=this.props.tipo;

        return (
            <div className="Botones"> 
                 <ConsumidorLogica>
                    {(value) => ( 
                         <button className="BotonGeneral" onClick={() => value.cambiarTipo(this.props.tipo)}>{nombre}</button>
                    )}
                </ConsumidorLogica>
            </div>
        );
    }
}

export default Tipos;