import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../hoc/Layout';
import BurgerBuilder from './../containers/BurgerBuilder/BurgerBuilder'; 
import SavedBurgers from '../containers/SavedBurgers/SavedBurgers';

class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Layout>
                <Switch>
                     {/*Otras rutas aca arriba */}
                    <Route path="/savedBurgers" component={SavedBurgers} />
                    <Route path="/" component={BurgerBuilder} />
                </Switch>
            </Layout>
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))