import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../../public/css/layout.css'
import Head from './Head'
import Body from './Body'
import Nav from './Nav'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <Head />
            <Nav />
            <Body />
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))