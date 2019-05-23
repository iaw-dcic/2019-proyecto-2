import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TShirt from './TShirt'
import { SliderPicker } from 'react-color';
import './App.css';

class App extends Component {

    handleColorChange = (color) => {
        this.setState({ background: "#FFFFFF" });
    }

    render () {
    return (
        <BrowserRouter>
        <div id="content">
            <span id="tshirt-container">
                <div>
                    <TShirt id="tshirt"/>
                </div>
            </span>
            <span id="right_bar">
                <SliderPicker onChange={this.handleColorChange}/>
            </span>
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))
