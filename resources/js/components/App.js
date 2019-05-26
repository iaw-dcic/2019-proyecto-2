import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoApp from './TodoApp'

class App extends Component {

    state = {
        userName: ''
    }

    constructor(props){
        super(props);
        this.state.userName = props.userName;
        console.log(this.state.userName);
        console.log("estoy aca");
    }
    render () {
        return (
            <BrowserRouter>
            
                <Switch>
                    <Route exact path="/" component={TodoApp}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))