import React, { Component } from 'react';
import Remera from './Remera';

export default class MisRemeras extends Component {
    /*
    eliminar(e, remera) {
        this.props.eliminarRemera(remera);
    }*/

    render() {

        return (
            <div className="container">
                    <div className="row flex-row flex-nowrap">
                        {
                            this.props.misremeras.map((item) => ( //ESTO  NO ANDA
                                <Remera 
                                key={item.id}
                                color={item.colour}
                                stampa={item.stampa}
                                widthR="60" heightR="70"
                                widthS="30" heightS="70"
                                size = "small"
                                />
                            ))
                        }
                </div>
            </div>

        );
    }

}