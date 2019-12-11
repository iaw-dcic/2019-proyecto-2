import React, { Component } from 'react';
import axios from 'axios';
import Logos from './Logos';
import PanelDerecho from './PanelDerecho'
import Container from './Container';

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: "colorBlanco",
            talle: "XS",
            tela: "Algodon",
            logo: "",
            editar: false,
            idRemeraEditar: ""

        } 
    }
    
    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;


        if (this.props.match.params.id != null) {
            this.setState({
                idRemeraEditar: this.props.match.params.id,
                editar:true
            });
            this.editarRemera(this.props.match.params.id);
        }



        if (localStorage.hasOwnProperty('remera')) {
            var remeraAux = localStorage.getItem('remera');
            try {
                remeraAux = JSON.parse(remeraAux);
                this.setState({
                    remera: remeraAux,
                });
            }
            catch{
                this.setState({
                    remera: "colorBlanco"
                });
            }
        }
        if (localStorage.hasOwnProperty('talle')) {
            var talleAux = localStorage.getItem('talle');
            try {
                talleAux = JSON.parse(talleAux);
                this.setState({
                    talle: talleAux
                });
            }
            catch{
                this.setState({
                    talle: ""
                });
            }
        }

        if (localStorage.hasOwnProperty('logo')) {
            var logoAux = localStorage.getItem('logo');
            try {
                logoAux = JSON.parse(logoAux);
                this.setState({
                    logo: logoAux
                });
            }
            catch{
                this.setState({
                    logo: ""
                });
            }
        }
        if (localStorage.hasOwnProperty('tela')) {
            var telaAux = localStorage.getItem('tela');
            try {
                telaAux = JSON.parse(telaAux);
                this.setState({
                    tela: telaAux
                });
            }
            catch{
                this.setState({
                    tela: ""
                });
            }
        }
    }

    editarRemera(idRemera) {
        try {
            axios.get('/api/misDiseños/' + idRemera).then(response => {
                this.setState({
                    remera: response.data.color,
                    talle: response.data.talle,
                    tela: response.data.tela,
                    logo: response.data.logo,
                })
            });
        }
        catch (e) {
            console.log('Error Axios', e);
        }
    }

    eliminarLogo(e) {
        if (this.state.logo != "") {
            this.setState({ logo: "" });
            localStorage.setItem("logo", JSON.stringify(""));
        }
    }
    addLogo = (newLogo) =>{
        this.setState({
            logo:newLogo
        });
        localStorage.setItem("logo", JSON.stringify(newLogo));
    }

    cambiarTalle = (newTalle) =>{
        this.setState({
            talle:newTalle
        });
        localStorage.setItem("talle", JSON.stringify(newTalle));
    }

    cambiarTela = (newTela) =>{
        this.setState({
            tela:newTela
        });
        localStorage.setItem("tela", JSON.stringify(newTela));
    }

    cambiarColorRemera = (newColor) =>{
        this.setState({
            remera:newColor
        });
        localStorage.setItem("remera", JSON.stringify(newColor));
    }


    crearDiseño(e) {
        axios.post('/api/crearDiseño', {
            color: this.state.remera,
            logo: this.state.logo,
            talle: this.state.talle,
            tela: this.state.tela,

        }).then(response => {
            console.log(response.data)
        })
    }

    actualizarDiseño() {
        try {
            axios.put('/api/editarRemera/' + this.state.idRemeraEditar, {
                color: this.state.remera,
                logo: this.state.logo,
                talle: this.state.talle,
                tela: this.state.tela,
            }).then(response => {
                this.setState({
                    editar: false
                });

            });
        }
        catch (e) {
            console.log('Error Axios', e);
        }
    }

    render() {
        return (

            <section className="pricing py-5">
                <Container />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Logos addLogo={this.addLogo} />
                        </div>

                        <div className="col-lg-6">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Remera</h5>

                                    <hr width="100%"></hr>

                                    <div>
                                        <img height="500" src={"/images/remeras/" + this.state.remera + ".png"} id="imagenRemera" className="d-block w-100" alt="..."></img>
                                        {
                                            this.state.logo != "" &&
                                            <img height="100" src={"/images/logos/" + this.state.logo + ".png"} id="imagenLogo"></img>
                                        }
                                        {this.state.editar == false &&
                                            <a className="btn btn-block btn-secondary text-uppercase" onClick={(e) => this.crearDiseño(e)} >Crear diseño</a>}
                                        {
                                            this.state.editar == true &&
                                            <a className="btn btn-block btn-secondary text-uppercase" onClick={(e) => this.actualizarDiseño(e)}  >Guardar Cambios</a>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <PanelDerecho talleActual={this.state.talle} telaActual={this.state.tela} cambiarTalle={this.cambiarTalle} cambiarTela={this.cambiarTela} cambiarColorRemera={this.cambiarColorRemera} />
                        </div>
                    </div>
                </div>

                <hr width="100%"></hr>
            </section>

        );
    }
}
