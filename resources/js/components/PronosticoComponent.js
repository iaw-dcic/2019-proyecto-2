import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import PronosticoController from '../controllers/PronosticoController';

export default class PronosticoComponent extends Component {

    constructor(props){
        super(props);

        this.saveProde = this.saveProde.bind(this);
        this.resetProde = this.resetProde.bind(this); 
        this.deleteProde = this.deleteProde.bind(this);
        this.refreshProde = this.refreshProde.bind(this);
        this.guardardatos = this.guardarDatos.bind(this);

        this.cerrarProde = this.props.cerrarProde;
        this.actualizarProdes = this.props.actualizarProdes;

        this.prode = this.props.prode;
        this.user = this.props.user;
        this.state = {user: this.user, prode: this.prode};

        this.pronosticoController = new PronosticoController(this.user);
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
        this.pronosticoController.saveProde(this.prode)
            .then(prode => {
                this.refreshProde(prode);
                Swal.fire(
                    'Prode creado correctamente!',
                    'Presiona OK para continuar',
                    'success'
                );
            })
            .catch(error => {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Error, intente nuevamente en unos momentos!'
                })
            });
    }

    //Reestablece los datos
    resetProde(event){
        event.preventDefault();
        this.pronosticoController.resetProde(this.prode)
            .then(prode => this.refreshProde(prode))
            .catch(error => console.log(error));
    }

    //Borrar los datos
    deleteProde(event){
        event.preventDefault();
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción es irreversible",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
            })
            .then((result) => {
            if (result.value) {
                this.pronosticoController.deleteProde(this.prode)
                    .then(resultado => {
                        if(resultado == true){
                             Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            this.refreshProde(null);
                        }else{
                            Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: 'Error, intente nuevamente en unos momentos!'
                            });
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Error, intente nuevamente en unos momentos!'
                        });
                    });
            }
        });
    }

    refreshProde(prode){
        if(prode != null){
            this.setState({
                user: this.user,
                prode
            });
            this.actualizarProdes();
        }
    }

    guardarDatos(data){
        this.prode = data;
        this.pronosticoController.saveOnLocalStorage(data);
    }

    //Actualiza el tablero en el div #tablero-pronosticos
    crearTablero(){
        $('#tablero-pronosticos').bracket({
            init: this.state.prode,
            save: (data) => this.guardarDatos(data),
            centerConnectors: true,
            disableToolbar: true,
            disableTeamEdit: true
        });
    }
}
