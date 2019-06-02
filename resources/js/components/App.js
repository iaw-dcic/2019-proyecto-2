import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShirtImage from './ShirtImage';


class App extends Component {

    componentDidMount() {
        localStorage.clear();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route path="/home" component={ShirtImage} />

                </Switch>
            </BrowserRouter>
        )
    }
}
//Esta aplicación va en el documento el que tiene el id' react-app'
ReactDOM.render(<App />, document.getElementById('react-app'))