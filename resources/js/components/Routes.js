
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
// import Example from './Example';


import Usuario from './../pages/Usuario'
import Home from './Home';
import GuardarProde from '../pages/prode/GuardarProde';
import EditarProde from '../pages/prode/EditarProde';


class Routes extends Component {
    render () {
    return (

        <div className="App">
        <BrowserRouter>
        <Switch>

             <Route exact path="/usuarios" component={Usuario} />
             <Route exact path="/guardar" component={GuardarProde} />
             <Route exact path="/modificar" component={EditarProde}  />
             <Route exact path="" component={Home}  />

        </Switch>
        </BrowserRouter>
        </div>


    );
    }
}

export default Routes;
