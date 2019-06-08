import React, { Component } from 'react';
import axios from 'axios';

export default class Talles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            talles: []
        }
    }

    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/talles').then(response => {
            this.setState({ talles: response.data })
            console.log(response.data);
        })
    }

    setTalle(e, talle) {
        this.props.cambiarTalle(talle);
    }

    render() {
        return (
            <div className="container">
                <h3 className="my-4">Elegir talle</h3>
                <div className="row">
                    {
                        this.state.talles.map((item) => (
                            <div key={item.size} className="col-md-3 col-sm-6 mb-4 btn-group mr-2 " role="group" aria-label="First group" >
                                <button type="button" className="btn btn-secondary" onClick={(e) => this.setTalle(e, item.size)}>
                                    {item.size}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>

        );
    }

}
