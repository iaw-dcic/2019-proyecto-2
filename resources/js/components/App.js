import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Route, NavLink,HashRouter } from 'react-router-dom'
import Home from './Home'
import AvatarView from './AvatarView'
import Readme from './Readme'
import './ComponentCSS/Main.css'


//LA PARTE DE REACT SE HACE AQUÍ!
class App extends Component {
    render () {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/readme">Readme</NavLink></li>
            <li><NavLink to="/avatarView">CrearAvatar</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/readme" component={Readme}/>
            <Route path="/avatarView" component={AvatarView}/>
          </div>
        </div>
      </HashRouter>
        /*<BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/avatarView" component={AvatarView} />
                <Route path="/readme" component={Readme} />
            </Switch>
            <div className="button-group-lg">
                <HashRouter>
                    <NavLink to="/avatarView">Ir al creador de avatares!</NavLink>
                    <NavLink to="/readme">Ver Readme</NavLink>
                    <NavLink to="/">Ir a Casa</NavLink> 
                </HashRouter>
            </div>
        </BrowserRouter>*/
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))