import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PronosticosController from '../controllers/PronosticosController';
import PronosticoComponent from './PronosticoComponent';

export default class PronosticosComponent extends Component {

    constructor(props){
        super(props);
        this.actualizarProdes = this.actualizarProdes.bind(this);
        this.cerrarProde = this.cerrarProde.bind(this);
        this.state = { user: this.props.user, prodes: [] };

        this.pronosticosController = new PronosticosController(this);
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
                        <button onClick={(event) => this.seleccionarProde(event, null)} className="btn btn-success mx-1 mt-4">Crear prode</button>
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
        this.pronosticosController.loadPronosticos();
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
