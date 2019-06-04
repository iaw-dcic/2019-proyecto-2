import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example from './Example'
import AvatarForm from './avatarForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <AvatarForm />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
