import React, { Component } from 'react';
import axios from 'axios';

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: "/images/remeras/remerablanca.png",
            talle: "",
            tela: "Algodon",
            logo: null,
            telas: [],
            talles: [],
            colores: [],
            logos: []
        }
    }

    componentDidMount() {

        axios.get('/api/telas').then(response => {
            this.setState({ telas: response.data })
        })
        axios.get('/api/talles').then(response => {
            this.setState({ talles: response.data })
        })
        axios.get('/api/colores').then(response => {
            this.setState({ colores: response.data })
        })
        axios.get('/api/logos').then(response => {
            this.setState({ logos: response.data })
        })

        if (localStorage.hasOwnProperty('remera')) {
            let remeraAux = localStorage.getItem('remera');
            let talleAux = localStorage.getItem('talle');
            let logoAux = localStorage.getItem('logo');
            let telaAux = localStorage.getItem('tela');

            try {
                remeraAux = JSON.parse(remeraAux);
                talleAux = JSON.parse(talleAux);
                logoAux = JSON.parse(logoAux);
                telaAux = JSON.parse(telaAux);

                this.setState({
                    remera: remeraAux,
                    talle: talleAux,
                    logo: logoAux,
                    tela: telaAux
                });
            }
            catch (e) {
                this.setState({
                    remera: "./images/remeras/remeraBlanca.png",
                    talle: "XS",
                    logo: null,
                    tela: "Algodon"
                });
            }
        }
    }

    cambiarColorRemera(e, id) {
        var remeraAux;
        switch (id) {
            case "colorAzul": {
                this.setState({ remera: '/images/remeras/remeraazul.png' });
                remeraAux = '/images/remeras/remeraazul.png';
                break;
            }
            case "colorBlanco": {
                this.setState({ remera: '/images/remeras/remerablanca.png' });
                remeraAux = '/images/remeras/remerablanca.png';
                break;
            }
            case "colorRosa": {
                this.setState({ remera: '/images/remeras/remeraRosa.png' });
                remeraAux = '/images/remeras/remeraRosa.png';
                break;
            }
            case "colorAmarillo": {
                this.setState({ remera: '/images/remeras/remeraAmarilla.png' });
                remeraAux = '/images/remeras/remeraAmarilla.png';
                break;
            }
            case "colorNegro": {
                this.setState({ remera: '/images/remeras/remeranegra.png' });
                remeraAux = '/images/remeras/remeranegra.png';
                break;
            }
            case "colorNaranja": {
                this.setState({ remera: '/images/remeras/remeranaranja.png' });
                remeraAux = '/images/remeras/remeranaranja.png';
                break;
            }
            case "colorVioleta": {
                this.setState({ remera: '/images/remeras/remeravioleta.png' });
                remeraAux = '/images/remeras/remeravioleta.png';
                break;
            }
            case "colorCeleste": {
                this.setState({ remera: '/images/remeras/remeraceleste.png' });
                remeraAux = '/images/remeras/remeraceleste.png';
                break;
            }
            default: {
                this.setState({ remera: '/images/remeras/remerablanca.png' });
                remeraAux = '/images/remeras/remerablanca.png';

            }
        }
        localStorage.setItem("remera", JSON.stringify(remeraAux));
    }

    cambiarLogo(e, src) {
        this.setState({ logo: src });
        localStorage.setItem("logo", JSON.stringify(src));
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
        if (this.state.logo != null)
        {
            this.setState({ logo: null });
            localStorage.setItem("logo", JSON.stringify(null));
        }
    }

    render() {
        return (
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card mb-5 mb-lg-0">

                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Logos centrales</h5>

                                    <hr></hr>
                                    <h2 id="tittle"> Seleccione el logo </h2>
                                    <hr></hr>
                                    <div className="container-imagenesLogos">
                                        <a className="thumbnail">
                                            {
                                                this.state.logos.map((item) => (
                                                    <img key={item.logo} className="img-thumbnail" src={item.logo} onClick={(e) => this.cambiarLogo(e, item.logo)} ></img>
                                                ))
                                            }
                                        </a>
                                    </div>
                                </div>

                                <button type="button" onClick={(e) => this.eliminarLogo(e)} className="btn btn-secondary">Eliminar logo</button>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Remera</h5>
                                    <hr width="100%"></hr>
                                    <div>
                                        <img height="500" src={this.state.remera} id="imagenRemera" className="d-block w-100" alt="..."></img>
                                        {
                                            this.state.logo != null &&
                                            <img height="100" src={this.state.logo} id="imagenLogo"></img>
                                        }

                                        <a className="btn btn-block btn-secondary text-uppercase">Crear diseño</a>
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

                                        <h2 id="tittle"> Mis Diseños </h2>
                                        <h5 className="card-title text-muted text-uppercase text-center">Listado de remeras</h5>
                                        <a className="btn btn-block btn-secondary text-uppercase">Ver</a>

                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
