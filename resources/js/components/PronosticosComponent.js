import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PronosticosController from '../controllers/PronosticosController';
import ListaPronosticosComponent from './ListaPronosticosComponent';

export default class PronosticosComponent extends Component {

    constructor(props){
        super(props);
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

                    </div>
                    
                    <div className="col-12 d-flex w-100 justify-content-center align-items-center">
                        <button onClick={this.crearProde} className="btn btn-success mx-1 mt-4">Crear prode</button>
                    </div>
                </div>

                <div id="viewProde">
                </div>
            </div>
        );
    }      

    componentDidMount() {
        this.pronosticosController.loadPronosticos();
    }

    componentDidUpdate(prevProps, prevState) {
        this.mostrarListaProdes();
    }

    mostrarListaProdes(){
        let listaProdes = document.getElementById('listaProdes');
        ReactDOM.unmountComponentAtNode(viewProde);
        ReactDOM.render(<ListaPronosticosComponent user={this.state.user} prodes={this.state.prodes} />, listaProdes);
    }

    crearProde(event){
        event.preventDefault();
    }
}
