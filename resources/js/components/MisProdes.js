import React, { Component } from 'react';
import './css/MisProdes.css'

export default class MisProdes extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row justify-content-center mt-5">
                <table className="table table-striped tablesize" align="center">
                    <thead>
                        <tr>
                            <th scope="col" className="thsize">Mis Prodes</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col" className="thbtnsize"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.prodes.map(prode =>
                        <tr key={prode.id}>
                            <th>{prode.name}</th>
                            <th>{prode.created_at}</th>
                            <th>
                                <button id={prode.id} type="button" className="btn btn-success" onClick={this.props.edit}>Editar</button>
                                <button id={prode.id} type="button" className="btn btn-danger ml-1" onClick={this.props.delete}>Borrar</button>
                            </th>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}