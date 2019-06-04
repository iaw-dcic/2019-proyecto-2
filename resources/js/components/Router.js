import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NavBar from './NavBar/NavBar';
import Login from '../containers/Login/Login';
import App from '../components/App';
import {logout} from "../api/ApiUtils";
import localStorage from "local-storage";

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
        const token = localStorage.get('userToken');

        if(token !== null){
            this.setState({ isAuthenticated : true })
        }
    }

    async logout(){
        let token = await localStorage.get('userToken');
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