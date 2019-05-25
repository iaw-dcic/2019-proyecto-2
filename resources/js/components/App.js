import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexProde from './IndexProde'
import Home from './Home'
import NotFound from './NotFound'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
            {   //al primero que matchea entra..
            }
                <Switch>    
                    {//<Route path="/algoA" component={Algo} />
                    //<Route path="/algoB" component={Algo} />
                    }
                    
                    <Route exact path="/" component={Home} />
                    
                    
                    <Route path="/prode/:idProde" component={IndexProde} />
                    <Route component={NotFound} />
                </Switch>    
                <div>
                    <indexProde />
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('react-app'))