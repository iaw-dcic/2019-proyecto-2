import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import HomePage from './HomePage'
import Main from './Main'
import Equipo from './Equipo'
import Cuadro from './Cuadro'
import AddPronostico from './AddPronostico'

//background:
class App extends Component {

// esto va en return       <Route exact path="/" component={HomePage} />
//     <Route path="/user/predictions" component={Main} />
    render () {
    return (

      <BrowserRouter>
        <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={Main} />
              <Route exact path="/teams" component={Equipo} />
              <Route exact path="/new" component={AddPronostico} />
              <Route exact path="/pronostico" component={Cuadro} />
        </div>
       </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
