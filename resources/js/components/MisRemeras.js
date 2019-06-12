import React, { Component } from 'react';
import Remera from './Remera';

export default class MisRemeras extends Component {


    eliminar(e, remera) {
        this.props.eliminar(e, remera);
    }

    render() {

        return (
            <div className="container">
                <div className="row flex-row flex-nowrap">
                    {
                        this.props.misremeras.map((item) => ( //ESTO  NO ANDA
                            <div className="button-container" key = {item.id}>
                                <Remera
                                    key={item.id}
                                    color={item.colour}
                                    stampa={item.stampa}
                                    widthR="60" heightR="70"
                                    widthS="30" heightS="70"
                                    size="small"
                                />
                                <button className="boton-eliminar" onClick={(e) => this.eliminar(e, item.id)}>X</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        );
    }

}