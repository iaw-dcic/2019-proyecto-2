import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PronosticoComponent from './PronosticoComponent';

export default class ListaPronosticosComponent extends Component {

    constructor(props){
        super(props);
        this.cerrarProde = this.cerrarProde.bind(this);
        this.actualizarProdes = this.props.actualizarProdes;

        this.state = {user: this.props.user, prodes: this.props.prodes};
    }

    render() {
        return (
            <div>
                { this.cargarLista() }
                <div className="col-12 d-flex w-100 justify-content-center align-items-center">
                    <button onClick={(event) => this.seleccionarProde(event, null)} className="btn btn-success mx-1 mt-4">Crear prode</button>
                </div>
            </div>
        );
    }

    cargarLista(){
        return this.state.prodes.map((prode) => {
            return (
                <a href="" onClick={(event) => this.seleccionarProde(event, prode)} key={prode.id} className="list-group-item list-group-item-action d-flex justify-content-center item-prode">
                    Prode N°{prode.id}
                </a>
            )
        });
    }    

    seleccionarProde(event, prode){
        event.preventDefault();
        this.cerrarProde();
        let viewProde = document.getElementById('viewProde');
        ReactDOM.render(<PronosticoComponent user={this.state.user} prode={prode} cerrarProde={this.cerrarProde} actualizarProdes={this.actualizarProdes} />, viewProde);
    }

    cerrarProde(){
        let viewProde = document.getElementById('viewProde');
        ReactDOM.unmountComponentAtNode(viewProde);
        this.actualizarProdes();
    }
}