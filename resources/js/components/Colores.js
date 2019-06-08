import React, { Component } from 'react';
import axios from 'axios';

export default class Colores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colores: []
        }
    }

    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
        
        axios.get('/api/colores').then(response => {
            this.setState({ colores: response.data })
            console.log(response.data);
        })
    }

    setColor(e,color){
        this.props.cambiarColor(color);
    }

    render(){
        return (
            <div className="container">
                <h3 className="my-4">Elegir color</h3>
                <div className="row">

                    {
                        this.state.colores.map((item) => (
                            <div key={item.colour} className="col-md-3 col-sm-6 mb-4" >
                                <a onClick={(e) => this.setColor(e,item.colour)}>
                                    <img
                                        className="img-fluid"
                                        src={"/" + item.colour}
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




