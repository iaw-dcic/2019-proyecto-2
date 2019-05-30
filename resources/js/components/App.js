import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Remera from './Remera'
import PanelColores from './PanelColores'
import PanelStampa from './PanelStampa';

class App extends Component {

    render () {
        return (
            <BrowserRouter>
            <h3> Diseña tu propia remera </h3>
            <div class = "row">
                <div class="col-md-8">
                    <Remera/>
                </div>
                <div class="col-md-4">
                    <PanelColores/>
                    <PanelStampa/>
                </div>
            </div>
            </BrowserRouter>  
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))