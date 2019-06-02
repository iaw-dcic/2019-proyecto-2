import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PronosticoController from '../controllers/PronosticoController';

export default class PronosticoComponent extends Component {

    constructor(props){
        super(props);

        this.cerrarProde = this.props.cerrarProde;
        this.saveProde = this.saveProde.bind(this);
        this.resetProde = this.resetProde.bind(this); 
        this.cerrarProde = this.cerrarProde.bind(this); 
        this.deleteProde = this.deleteProde.bind(this);

        this.state = {user: this.props.user, prode: this.props.prode};

        this.pronosticoController = new PronosticoController(this);
    }

    render() {
        return (
            <div className="col-12">          
                <div className="row justify-content-center">
                    <div className="w-75 d-flex justify-content-end mb-3 boton-volver">
                        <a onClick={() => this.cerrarProde()}>
                            <i className="fas fa-times"></i>
                        </a>
                    </div>  
                    <div className="col-12">
                        <div id="tablero-pronosticos" className="mb-5 d-flex justify-content-center align-items-center">                            
                        </div>
                    </div>
                    <div className="col-12 d-flex w-100 justify-content-center align-items-center">
                        <button onClick={this.saveProde} className="btn btn-success mx-1">Guardar</button>
                        <button onClick={this.resetProde} className="btn btn-danger mx-1">Reset</button>
                        <button onClick={this.deleteProde} className="btn btn-danger mx-1">Borrar</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.pronosticoController.saveOnLocalStorage(this.state.prode);
        this.crearTablero();
    }

    componentDidUpdate(prevProps, prevState) {
        this.crearTablero();      
    }

    //Guarda los datos en el servidor
    saveProde(event) {
        event.preventDefault();
        this.pronosticoController.saveProde();
    }

    //Reestablece los datos
    resetProde(event){
        event.preventDefault();
        this.pronosticoController.resetProde();
    }

    //Borrar los datos
    deleteProde(event){
        event.preventDefault();
    }

    //Actualiza el tablero en el div #tablero-pronosticos
    crearTablero(){
        $('#tablero-pronosticos').bracket({
            init: this.state.prode,
            save: (data) => this.pronosticoController.saveOnLocalStorage(data),
            centerConnectors: true,
            disableToolbar: true,
            disableTeamEdit: true
        });
    }
}
