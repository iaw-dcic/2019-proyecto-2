import React, { Component } from 'react'
import {Button , Container ,Row , Col} from 'react-bootstrap';

import { iconGuardar , iconNuevo, iconBorrar } from './utils/IconUtils'
import './utils/fonts.css';

import NuevoProde from "./components/prode/NuevoProde";
import Libertadores from "./components/prode/Libertadores";
import MisProdes from './components/prode/MisProdes';

import {createProde , getPartidos , getProdes , saveProde , deleteProde } from "./api/ApiUtils";

import localStorage from 'local-storage'

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            isAuthenticated : false ,
            showingAlert: false,
            nombre : "",
            id_prode : null ,
            prodes : [],
            llaves : []
        };

        this.showAlert=this.showAlert.bind(this);

        this.chooseProde=this.chooseProde.bind(this);
        this.saveProde=this.saveProde.bind(this);
        this.deleteProde=this.deleteProde.bind(this);

        this.getProdes=this.getProdes.bind(this);

        this.setGanador=this.setGanador.bind(this);
        this.newProde=this.newProde.bind(this);
        this.updateLLave=this.updateLLave.bind(this);
    }

    componentDidMount() {

        let token = localStorage.get('userToken');

        if(token !== null ){

            this.setState({ token : token });

            this.getProdes(token);

            let id_prodeCache = localStorage.get('id_prode');
            this.setState({ id_prode : id_prodeCache});

            let nombreCache = localStorage.get('nombre');
            this.setState({ nombre : nombreCache});

            let llavesCache = localStorage.get('llaves') || this.state.llaves;

            if(llavesCache.length !== 0){
                this.setState({ llaves : llavesCache });
                this.setState({ isLoading : false });
            }

            this.setState({ isAuthenticated : true });

        }

    }

    showAlert() {
        this.setState({
            showingAlert: true
        });

        setTimeout(() => {
            this.setState({
                showingAlert: false
            });
        }, 2000);
    }

    async chooseProde(id_prode,nombre){

        let llaves = await getPartidos(id_prode,this.state.token);
        this.setState({llaves : llaves});

        this.setState({id_prode : id_prode});
        this.setState({nombre : nombre});

        localStorage.set('id_prode',id_prode);
        localStorage.set('nombre',nombre);
        localStorage.set('llaves',llaves);

    }

    // Obtiene el panel de prodes del usuario activo.
    async getProdes(token){

        let prodes = await getProdes(token);
        this.setState({ prodes : prodes })

    }

    async newProde(nombre){

        let token = this.state.token;

        let id_prode = await createProde(nombre,token);
        this.setState( {id_prode : id_prode });

        this.setState( {nombre : nombre });

        let llaves = await getPartidos(await id_prode,this.state.token);
        this.setState( {llaves : llaves });

        await this.getProdes(token);

    }

    async deleteProde(){

        let id_prode = this.state.id_prode;
        let token = this.state.token;

        await deleteProde(id_prode,token);

        await this.getProdes(token);

        this.setState({llaves : []});
        this.setState({ id_prode : null });
        this.setState({ nombre : "" });

        localStorage.set('llaves', []);
        localStorage.set('id_prode', null);
        localStorage.set('nombre', "");

        this.showAlert();

    }

    async saveProde() {

        let llaves = this.state.llaves;
        let id_prode = this.state.id_prode;
        let token = this.state.token;

        await saveProde(id_prode,llaves,token);

        this.showAlert();
    }

    setGanador(nro_partido, nro_proximoPartido, equipoGanador) {

        let llaves = this.state.llaves.slice(); // Se clona el arreglo.

        if(nro_proximoPartido !== 0){

            if(llaves[nro_proximoPartido].nro_partidoEquipo1 === nro_partido)
                llaves[nro_proximoPartido].equipo1 = equipoGanador;
            else
                llaves[nro_proximoPartido].equipo2 = equipoGanador;

            this.setState({llaves: llaves});

            this.updateLLave(nro_proximoPartido,equipoGanador);

        }
        else
            console.log(equipoGanador + " Campeón !");

    }

    // Cuando se selecciona un ganador intermedio se deben actualizar los valores siguientes
    // Esto ocurre cuando se cambia el ganador de una ronda habiendo ya pasado a la siguiente.
    updateLLave(nro_partido , equipoGanador){

        let llaves = this.state.llaves.slice();
        let nro_proximoPartido = llaves[nro_partido].nro_proximoPartido;

        if(nro_proximoPartido !== 0){ // Si no estamos en la final.

            if(llaves[nro_proximoPartido].nro_partidoEquipo1 === nro_partido){
                if(llaves[nro_proximoPartido].equipo1 !== "")
                    llaves[nro_proximoPartido].equipo1 = equipoGanador;
            }
            else{
                if(llaves[nro_proximoPartido].equipo2 !== "")
                    llaves[nro_proximoPartido].equipo2 = equipoGanador;
            }

            this.setState({llaves: llaves});

        }

        localStorage.set('llaves', llaves);

    }

    render () {

        let modalClose = () => this.setState({ modalShow: false });
        let modalOpen = () => this.setState({ modalShow: true });

        return (

            <div style={sectionStyle}>

                {
                    this.state.showingAlert ?
                        <div className={`alert alert-success text-center ${this.state.showingAlert ? 'alert-hidden' : 'alert-hidden'}`}>
                            <strong>Éxito</strong> -  Operación realizada correctamente!
                        </div>
                        :
                        <>
                        </>
                }

                <Container className="container pt-5 text-center">
                    <h1>Copa Libertadores</h1><hr/>
                </Container>

                <Container fluid>

                    <NuevoProde
                        show={this.state.modalShow}
                        crear={this.newProde}
                        onHide={modalClose}
                    />

                    <Container>
                        <Row>
                            <Col md={6}/>
                            <Col md={6} style={nombreStyle} className="text-right">
                                <Button onClick={this.saveProde} className="m-1">{iconGuardar} Guardar Estado </Button>
                                <Button onClick={modalOpen} className="m-1">{ iconNuevo } Nuevo Prode</Button>
                                <Button onClick={this.deleteProde} >{iconBorrar} Borrar Prode </Button>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <Col className="mr-2 text-center">

                            <MisProdes
                                prodes={this.state.prodes}
                                seleccionar={this.chooseProde}
                            />

                        </Col>
                        <Col md={10}>

                            <Libertadores
                                nombre ={this.state.nombre}
                                ganador={this.setGanador}
                                llaves={this.state.llaves}
                            />

                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

const sectionStyle = {
    backgroundColor : 'ffff'
};

const nombreStyle = {
    justifyContent : 'center',
    alignContent: 'center',
    justifyItems : 'center',
    alignItems : 'center'
};

