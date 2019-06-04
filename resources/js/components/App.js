import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContainer from './AppContainer'
import Readme from './readme';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_info: {
                'isLoggedIn': document.querySelector('meta[name="api_token"]') != null,
                'id': null,
                'api_token': '',
                'name': '',
                'email': '',
            },
        };

    }

    componentDidMount() {
        this.loadUserInfo();
    }

    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Switch>
                        <Route exact path="/" render={(props) => <AppContainer {...props} user_info={this.state.user_info} />} />
                        <Route path="/readme" component={Readme} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }

    loadUserInfo = () => {
        let api_token = document.querySelector('meta[name="api_token"]');
        if (api_token != null) {
            let csrf_token = document.querySelector('meta[name="csrf-token"]');
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
            axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token.content;
            let user_info = this.state.user_info;
            axios.get('/api/user').then(res => {
                user_info = res.data;
                this.setState({ user_info, received_user_info: true });
            })

        }
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))