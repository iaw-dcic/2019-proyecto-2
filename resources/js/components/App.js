import Routes from './Routes';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router ,Link  } from 'react-router-dom';
import Example from './Example';

class App extends Component {
    render () {
    return (
        <Router>
        <div>
            <Example />
        </div>
        <Routes/>
        </Router>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
