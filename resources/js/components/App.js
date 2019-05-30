import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContainer from './AppContainer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Switch>
                        <Route exact path="/" component={AppContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))