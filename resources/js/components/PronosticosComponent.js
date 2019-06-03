import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PronosticosController from '../controllers/PronosticosController';
import ListaPronosticosComponent from './ListaPronosticosComponent';

export default class PronosticosComponent extends Component {

    constructor(props){
        super(props);
        this.actualizarProdes = this.actualizarProdes.bind(this);
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

    actualizarProdes(){
        this.pronosticosController.loadPronosticos();
        ReactDOM.unmountComponentAtNode(viewProde);
    }

    mostrarListaProdes(){
        let listaProdes = document.getElementById('listaProdes');
        ReactDOM.render(<ListaPronosticosComponent user={this.state.user} prodes={this.state.prodes} actualizarProdes={this.actualizarProdes} />, listaProdes);
    }
}
