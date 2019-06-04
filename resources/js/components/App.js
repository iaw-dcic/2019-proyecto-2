import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Bracket from './Bracket';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Bracket />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))