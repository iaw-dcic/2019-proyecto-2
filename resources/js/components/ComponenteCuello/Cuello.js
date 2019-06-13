import React, { Component } from 'react';
import {ConsumidorLogica} from '../Logica'

class Cuello extends Component {
    render() {
        const {nombre,id}=this.props.cuello;
        
        return (
            <div className="Botones">
                <ConsumidorLogica>
                    {(value) =>  {
                        return(
                            <div>
                            <button className="BotonGeneral" onClick={() => value.cambiarCuello(this.props.cuello)}>{nombre}</button>
                            </div>
                        )
                    }}
                </ConsumidorLogica>
            </div>
        );
    }
}

export default Cuello;