
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
// import Example from './Example';

import ReactDOM from 'react-dom';

import Usuario from './../pages/Usuario'
import Prode from './Prode';
import Home from './Home';
import CrearProde from './CrearProde';
import EditarProde from '../pages/prode/EditarProde';


class Routes extends Component {
    render () {
    return (

        <div className="App">
        <BrowserRouter>
        <Switch>

             <Route exact path="/prode" component={Prode} />
             <Route exact path="/usuarios" component={Usuario} />
             <Route exact path="/crear" component={CrearProde} />
             <Route exact path="/modificar" component={EditarProde}  />
             <Route exact path="" component={Home}  />

        </Switch>
        </BrowserRouter>
        </div>


    );
    }
}

export default Routes;
