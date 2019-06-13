import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TournamentBracket from './TournamentBracket';


class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={TournamentBracket}/>
            </Switch>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));