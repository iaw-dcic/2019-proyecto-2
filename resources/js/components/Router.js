import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar';
import Login from './Login';
import App from './App';
import {logout} from "./ApiUtils";

class Router extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
        };

       this.login=this.login.bind(this);
       this.logout=this.logout.bind(this);

    }

    componentDidMount() {
        const token = localStorage.getItem('userToken');

        if(token !== null){
            this.setState({ isAuthenticated : true })
        }
    }

    async logout(){
        let token = await localStorage.getItem('userToken');
        logout(token);
        localStorage.clear();
        this.setState({ isAuthenticated : false });
    }

    login(){
        this.setState({ isAuthenticated : true });
    }

    render () {

        return (
            <div>
                <NavBar
                    isAuthenticated={this.state.isAuthenticated}
                    logout={this.logout}
                />

                {
                    !this.state.isAuthenticated ?
                        <Login
                            authenticate={this.login}
                        />
                        :
                        <App/>
                }
           </div>
        )
    }
}

ReactDOM.render(<Router />, document.getElementById('react-app'))