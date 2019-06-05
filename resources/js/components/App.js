import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import CrearProde from './CrearProde';
import MisProdes from './MisProdes';
import IndexProde from './IndexProde';
import EditProde from './EditProde';


class App extends Component {

    render () {
        return (
            <BrowserRouter>
            {   //al primero que matchea entra..
            }
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />


                    {//<Route exact path="/prodes" component={IndexProde} />
                    }
                    <Route exact path="/prodes/create" component={CrearProde} />
                    <Route  path="/prodes/:id/edit" component={EditProde} />
                    <Route  path="/prodes/:id" component={IndexProde} />
                    <Route exact path="/prodes" component={MisProdes} />
                   
                    <Route component={NotFound} />
                </Switch>    
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('react-app'))