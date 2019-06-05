import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))