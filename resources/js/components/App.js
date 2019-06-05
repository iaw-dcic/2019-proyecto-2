import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FixtureApp from './FixtureApp';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={FixtureApp}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))