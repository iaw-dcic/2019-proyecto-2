import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout/Layout';
import BurgerBuilder from './../containers/BurgerBuilder/BurgerBuilder'; 

class App extends Component {
    render () {
    return (
        <BrowserRouter>
        <div>
            <Layout>
                <BurgerBuilder/>
            </Layout>
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))