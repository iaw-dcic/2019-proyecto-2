import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Torneo from './Torneo'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Torneo/>
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))