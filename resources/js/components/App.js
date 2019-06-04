import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Remera from './ComponenteRemera/Remera'
import Header from './Header'
import MisCreaciones from './ComponenteCreaciones/MisCreaciones'
import {ProovedorLogica} from './Logica'
import Default from './ComponenteDefault/Default'

class App extends Component {
    render () {
        return (
            <ProovedorLogica>
                <React.Fragment>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Remera} />
                            <Route path="/misCreaciones" component={MisCreaciones}/>
                            <Route component={Default}/>
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
             </ProovedorLogica>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))