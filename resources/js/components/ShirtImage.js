import React, { Component } from 'react';

export default class ShirtImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remera: '/images/remeras/remerablanca.png'
        }
    }

    cambiarColorRemera(e, id) {
        switch (id) {
            case "remera-colorAzul":    this.setState({ remera: '/images/remeras/remeraazul.png' }); 
                                        break;
            case "remera-colorBlanco":  this.setState({ remera: '/images/remeras/remerablanca.png' });  
                                        break;
            case "remera-colorRosa":    this.setState({ remera: '/images/remeras/remeraRosa.png' });  
                                        break;
            case "remera-colorAmarillo": this.setState({ remera: '/images/remeras/remeraAmarilla.png' });  
                                         break;
            case "remera-colorNegro":   this.setState({ remera: '/images/remeras/remeranegra.png' });  
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

    render() {
        return (
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                    <hr></hr>
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <a className="btn btn-block btn-primary text-uppercase">Button</a>
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

                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Seleccione un color</h5>
                                    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
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
                                        <hr></hr>
                                        <ul className="fa-ul">
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
                                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                                        </ul>
                                        <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
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
