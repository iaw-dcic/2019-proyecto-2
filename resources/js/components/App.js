import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Fixture from './Fixture.js'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Fixture />
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))



