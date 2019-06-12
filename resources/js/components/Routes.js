
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';


class Routes extends Component {
    render() {
        return (

            <div className="App">
                <BrowserRouter>
                    <Switch>

                        <Route exact path="" component={Home} />

                    </Switch>
                </BrowserRouter>
            </div>


        );
    }
}

export default Routes;
