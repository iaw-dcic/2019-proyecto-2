import React, { Component } from 'react';
import axios from 'axios';

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: '/images/remeras/remerablanca.png',
            talle: "XS",
            tela: "Algodon",
            estampa: "/images/logos/logo12.png",
            telas: [],
            talles: [],
            colores: []
        }
    }

    cambiarColorRemera(e, id) {

        switch (id) {
            case "colorAzul": this.setState({ remera: '/images/remeras/remeraazul.png' });
                break;
            case "colorBlanco": this.setState({ remera: '/images/remeras/remerablanca.png' });
                break;
            case "colorRosa": this.setState({ remera: '/images/remeras/remeraRosa.png' });
                break;
            case "colorAmarillo": this.setState({ remera: '/images/remeras/remeraAmarilla.png' });
                break;
            case "colorNegro": this.setState({ remera: '/images/remeras/remeranegra.png' });
                break;
            case "colorNaranja": this.setState({ remera: '/images/remeras/remeranaranja.png' });
                break;
            case "colorVioleta": this.setState({ remera: '/images/remeras/remeravioleta.png' });
                break;
            case "colorCeleste": this.setState({ remera: '/images/remeras/remeraceleste.png' });
                break;
            default: this.setState({ remera: '/images/remeras/remerablanca.png' });
        }
    }

    cambiarTalle(e) {
        this.setState({ talle: e.target.value });
    }

    cambiarTela(e) {
        this.setState({ tela: e.target.value });
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
    }

    render() {
        return (
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Logos</h5>
                                    <hr></hr>
                                    <div className="logos">
                                        <div className="imagen-logos">
                                            <a href="#" className="thumbnail">
                                                <img className="img-thumbnail" src="/images/logos/logo1.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo2.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo3.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo4.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img className="img-thumbnail" src="/images/logos/logo5.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo6.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo7.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo8.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img className="img-thumbnail" src="/images/logos/logo9.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo10.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo11.png" height="80px" width="80px"></img>
                                                <img className="img-thumbnail" src="/images/logos/logo12.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Remera</h5>
                                    <hr width="100%"></hr>
                                    <div>
                                        <img height="500" src={this.state.remera} id="imagenRemera" className="d-block w-100" alt="..."></img>
                                        <img height="100" src={this.state.estampa} id="imagenLogo" ></img>
                                        <a className="btn btn-block btn-secondary text-uppercase">Crear diseño</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Seleccione un color</h5>
                                    <hr width="100%"></hr>
                                    
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
                                    <select className="form-control" onChange={(e) => this.cambiarTalle(e)}>
                                    {
                                        this.state.talles.map((item) => (
                                            <option key={item.tipo} value={item.tipo}>{item.tipo}</option>
                                        ))

                                    }
                                    </select>

                                    <hr width="100%"></hr>

                                    <h2 id="tittle">Tela {this.state.tela} </h2>
                                    <h5 className="card-title text-muted text-uppercase text-center">Listado de Telas</h5>
                                    <select className="form-control" onChange={(e) => this.cambiarTela(e)}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
