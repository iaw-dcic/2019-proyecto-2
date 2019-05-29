import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from './Container'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Container />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))