import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Torneo from './Torneo'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/readme" component = { Readme }/>
                <Route exact path="/" component = { Torneo }/>
                <Route exact path="/home" component = { Torneo }/>
            </Switch>
        </BrowserRouter>
    )
    }
}

function Readme() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Acerca De</div>

                        <div class="card-body">
                            Esta página fue hecha usando Laravel como framework back-end, React como framework front-end y 
                            Bootstrap para CSS
                            <br/>
                            <br/>
                            Audits de Página Principal:
                            <br/>
                            <b>Rendimiento:</b> 43
                            <br/>
                            <b>Accesibilidad: </b> 83
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-app'))