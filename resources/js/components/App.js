import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Ppal from './Ppal'


class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pr2/home" component={Ppal} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))