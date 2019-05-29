import React, { Component } from 'react';
//Rutas
import {Switch, Route} from 'react-router-dom';

import Prode from '../pages/prode/Prode';
import CrearProde from '../pages/prode/CrearProde';
import EditarProde from '../pages/prode/EditarProde';


class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path="/prode" exact component={Prode} />
                <Route path="/prode/crear" exact component={CrearProde} />
                <Route path="/prode/modificar" exact component={EditarProde} />
            </Switch>


        );
    }
}
export default Routes;
