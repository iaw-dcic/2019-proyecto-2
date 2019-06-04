
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
        <div class="table-responsive-md">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Mis Prodes</th> 
                        <th scope="col">Fecha de creación</th>
                        <th scope="col" className="thbtnsize"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th>{}</th>
                        <th>{}</th>
                        <th>
                            <button  type="button" className="btn btn-primary ml-3" >Ver</button>
                            <button  type="button" className="btn btn-success ml-3" >Editar</button>
                            <button  type="button" className="btn btn-danger ml-3" >Borrar</button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
        );
    }
}