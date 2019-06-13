import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TournamentBracket from './TournamentBracket'
import Navbar from './Navbar'

import '../../css/custom.css';

class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Navbar/>
            <TournamentBracket />
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))