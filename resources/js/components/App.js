import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Footer />
        </div>
        </BrowserRouter>
    )
    }
}

if(document.getElementById('react-app')){
    ReactDOM.render(<App />, document.getElementById('react-app'));
}