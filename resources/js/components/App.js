import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoApp from './TodoApp'

class App extends Component {

    render () {
        return (
            <BrowserRouter>
            
                <Switch>
                    <Route exact path="/" component={TodoApp}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))