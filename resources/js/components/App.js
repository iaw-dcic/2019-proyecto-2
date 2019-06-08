import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../../public/css/layout.css'
import Head from './Head'
import Body from './Body'
import MainSection from './MainSection';

class App extends Component {
    render () {
    return (
        
        <BrowserRouter>
        <Route exact path="/home" component={MainSection} />
            <Head />

        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))