import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch,} from 'react-router-dom'

import Dashboard from './Dashboard' 
import Mylab from './Mylab' 
import Pagenotfound from './Pagenotfound' 


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Dashboard} exact/>
                    <Route path="/mylab" component={Mylab} exact/>
                    <Route component={Pagenotfound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))