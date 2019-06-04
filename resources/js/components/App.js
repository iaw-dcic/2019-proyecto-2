import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'

class App extends Component {
    
    componentDidMount(){
        localStorage.clear();
    }
    render () {
        return (
            <BrowserRouter>
            <div>
                <Main />
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))