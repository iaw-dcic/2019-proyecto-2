import React, { Component } from 'react';
import axios from 'axios';
import Logos from './Logos';

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: "colorBlanco",
            talle: "XS",
            tela: "Algodon",
            logo: "",
            telas: [],
            talles: [],
            colores: [],
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
        axios.get('/api/telas').then(response => {
            this.setState({ telas: response.data })
        })
        axios.get('/api/talles').then(response => {
            this.setState({ talles: response.data })
        })
        axios.get('/api/colores').then(response => {
            this.setState({ colores: response.data })
        })


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

    cambiarColorRemera(e, id) {
        var remeraAux = id;
        this.setState({ remera: id });
        localStorage.setItem("remera", JSON.stringify(remeraAux));
    }

    


    cambiarTalle(e) {
        var talleAux = e.target.value;
        this.setState({ talle: e.target.value });
        localStorage.setItem("talle", JSON.stringify(talleAux));

    }

    cambiarTela(e) {
        var telaAux = e.target.value;
        this.setState({ tela: e.target.value });
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
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Colores disponibles</h5>
                                    <hr width="100%"></hr>
                                    <h2 id="tittle">Seleccione un color </h2>
                                    <hr></hr>
                                    <div className="btn-toolbar mb-2" role="toolbar">
                                        <div id="listColours" className="btn-color" role="toolbar">
                                            <div className="btn-group" >
                                                {
                                                    this.state.colores.map((item) => (
                                                        <button key={item.color} id={item.color} value={item.color} onClick={(e) => this.cambiarColorRemera(e, item.color)} className="btn-item-color">  </button>

                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <hr width="100%"></hr>
                                        <h2 id="tittle">Talle {this.state.talle} </h2>
                                        <h5 className="card-title text-muted text-uppercase text-center">Listado de talles</h5>
                                        <select className="form-control" value={this.state.talle} onChange={(e) => this.cambiarTalle(e)}>
                                            {
                                                this.state.talles.map((item) => (
                                                    <option key={item.tipo} value={item.tipo}>{item.tipo}</option>
                                                ))

                                            }
                                        </select>

                                        <hr width="100%"></hr>

                                        <h2 id="tittle">Tela {this.state.tela} </h2>
                                        <h5 className="card-title text-muted text-uppercase text-center">Listado de Telas</h5>
                                        <select className="form-control" value={this.state.tela} onChange={(e) => this.cambiarTela(e)}>
                                            {
                                                this.state.telas.map((item) => (
                                                    <option key={item.nombre} value={item.nombre}>{item.nombre}</option>
                                                ))

                                            }
                                        </select>
                                        <hr width="100%"></hr>


                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
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
