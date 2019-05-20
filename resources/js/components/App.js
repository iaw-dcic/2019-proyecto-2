import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom'

import Bar from './Bar' 
import Dashboard from './Dashboard' 

class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Bar} />
                </Switch>
                <Dashboard/>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))