import React, { Component } from 'react';


import Routes from './Routes'
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {



  render() {
    return (


          <div className="container-fluid">
            <Routes/>
          </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
