import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PronosticoComponent from './PronosticoComponent';

export default class ListaPronosticosComponent extends Component {

    constructor(props){
        super(props);
        this.cerrarProde = this.cerrarProde.bind(this);
        
        this.state = {user: this.props.user, prodes: this.props.prodes};
    }

    render() {
        return ( this.state.prodes.map((prode) => {
            return (
                <a href="" onClick={(event) => this.seleccionarProde(event, prode)} key={prode.id} className="list-group-item list-group-item-action d-flex justify-content-center item-prode">
                    Prode N°{prode.id}
                </a>
            )
        }))
    }    

    seleccionarProde(event, prode){
        event.preventDefault();
        let viewProde = document.getElementById('viewProde');
        ReactDOM.render(<PronosticoComponent user={this.state.user} prode={prode} cerrarProde={this.cerrarProde} />, viewProde);
    }

    cerrarProde(){
        let viewProde = document.getElementById('viewProde');
        ReactDOM.unmountComponentAtNode(viewProde);
    }
}