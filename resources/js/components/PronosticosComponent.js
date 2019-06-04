import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PronosticosController from '../controllers/PronosticosController';
import PronosticoComponent from './PronosticoComponent';

export default class PronosticosComponent extends Component {

    constructor(props){
        super(props);
        this.createProde = this.createProde.bind(this);
        this.actualizarProdes = this.actualizarProdes.bind(this);
        this.cerrarProde = this.cerrarProde.bind(this);
        this.state = { user: this.props.user, prodes: [] };

        this.pronosticosController = new PronosticosController(this.state.user);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Pronósticos</h3>
                            <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div id="listaProdes" className="list-group col-4">
                        { this.cargarLista() }
                    </div>
                    <div className="col-12 d-flex w-100 justify-content-center align-items-center">
                        <button onClick={this.createProde} className="btn btn-success mx-1 mt-4">Crear prode</button>
                    </div>
                </div>

                <div id="viewProde">
                </div>
            </div>
        );
    }      

    componentDidMount() {
        this.actualizarProdes();
    }

    actualizarProdes(){
        this.pronosticosController.loadProdes()
            .then(prodes => this.setState({ user: this.state.user, prodes }))
            .catch(error => console.log(error));
    }   

    createProde(event){
        this.pronosticosController.createProde()
            .then(prode => this.seleccionarProde(event, prode))
            .catch(error => console.log(error)); 
    }

    seleccionarProde(prode){
        this.cerrarProde();
        let viewProde = document.getElementById('viewProde');
        ReactDOM.render(<PronosticoComponent user={this.state.user} prode={prode} cerrarProde={this.cerrarProde} actualizarProdes={this.actualizarProdes} />, viewProde);
    }

    cerrarProde(){
        let viewProde = document.getElementById('viewProde');
        ReactDOM.unmountComponentAtNode(viewProde);
        this.actualizarProdes();
    }

    cargarLista(){
        return this.state.prodes.map((prode) => {
            return (
                <button onClick={() => this.seleccionarProde(prode)} key={prode.id} className="list-group-item list-group-item-action d-flex justify-content-center item-prode">
                    Prode N°{prode.id}
                </button>
            )
        });
    } 
}
