import React, { Component } from 'react';

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: '/images/remeras/remerablanca.png',
            talle: 'XS',
            tela:'Algodón'
        }
    }

    cambiarColorRemera(e, id) {
        switch (id) {
            case "remera-colorAzul": this.setState({ remera: '/images/remeras/remeraazul.png' });
                break;
            case "remera-colorBlanco": this.setState({ remera: '/images/remeras/remerablanca.png' });
                break;
            case "remera-colorRosa": this.setState({ remera: '/images/remeras/remeraRosa.png' });
                break;
            case "remera-colorAmarillo": this.setState({ remera: '/images/remeras/remeraAmarilla.png' });
                break;
            case "remera-colorNegro": this.setState({ remera: '/images/remeras/remeranegra.png' });
                break;
            case "remera-colorNaranja": this.setState({ remera: '/images/remeras/remeranaranja.png' });
                break;
            case "remera-colorVioleta": this.setState({ remera: '/images/remeras/remeravioleta.png' });
                break;
            case "remera-colorCeleste": this.setState({ remera: '/images/remeras/remeraceleste.png' });
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
    render() {
        return (
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Logos</h5>
                                    <hr></hr>
                                    <div class="logos">
                                        <div class="">
                                            <a href="#" class="thumbnail">
                                                <img src="/images/logos/logo1.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img src="/images/logos/logo2.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img src="/images/logos/logo3.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img src="/images/logos/logo4.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img src="/images/logos/logo5.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img src="/images/logos/logo6.png" height="80px" width="80px"></img>
                                                <hr width="100%"></hr>
                                                <img src="/images/logos/logo7.png" height="80px" width="80px"></img>
                                                
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
                                    <img className="img-fluid" height="500" src={this.state.remera} id="imagenRemera" className="d-block w-100" alt="..."></img>
                                    <a className="btn btn-block btn-secondary text-uppercase">Guardar</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Seleccione un color</h5>
                                    <div className="btn-toolbar mb-2" role="toolbar" aria-label="Toolbar with button groups">
                                        <div id="listColours" className="btn-color" role="toolbar">
                                            <div className="btn-group">
                                                <button id="remera-colorBlanco" onClick={(e) => this.cambiarColorRemera(e, "remera-colorBlanco")} type="button" className="btn-item-color">  </button>
                                                <button id="remera-colorAzul" onClick={(e) => this.cambiarColorRemera(e, "remera-colorAzul")} type="button" className="btn-item-color"  >  </button>
                                                <button id="remera-colorRosa" onClick={(e) => this.cambiarColorRemera(e, "remera-colorRosa")} type="button" className="btn-item-color"></button>
                                                <button id="remera-colorAmarillo" onClick={(e) => this.cambiarColorRemera(e, "remera-colorAmarillo")} type="button" className="btn-item-color"></button>
                                            </div>

                                            <div className="btn-group">
                                                <button id="remera-colorNegro" onClick={(e) => this.cambiarColorRemera(e, "remera-colorNegro")} type="button" className="btn-item-color"></button>
                                                <button id="remera-colorNaranja" onClick={(e) => this.cambiarColorRemera(e, "remera-colorNaranja")} type="button" className="btn-item-color"></button>
                                                <button id="remera-colorVioleta" onClick={(e) => this.cambiarColorRemera(e, "remera-colorVioleta")} type="button" className="btn-item-color"></button>
                                                <button id="remera-colorCeleste" onClick={(e) => this.cambiarColorRemera(e, "remera-colorCeleste")} type="button" className="btn-item-color"></button>
                                            </div>

                                        </div>
                                        <hr width="100%"></hr>


                                        <h2 id="tittle">Talle {this.state.talle} </h2>
                                        <h5 className="card-title text-muted text-uppercase text-center">Listado de talles</h5>
                                        <select className="form-control" onChange={(e) => this.cambiarTalle(e)}>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                        <hr width="100%"></hr>
                                        
                                        <h2 id="tittle">Tela {this.state.tela} </h2>
                                        <h5 className="card-title text-muted text-uppercase text-center">Listado de Telas</h5>
                                        <select className="form-control" onChange={(e) => this.cambiarTela(e)}>
                                            <option value="Algodón">Algodón</option>
                                            <option value="Acetato">Acetato</option>
                                            <option value="Lycra">Lycra</option>
                                            <option value="Modal">Modal</option>
                            
                                        </select>



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
