import React, { Component } from 'react';
import axios from 'axios';

export default class Stampas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stampas: []
        }
    }

    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/stampas').then(response => {
            this.setState({ stampas: response.data })
            console.log(response.data);
        })
    }

    setStampa(e, stampa) {
        this.props.cambiarStampa(stampa);
    }

    render() {
        return (
            <div className="container">
                <h3 className="my-4">Elegir estampa</h3>
                <div className="row">

                    {
                        this.state.stampas.map((item) => (
                            <div key={item.url} className="col-md-3 col-sm-6 mb-4" >
                                <a onClick={(e) => this.setStampa(e, item.url)}>
                                    <img
                                        className="img-fluid"
                                        src={"/" + item.url}
                                        width="50" height="70"
                                    ></img>
                                </a>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}