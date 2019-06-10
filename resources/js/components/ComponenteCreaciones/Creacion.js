import React, { Component } from 'react';
import './Creacion.css'
import { ConsumidorLogica } from '../Logica';

class Creacion extends Component {

    render() {

        const {id, color, cuello, tipo} = this.props.creacion;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                    <div className="img-container p-5">
                        <img src={"img/"+color+cuello+tipo+".png"} alt="modeloRemera" className="card-img-top" />
                    </div>                      

                    <ConsumidorLogica>
                         {(value) => {
                            return (
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="align-self-center mb-0 botones" onClick={value.eliminarRemera(id)}> Eliminar </button>
                                    <button className="align-self-center mb-0 botones"> Editar </button>
                                </div>
                            )}
                        }
                         </ConsumidorLogica>

                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">
                            </span>
                        </h5>

                </div>
            </div>
        );
    }
}

export default Creacion;