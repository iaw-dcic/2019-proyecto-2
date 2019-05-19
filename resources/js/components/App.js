import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cuartos from './Cuartos'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Cuartos />
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))