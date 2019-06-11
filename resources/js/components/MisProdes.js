
import React, { Component } from 'react';



class MisProdes extends Component {
    componentDidMount(){
        let api_token = document.querySelector('meta[name="api-token"]');
        console.log(api_token);

    }
    render () {
    return (

        <div className="App">
            <h1>{document.querySelector('meta[name="api-token"]').content}</h1>
        </div>


    );
    }
}

export default MisProdes;
