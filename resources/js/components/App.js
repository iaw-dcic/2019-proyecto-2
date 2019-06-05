import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Remera from './ComponenteRemera/Remera'
import NavBar from './NavBar'
import MisCreaciones from './ComponenteCreaciones/MisCreaciones'
import {ProovedorLogica} from './Logica'
import Default from './ComponenteDefault/Default'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    render () {
        return (
            <ProovedorLogica>
                <React.Fragment>
                    <BrowserRouter>
                      <NavBar />
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

ReactDOM.render(<Router />, document.getElementById('react-app'))