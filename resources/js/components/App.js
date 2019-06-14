import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Editor from './Editor';

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
                <Editor/>
            </BrowserRouter>  
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))