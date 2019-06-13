import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Remera from './ComponenteRemera/Remera'
import {ProovedorLogica} from './Logica'
import Default from './ComponenteDefault/Default'
import EditarRemera from './ComponenteEditar/Editar'

class App extends Component {
    render () {
        return (
            <ProovedorLogica>
                <React.Fragment>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Remera} />
                            <Route exact path="/editarRemera/:id" component={EditarRemera} />
                            <Route component={Default}/>
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
             </ProovedorLogica>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))