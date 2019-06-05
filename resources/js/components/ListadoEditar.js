import React, { Component } from 'react';

export default class ListadoEditar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            misDiseños: []
           
        }
    }

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');

        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;


        axios.get('/api/misDiseños').then(response => {
            this.setState({
                misDiseños: response.data
            })
        });
    }

    editarRemera(e,idRemera) {
        
        try {
            axios.get('/api/misDiseños/'+idRemera).then(response => {
                console.log(response.data);
                this.props.cambiarColorRemera(response.data.color);
                this.props.cambiarTalle(response.data.talle);
                this.props.cambiarTela(response.data.tela);
                this.props.addLogo(response.data.logo);

            });
        }
        catch (e) {
            console.log('Error Axios', e);
        }

    }


    render() {

        return (
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
                                                    <button type="button" onClick={(e) => this.editarRemera(e,item.id)} className="btn btn-outline-primary">Editar</button>

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
        )
    }

}