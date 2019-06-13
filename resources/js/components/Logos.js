import React, { Component } from 'react';
import axios from 'axios';

export default class Logos extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            logos: []
        }
    }

    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');

        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/logos').then(response => {
            this.setState({ logos: response.data })
        })
    }

    eliminarLogo(e){
        this.props.addLogo("")
    }

    cambiarLogo(id){
        this.props.addLogo(id)
    }
    
    render() {
        return (
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
                                <img key={item.logo} className="img-thumbnail" src={"/images/logos/" + item.logo + ".png"} onClick={(e) => this.cambiarLogo(item.logo)} ></img>
                            ))
                        }
                    </a>
                </div>
            </div>
            <button type="button" onClick={(e) => this.eliminarLogo(e)} className="btn btn-secondary">Eliminar logo</button>
        </div>

        )

    }
}