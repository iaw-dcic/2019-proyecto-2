import React, { Component } from 'react';
import './Creacion.css'
import {Link} from 'react-router-dom'

class Creacion extends Component {

    render() {

        const {id,color, cuello, tipo} = this.props.creacion;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
 
                            <img src={"img/"+color+cuello+tipo+".png"} alt="modeloRemera" className="card-img-top" />

                    </div>                      
                </div>
            </div>
        );
    }
}

export default Creacion;