import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'

//LA PARTE DE REACT SE HACE AQUÍ!
class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Example />
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))