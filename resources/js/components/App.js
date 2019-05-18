import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import AvatarView from './AvatarView'

//LA PARTE DE REACT SE HACE AQUÍ!
class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/avatarView" component={AvatarView} />
            </Switch>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))