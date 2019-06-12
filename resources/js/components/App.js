import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Page from './Page'
import './page.css'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
          <Header />
          <Page />
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
