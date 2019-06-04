import React, { Component } from 'react';
import axios from 'axios';
import Logos from './Logos';
import PanelDerecho from './PanelDerecho'

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: "colorBlanco",
            talle: "XS",
            tela: "Algodon",
            logo: "",
            misDiseños: [],
            edit: false,
            idRemeraEditar: ""

        }
    }

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/misDiseños').then(response => {
            this.setState({
                misDiseños: response.data
            })
        });
       

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


    addLogo = (src) => {
        this.setState({ logo: src });
        localStorage.setItem("logo", JSON.stringify(src));
    }

    cambiarColorRemera = (newId) =>{
        this.setState({ remera: newId });
        localStorage.setItem("remera", JSON.stringify(remeraAux));
    }

   
    cambiarTalle = (newTalle) =>{
       
        this.setState({ talle: newTalle });
        localStorage.setItem("talle", JSON.stringify(talleAux));
    }
    

    cambiarTela = (newTela) => {
        this.setState({ tela: newTela });
        localStorage.setItem("tela", JSON.stringify(telaAux));
    }

    eliminarLogo(e) {
        if (this.state.logo != "") {
            this.setState({ logo: "" });
            localStorage.setItem("logo", JSON.stringify(""));
        }
    }

    editarRemera(e, idRemera) {
        this.setState({
            edit: true,
            idRemeraEditar: idRemera

        });
        try {
            axios.get('/api/misDiseños/' + idRemera).then(response => {
                this.setState({
                    remera: response.data.color,
                    tela: response.data.tela,
                    talle: response.data.talle,
                    logo: response.data.logo,
                })

            });
        }
        catch (e) {
            console.log('Error Axios', e);
        }


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
                    edit: false
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
                                        {this.state.edit == false &&
                                            <a className="btn btn-block btn-secondary text-uppercase" onClick={(e) => this.crearDiseño(e)} >Crear diseño</a>}
                                        {
                                            this.state.edit == true &&
                                            <a className="btn btn-block btn-secondary text-uppercase" onClick={(e) => this.actualizarDiseño(e)}  >Guardar Cambios</a>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <PanelDerecho cambiarTalle={this.cambiarTalle} cambiarTela={this.cambiarTela} cambiarColorRemera={this.cambiarColorRemera}/>
                        </div>
                    </div>
                </div>
                <hr width="100%"></hr>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Listado de remeras creadas</h5>
                                    <h2 id="tittle">Seleccione la remera que desea editar </h2>
                                    <hr width="100%"></hr>

                                    <div className="container-MisDiseñosRemeras">
                                        {
                                            this.state.misDiseños.map((item, id) => (

                                                < div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4" >
                                                    <div className="card h-100">
                                                        <img className="card-img-top" src={"/images/remeras/" + item.color + ".png"}></img>
                                                        {item.logo != null &&
                                                            <img height="100" src={"/images/logos/" + item.logo + ".png"} id="imagenLogo2"></img>
                                                        }
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                <a href="#">Diseño: {id + 1}</a>
                                                            </h4>
                                                            <p className="card-text">Talle :{item.talle}</p>
                                                            <p className="card-text">Tela :{item.tela}</p>
                                                            <button type="button" onClick={(e) => this.editarRemera(e, item.id)} className="btn btn-outline-primary">Editar</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
