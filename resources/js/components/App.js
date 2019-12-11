import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MisDiseños from './MisDiseños'
import ShirtImage from './ShirtImage';


class App extends Component {

    componentDidMount() {
        localStorage.clear();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                      <Route exact path="/home" component={ShirtImage}></Route>
                      <Route path="/misDiseños" component={MisDiseños}></Route>
                      <Route path="/home/:id" component={ShirtImage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('react-app'))