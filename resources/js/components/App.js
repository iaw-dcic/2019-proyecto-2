import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from './Container'


class App extends Component {

    componentDidMount() {
        localStorage.clear();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                      <Container />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))