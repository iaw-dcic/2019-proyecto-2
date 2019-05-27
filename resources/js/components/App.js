import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShirtImage from './ShirtImage';
import Colors from './Colors';


class App extends Component {
    render () {
        return (
            <BrowserRouter>
            <div>
                <ShirtImage />
            </div>
            </BrowserRouter>
        )
    }
}
//Esta aplicación va en el documento el que tiene el id' react-app'
ReactDOM.render(<App />, document.getElementById('react-app'))