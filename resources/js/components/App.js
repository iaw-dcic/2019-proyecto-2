import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nuevo_pronostico from './nuevo_pronostico.js'
import Mis_pronosticos from './miPronostico.js'
import Main from './Main.js'

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
                      <Route path="/misPronosticos" component={Mis_pronosticos}></Route>
                      <Route path="/crear_pronostico" component={Nuevo_pronostico}></Route>
                     
        	</Switch>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))




