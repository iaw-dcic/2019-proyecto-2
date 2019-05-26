import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'

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
//Esta aplicación va en el documento el que tiene el id' react-app'
ReactDOM.render(<App />, document.getElementById('react-app'))