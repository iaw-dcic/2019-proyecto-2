import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PanelSupremo from './PanelSupremo';

class App extends Component {

    /*<div class = "row">
    <div class="col-md-8">
        <Remera stampa="#"
        />
    </div>
    <div class="col-md-4">
        <PanelColores/>
        <PanelStampa/>
    </div>
    </div>*/

    render () {
        return (
            <BrowserRouter>
                <PanelSupremo/>
            </BrowserRouter>  
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))