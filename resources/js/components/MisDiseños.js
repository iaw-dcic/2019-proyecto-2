import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class MisDiseños extends Component {

    constructor() {
        super()
        this.state = {
            misDiseños: []

        }
    }
    componentDidMount() {
        axios.get('/api/misDiseños/{1}').then(response => {
            this.setState({
                misDiseños: response.data
            })
        });
    }
    render() {
        return (
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Listado de remeras</h5>

                                    <hr width="100%"></hr>

                                    <div className="container-MisDiseñosRemeras">
                                        {
                                            this.state.misDiseños.map((item) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                                    <div className="card h-100">
                                                        <img className="card-img-top" src={"/images/remeras/" + item.color + ".png"}></img>
                                                        {item.logo != "" &&
                                                            <img height="100" src={"/images/logos/" + item.logo + ".png"} id="imagenLogo2"></img>
                                                        }
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                <a href="#">Diseño: {item.id}</a>
                                                            </h4>
                                                            <p className="card-text">Talle: {item.talle} </p>
                                                            <p className="card-text">Tela: {item.tela}</p>
                                                            <button type="button" className="btn btn-outline-success">Editar</button>
                                                            <button type="button" className="btn btn-outline-danger">Borrar</button>
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

