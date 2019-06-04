import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Bracket from './Bracket';
import MyPredictions from './MyPredictions';
 
class App extends Component {
    componentWillMount() {
        if(!localStorage.getItem('api-token')) {
            axios.get('api/token',  { headers: { 'Content-Type': 'application/json' } } )
            .then(function (response) {
                localStorage.setItem('api-token', response.data);
            
            }).catch(function (error){
                return Promise.reject(error);
            })
        }
    }
    render () {
    return (
        <BrowserRouter>
            <div>
                <MyPredictions/>
                <Bracket />               
            </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))