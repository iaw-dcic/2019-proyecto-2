import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css'

export default class Save extends Component {
    constructor(){
        super()

    }


    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary">Guardar cambios</button>
            </div>
        );
    }
}