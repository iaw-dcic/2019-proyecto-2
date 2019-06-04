import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch,} from 'react-router-dom'

import Dashboard from './Dashboard' 
import Profile from './Profile' 
import Lab from './Lab' 
import Pagenotfound from './Pagenotfound' 


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Dashboard} exact/>
                    <Route path="/profile" component={Profile} exact/>
                    <Route path="/mylab" component={Lab} exact/>
                    <Route path="/mylab/:id" component={Lab} exact/>
                    <Route component={Pagenotfound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))