import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TShirtEditor from './TShirtEditor';
import TShirt from './TShirt';
import ScrollMenu from 'react-horizontal-scrolling-menu';


window.axios = require('axios');
let api_token = document.querySelector('meta[name="api-token"]');
let token = document.head.querySelector('meta[name="csrf-token"]');

class App extends Component {

    state = {
        my_tshirts: []
    }

    componentDidMount = () => {

        if (token && api_token) {
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

            try {
                const response = axios.get('/api/tshirts')
                    .then(res => {
                        this.setState({ my_tshirts: res.data });
                    });
            } catch (e) {
                console.log('axios request failed:', e);
            }
        }
    }

    onSelect = key => {

    }

    render() {
        return (
            <BrowserRouter>
                <div className="row justify-content-center">
                    <TShirtEditor save={this.componentDidMount} />
                </div>
                {api_token &&
                    <div className="row justify-content-center">
                        <div id="myTshirts">
                            <ScrollMenu
                                data={this.state.my_tshirts.map((tshirt, key) =>
                                    <TShirt key={key}
                                        id={tshirt.id}
                                        tshirt_type={tshirt.tshirt_type}
                                        image_type={tshirt.image_type}
                                        image={tshirt.image}
                                        tshirt_color={tshirt.color}
                                        delete={this.componentDidMount}/>)
                                }
                                arrowLeft={<div className="arrow left"></div>}
                                arrowRight={<div className="arrow right"></div>}
                                onSelect={this.onSelect}
                            />
                        </div>
                    </div>
                }
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
