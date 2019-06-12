import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Main from './Main'
import Equipo from './Equipo'
import Cuadro from './Cuadro'

import { Link } from 'react-router-dom'

//background:
class App extends Component {

// esto va en return       <Route exact path="/" component={HomePage} />
//     <Route path="/user/predictions" component={Main} />
    render () {
    return (

      <BrowserRouter>
        <div>
          <Cuadro />
        </div>
       </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
