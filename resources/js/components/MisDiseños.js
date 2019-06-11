import React, { Component } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

export default class MisDiseños extends Component {

    constructor() {
        super()
        this.state = {
            misDiseños: [],
            telas: [],
            talles: []
        }
    }
    componentDidMount() {
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
    }

    borrarRemera(e, idRemera) {
        try {
            axios.delete('/api/borrarRemera/' + idRemera)
                .then(response => {
                    console.log(response);
                    this.recargar();
                });
        }
        catch (e) {
            console.log('Error Axios', e);
        }
    }

    recargar() {
        axios.get('/api/misDiseños').then(response => {
            this.setState({
                misDiseños: response.data
            })
        });
    }

    
    
    render() {
        return (
            <section className="pricing py-5">
                <Container/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Listado de remeras</h5>

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
                                                            <button type="button" onClick={(e) => this.borrarRemera(e, item.id)} className="btn btn-outline-danger">Borrar</button>
                                                            <br></br>
                                                            <Link to={"/home/"+ item.id} className="btn btn-outline-primary">Editar</Link>

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

