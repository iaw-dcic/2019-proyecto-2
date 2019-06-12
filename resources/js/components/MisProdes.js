
import React, { Component } from 'react';





class MisProdes extends Component {
    constructor(props){
        super(props);
        this.state={
            prodes : []
        }
    }
    componentDidMount() {
        window.axios = require('axios');

        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

        window.axios.defaults.headers.common['Authorization'] = api_token.content;


        axios({
            method: 'get',
            url: 'api/prode'
        }).then(respuesta => {
            let r = respuesta.data;
            console.log(r.data);
            this.setState({
                prodes : r.data
            });
        }).catch(error => {
            alert("Error")
        });


    }
    render() {
        return (

            <div className="App">
                <h1>{this.state.prodes[0].name}</h1>
            </div>


        );
    }
}

export default MisProdes;
