import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Remera from './ComponenteRemera/Remera'
import NavBar from './NavBar'
import ListaCreaciones from './ComponenteCreaciones/ListaCreaciones'
import {ProovedorLogica} from './Logica'
import Default from './ComponenteDefault/Default'

class App extends Component {
    render () {
        return (
            <ProovedorLogica>
                <React.Fragment>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Remera} />
                            <Route path="/misCreaciones" component={ListaCreaciones}/>
                            <Route component={Default}/>
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
             </ProovedorLogica>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))