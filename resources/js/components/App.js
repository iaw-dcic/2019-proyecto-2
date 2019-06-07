import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom'
import Header from './Header'
import Example from './Example'
import Generador from './Generador'
import about from './About'
class App extends Component {
  render () {

    return (
      <Router>
      <div>
      <Header/>
        <ul>
          <li>
            <Link className='btn btn-primary' to="/">Home</Link>
          </li>
          <hr/>
          <li>
            <Link className='btn btn-primary' to="/About">About</Link>
          </li>
           <hr/>
            <li>
            <Link className='btn btn-primary' to="/Generador">TusProdes</Link>
          </li>
         
        </ul>

        <hr />

        <Route exact path="/" component={Example} />
       <Route exact path="/Generador" component={Generador} />  
      <Route exact path="/About" component={about} /> 
          

      </div>
    </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'))