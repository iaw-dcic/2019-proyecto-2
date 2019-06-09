import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Pronostico from './Pronostico/Pronostico'
import Playoff from './Playoff/Playoff'
import Readme from './Readme'

class App extends Component {
    
    componentDidMount(){
        localStorage.clear();
    }
    render () {
        return (
            <BrowserRouter>
                <Switch>
                      <Route exact path="/" component={Main}></Route>
                      <Route path="/home" component={Main}></Route>
                      <Route path="/myPlayoffs" component={Playoff}></Route>
                      <Route path="/pronosticoInit" component={Pronostico}></Route>
                      <Route path="/readme" component={Readme}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))