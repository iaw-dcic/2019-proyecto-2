import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Prode from './Prode'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Prode />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))