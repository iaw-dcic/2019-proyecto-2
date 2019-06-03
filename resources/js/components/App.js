import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
    render () {
        return (
            <div>
                <Router>
                <div>
                    <Header />
                    <Footer />
                </div>
                </Router>
            </div>
        );
    }
}

if(document.getElementById('react-app')){
    ReactDOM.render(<App />, document.getElementById('react-app'));
}