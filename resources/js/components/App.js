import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ComponentApp from './ComponentApp'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <ComponentApp />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))